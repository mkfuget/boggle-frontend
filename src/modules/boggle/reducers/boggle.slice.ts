import * as Constants from "../constants"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
import { addDictionary } from "../functional/BoggleBoardData";
interface Dictionary<T> {
    [K: string]: T
}

interface BoggleState {
    board: string[][];
    selected: boolean[][];
    indexChain: Constants.Point[],
    currentWord: string;
    dictionary: Dictionary<boolean>;

}
const initialState:BoggleState = 
{
    board: Array(Constants.BOARD_WIDTH).fill("0").map((x:string[]) => Array(Constants.BOARD_HEIGHT).fill("0")),
    selected: Array(Constants.BOARD_WIDTH).fill(false).map((x:string[]) => Array(Constants.BOARD_HEIGHT).fill(false)),
    indexChain: [],
    currentWord: "",
    dictionary: {},
}

const boggleSlice = createSlice({
    name: 'boggle',
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
export default boggleSlice.reducer;