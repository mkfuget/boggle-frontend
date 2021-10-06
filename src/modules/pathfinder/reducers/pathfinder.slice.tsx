import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { API, graphqlOperation } from 'aws-amplify';
import { stringify } from 'querystring';
import { getPathFinderPuzzle } from '../../../graphql/queries';
import type { RootState } from '../../../store'
import Board from '../functional/board/board';
import Cursor from '../functional/board/cursor';
export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 10;
export const TOTAL_SQUARES = BOARD_HEIGHT*BOARD_WIDTH;
interface cursorData {
    xIndex: number;
    yIndex: number;
    bitMask: number;    
}

interface lightCellData {
    xIndex: number;
    yIndex: number;
    color: string;
}

interface PathFinderState {
    loading: 'pending' | 'idle';
    currentPuzzle: number;
    board: string[][];
    boardColors: string[][];
    cursor: cursorData;
}

const board: Board = Board.initializeBoard(BOARD_HEIGHT, BOARD_WIDTH, new Array(BOARD_WIDTH).fill("E").map((row: string[]) => Array(BOARD_WIDTH).fill("E")));
const MAX_PUZZLES = 5;
export const getPuzzle = createAsyncThunk(
    '/pathfinder/getPuzzle',
    async (arg, { getState }) => {
      const state:any = getState(); // <-- invoke and access state object

      const response:any = await API.graphql(graphqlOperation(getPathFinderPuzzle, { id: ("PathFinderPuzzle" + state.pathfinder.currentPuzzle)}));
      return response;
    }
  )
  

const initialState:PathFinderState = 
{
    loading: 'idle',
    currentPuzzle: 0,
    board: board.getCellTypes(),
    boardColors: new Array(BOARD_WIDTH).fill("white").map((row: string[]) => Array(BOARD_WIDTH).fill("white")),
    cursor: {
        xIndex: 0,
        yIndex: 0,
        bitMask: 0,    
    }
}

const pathFinderSlice = createSlice({
    name: 'pathfinder',
    initialState,
    reducers: {
        updateCursor: (state, action: PayloadAction<cursorData>)=>{
            state.cursor  = action.payload;
        },
        addBoard: (state, action: PayloadAction<string[][]>)=>{
            state.board  = action.payload;
        },
        lightCell: (state, action: PayloadAction<lightCellData>)=>{
            state.boardColors[action.payload.xIndex][action.payload.yIndex] = action.payload.color;
        },
        resetCursor: (state)=>{
            const board = Board.initializeBoard(BOARD_WIDTH, BOARD_HEIGHT, state.board);
            const cursor = new Cursor(board);
            state.cursor = {
                xIndex: cursor.xIndex,
                yIndex: cursor.yIndex,
                bitMask: cursor.bitMask,
            }
            state.boardColors = new Array(BOARD_WIDTH).fill("white").map((row: string[]) => Array(BOARD_WIDTH).fill("white"));

        }
    },
    extraReducers: (builder) =>{
        builder.addCase(getPuzzle.pending, (state, action) => {
            state.loading = "pending";
            state.currentPuzzle++;
            if(state.currentPuzzle > 5)
            {
                state.currentPuzzle = 1;
            }
        });
        builder.addCase(getPuzzle.fulfilled, (state, {payload}) => {
            const boarddata = new Array(BOARD_HEIGHT).fill("E").map((row: string[]) => Array(BOARD_WIDTH).fill("E"));
            console.log(payload);
            for(let i=0; i<BOARD_HEIGHT; i++)
            {
                for(let j=0; j<BOARD_WIDTH; j++)
                {
                    boarddata[i][j] = payload.data.getPathFinderPuzzle.entries[i*BOARD_HEIGHT + j];
                }
            }
            const board = Board.initializeBoard(BOARD_WIDTH, BOARD_HEIGHT, boarddata);
            const cursor = new Cursor(board);
            state.board = boarddata;
            state.cursor = {
                xIndex: cursor.xIndex,
                yIndex: cursor.yIndex,
                bitMask: cursor.bitMask,
            }
            state.boardColors = new Array(BOARD_WIDTH).fill("white").map((row: string[]) => Array(BOARD_WIDTH).fill("white"));
            state.loading = "idle";
        });
        builder.addCase(getPuzzle.rejected, (state, {payload}) => {
            console.log(payload);
        });

    },
    

})

export const {updateCursor, addBoard, lightCell, resetCursor} = pathFinderSlice.actions;

  

export const getPathFinderBoard = (state: RootState) => state.pathfinder.board;
export const getPathFinderBoardColors = (state: RootState) => state.pathfinder.boardColors;
export const getLoading = (state: RootState) => state.pathfinder.loading;
export const getPathFinderCursor = (state: RootState) => state.pathfinder.cursor;

export default pathFinderSlice.reducer;