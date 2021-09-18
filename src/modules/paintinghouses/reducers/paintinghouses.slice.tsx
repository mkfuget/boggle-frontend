import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stringify } from 'querystring';
import type { RootState } from '../../../store'
export const BOARD_WIDTH = 10;
export type AllowedColors = ("red" | "blue" | "green" | "white");
interface PaintHousePayload {
    color: AllowedColors;
    index: number;
}
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
        paintHouse: (state, action: PayloadAction<PaintHousePayload>)=>{
            const index = action.payload.index;
            const color = action.payload.color;
            state.boardColors[index] = color;
            if(index>0 && state.boardColors[index - 1] === color)
            {
                state.boardColors[index - 1] = "white"
            }
            if(index<BOARD_WIDTH - 1 && state.boardColors[index + 1] === color)
            {
                state.boardColors[index + 1] = "white"
            }

        },
        paintAllHouses: (state, action: PayloadAction<AllowedColors[]>)=>{
            state.boardColors = action.payload;
        },
        newPuzzle:(state)=>{
            state.boardColors = Array(BOARD_WIDTH).fill("white");
            state.redColorCosts = randomizedInitialCosts();
            state.greenColorCosts = randomizedInitialCosts();
            state.blueColorCosts = randomizedInitialCosts();

        }
    }

})

export const {selectColor, paintHouse, paintAllHouses, newPuzzle} = paintingHousesSlice.actions;

export const getPaintingHousesData = (state: RootState) => state.paintinghouses;
export default paintingHousesSlice.reducer;