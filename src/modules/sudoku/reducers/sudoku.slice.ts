import * as Constants from "../constants"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import {BoardObject, HeapEntry } from '../functional/sudokuBoardData'

interface cellColorData{
    color: string[];
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

const initialState: {board:BoardObject, cellBackground:cellColorData, selected: number} = {
    board: initialBoard,
    cellBackground: initialCellBackground,
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
            state.cellBackground.color[action.payload] = "rgba(142, 190, 218, 0.5)";            
            state.cellBackground.color[lastIndex] = "white";

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
        }
    }

})

export const {updateBoard, selectCell, confirmSquares} = sudokuSlice.actions;

export const getSudokuBoardData = (state: RootState) => state.sudoku.board;
export const getSudokuSelected = (state: RootState) => state.sudoku.selected;
export const getFlashColorData = (state: RootState) => state.sudoku.cellBackground;

export default sudokuSlice.reducer;