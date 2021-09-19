import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stringify } from 'querystring';
import type { RootState } from '../../../store'
import Board from '../functional/board/board';
export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 10;
export const TOTAL_SQUARES = BOARD_HEIGHT*BOARD_WIDTH;
interface cursorData {
    xIndex: number;
    yIndex: number;
    bitMask: number;    
}
interface BoardData {
    entries: string[][];
    backgroundImages: string[][];
}
interface PathFinderState {
    board: string[][];
    boardColors: string[][];
    backgroundImages: string[][];
    cursor: cursorData;
}

const board: Board = Board.initializeBoard(BOARD_HEIGHT, BOARD_WIDTH, new Array(BOARD_WIDTH).fill("W").map((row: string[]) => Array(BOARD_WIDTH).fill("W")));


const initialState:PathFinderState = 
{
    board: board.getCellTypes(),
    boardColors: new Array(BOARD_WIDTH).fill("white").map((row: string[]) => Array(BOARD_WIDTH).fill("white")),
    backgroundImages: board.getBackgroundImages(),
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
        addBoard: (state, action: PayloadAction<BoardData>)=>{
            state.board  = action.payload.entries;
            state.backgroundImages = action.payload.backgroundImages;
        }
    }

})

export const {updateCursor, addBoard} = pathFinderSlice.actions;

export const getPathFinderBoard = (state: RootState) => state.pathfinder.board;
export const getPathFinderBoardColors = (state: RootState) => state.pathfinder.boardColors;
export const getPathFinderBackgroundImages = (state: RootState) => state.pathfinder.backgroundImages;

export const getPathFinderCursor = (state: RootState) => state.pathfinder.cursor;

export default pathFinderSlice.reducer;