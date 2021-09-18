import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stringify } from 'querystring';
import type { RootState } from '../../../store'
export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 10;
export const TOTAL_SQUARES = BOARD_HEIGHT*BOARD_WIDTH;
interface cursorData {
    xIndex: number;
    yIndex: number;
    bitMask: number;    
}
interface PathFinderState {
    board: string[][];
    boardColors: string[][];
    cursor: cursorData;
}
const initialState:PathFinderState = 
{
    board: new Array(BOARD_WIDTH).fill("E").map((row: string[]) => Array(BOARD_WIDTH).fill("E")),
    boardColors: new Array(BOARD_WIDTH).fill("E").map((row: string[]) => Array(BOARD_WIDTH).fill("white")),
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
        }
    }

})

export const {updateCursor} = pathFinderSlice.actions;

export const getPathFinderBoard = (state: RootState) => state.pathfinder.board;
export const getPathFinderBoardColors = (state: RootState) => state.pathfinder.boardColors;
export const getPathFinderCursor = (state: RootState) => state.pathfinder.cursor;

export default pathFinderSlice.reducer;