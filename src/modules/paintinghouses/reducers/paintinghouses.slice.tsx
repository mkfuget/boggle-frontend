import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'
const BOARD_WIDTH = 10;
type AllowedColors = ("red" | "blue" | "green" | "white");
interface PaintingHousesState {
    boardColors: AllowedColors[];
    selectedColor: AllowedColors;
    redColorCosts: number[];
    blueColorCosts: number[];
    greenColorCosts: number[];
}
const randomizedInitialCosts = ():number[] =>
{
    let out = [];
    for(let i=0; i<BOARD_WIDTH; i++)
    {
        let value = (2 + Math.floor(Math.random()*18))*5;
        out.push(value);
    }
    return out;
}
const initialState:PaintingHousesState = 
{
    boardColors: Array(BOARD_WIDTH).fill("white"),
    selectedColor: "white",
    redColorCosts: randomizedInitialCosts(),
    blueColorCosts: randomizedInitialCosts(),
    greenColorCosts: randomizedInitialCosts(),
}

const paintingHousesSlice = createSlice({
    name: 'paintinghouses',
    initialState,
    reducers: {
        selectColor: (state, action: PayloadAction<AllowedColors>)=>{
            state.selectedColor = action.payload;
        },
    }

})

export const {selectColor} = paintingHousesSlice.actions;

export const getPaintingHousesData = (state: RootState) => state.paintinghouses;
export default paintingHousesSlice.reducer;