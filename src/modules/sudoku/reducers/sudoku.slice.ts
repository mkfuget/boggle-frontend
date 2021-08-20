import * as Constants from "../constants"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import {BoardObject, HeapEntry } from '../functional/sudokuBoardData'

interface cellColorData{
    color: String[];
    flash: boolean[];
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

const initialCellBackground: cellColorData = {
    color: Array(Constants.BOARD_SQUARES).fill("white"),
    flash: Array(Constants.BOARD_SQUARES).fill(false),
}

const initialState: {board:BoardObject, cellBackground:cellColorData} = {
    board: initialBoard,
    cellBackground: initialCellBackground,
}


const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState,
    reducers: {
        updateBoard: (state, action: PayloadAction<BoardObject>)=>
        {
            state.board = action.payload;
        },      
    }

})

export const {updateBoard} = sudokuSlice.actions;

export const getSudokuBoardData = (state: RootState) => state.sudoku.board;
export default sudokuSlice.reducer;