import * as Constants from "../constants"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import {BoardObject } from '../functional/sudokuBoardData'
const initialState:BoardObject = 
{
    boardData: new Array(Constants.BOARD_SQUARES).fill(-1),
    confirmedSquares: new Array(Constants.BOARD_SQUARES).fill(-1),
    boardHeapIndex: new Array(4*Constants.BOARD_SQUARES).fill(-1),
    boardBlocks: number[][];
    boardNumOptions: number[];
    solveOrder: HeapEntry[];
    heapSize: 4*Constants.BOARD_SQUARES;
}

const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState,
    reducers: {
        addIndex: (state, action:  PayloadAction<Constants.Point>)=> {
            state.selected[action.payload.xIndex][action.payload.yIndex] = true;
            state.indexChain.push(action.payload);
            state.currentWord += state.board[action.payload.yIndex][action.payload.xIndex]
            if(state.currentWord in state.dictionary)
            {
                state.dictionary[state.currentWord] = true;
            }
        },
        removeIndex: (state, action:  PayloadAction<Constants.Point>)=> {
            
            let headIndex = state.indexChain.pop();
            if(headIndex !== undefined)
            {
                let headXIndex = headIndex.xIndex;
                let headYIndex = headIndex.yIndex;
                state.selected[headXIndex][headYIndex] = false;
                state.currentWord = state.currentWord.slice(0, -1)
                while(headIndex !==undefined && !(headXIndex === action.payload.xIndex && headYIndex === action.payload.yIndex))
                {
                    headIndex = state.indexChain.pop();
                    if(headIndex !== undefined)
                    {
                        headXIndex = headIndex.xIndex;
                        headYIndex = headIndex.yIndex;
                        state.selected[headXIndex][headYIndex] = false;
                        state.currentWord = state.currentWord.slice(0, -1)
                    }
                }
            }
        },
        reset: state => {
            state = initialState;
        },
        setBoard: (state, action: PayloadAction<{board:string[][], dictionary: string[]}>)=>
        {
            state.dictionary = {};
            state.board=action.payload.board;
            action.payload.dictionary.forEach(element => {
                state.dictionary[element] = false;
            }); 
        },      
    }

})

export const {addIndex, removeIndex, reset, setBoard} = boggleSlice.actions;

export const getBoggleData = (state: RootState) => state.boggle;
export const getChainData = (state: RootState) => state.boggle.indexChain;
export const getHeadData = (state: RootState) => (state.boggle.indexChain.length > 0 ? state.boggle.indexChain[state.boggle.indexChain.length - 1] : ({xIndex: -1, yIndex: -1}))
export const getDictionary = (state: RootState) => state.boggle.dictionary;
export default sudokuSlice.reducer;