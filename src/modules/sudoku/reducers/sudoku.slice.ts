import * as Constants from "../constants"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import {BoardObject, HeapEntry } from '../functional/sudokuBoardData'

interface flashInterface{
    indices: number[],
    color: string,
}
const initialBoard:BoardObject = 
{
    boardData: Array(Constants.BOARD_SQUARES).fill(-1),
    confirmedSquares: Array(Constants.BOARD_SQUARES).fill(-1),
    boardHeapIndex: Array(4*Constants.BOARD_SQUARES).fill(-1),
    boardBlocks: Array(4*Constants.BOARD_SQUARES).fill(-1).map((x:number[]) => Array(Constants.BOARD_WIDTH)),
    boardNumOptions: Array(4*Constants.BOARD_SQUARES).fill(9),
    solveOrder: Array<HeapEntry>(4*Constants.BOARD_SQUARES).fill({numOptions: 9, index: 0}),
    heapSize: 4*Constants.BOARD_SQUARES,
}

const initialcolor =Array(Constants.BOARD_SQUARES).fill("white");

const initialState: {board:BoardObject, color:string[], selected: number} = {
    board: initialBoard,
    color: initialcolor,
    selected: -1,
}


const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState,
    reducers: {
        updateBoard: (state, action: PayloadAction<BoardObject>)=>
        {
            state.board = action.payload;
        },      
        selectCell: (state, action: PayloadAction<number>)=>{
            const lastIndex = state.selected;
            state.selected = action.payload;
            state.color[action.payload] = "rgba(142, 190, 218, 0.5)";            
            state.color[lastIndex] = "white";

        },
        confirmSquares: (state)=>
        {
            for(let i=0; i<state.board.confirmedSquares.length; i++)
            {
                if(state.board.boardData[i]!==-1)
                {
                    state.board.confirmedSquares[i] = true;
                }
            }
        },
        flashSquares: (state, action: PayloadAction<flashInterface>)=>{
            for(let i=0; i<action.payload.indices.length; i++)
            {
                state.color[action.payload.indices[i]] = action.payload.color;
            }
        },
        flashOff: (state, action: PayloadAction<number>)=>{
            state.color[action.payload] = "white";
        },
    }

})

export const {updateBoard, selectCell, confirmSquares, flashSquares} = sudokuSlice.actions;

export const getSudokuBoardData = (state: RootState) => state.sudoku.board;
export const getSudokuSelected = (state: RootState) => state.sudoku.selected;
export const getFlashColorData = (state: RootState) => state.sudoku.color;

export default sudokuSlice.reducer;