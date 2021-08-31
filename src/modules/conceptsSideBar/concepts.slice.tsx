import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
interface Dictionary<T> {
    [K: string]: T
}

interface ConceptsSidebarState {
    toggled: boolean;
    currentPage: number;
    maxPage: number,
    pagesContent: [];

}
const initialState:ConceptsSidebarState = 
{
    toggled: false,
    currentPage: 0,
    maxPage: 0,
    pagesContent: [],

}

const conceptsSideBarSlice = createSlice({
    name: 'conceptssidebar',
    initialState,
    reducers: {
        pageUp: (state)=>{
            if(state.currentPage<state.maxPage)
            {
                state.currentPage++;
            }
        },
        pageDown: (state)=>{
            if(state.currentPage>0)
            {
                state.currentPage--;
            }
        },
        toggle: (state)=>{
            state.toggled = !state.toggled;
        }
    }

})

export const {pageUp, pageDown, toggle} = conceptsSideBarSlice.actions;

export const getToggle = (state: RootState) => state.conceptssidebar.toggled;
export const getBoggleData = (state: RootState) => state.boggle;
export const getChainData = (state: RootState) => state.boggle.indexChain;
export const getHeadData = (state: RootState) => (state.boggle.indexChain.length > 0 ? state.boggle.indexChain[state.boggle.indexChain.length - 1] : ({xIndex: -1, yIndex: -1}))
export const getDictionary = (state: RootState) => state.boggle.dictionary;
export default conceptsSideBarSlice.reducer;