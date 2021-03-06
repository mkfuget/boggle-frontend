import { configureStore } from '@reduxjs/toolkit'
import boggle from './modules/boggle/reducers/boggle.slice'
import sudoku from './modules/sudoku/reducers/sudoku.slice'
import pathfinder from './modules/pathfinder/reducers/pathfinder.slice'
import paintinghouses from './modules/paintinghouses/reducers/paintinghouses.slice'
import conceptssidebar from './modules/conceptsSideBar/concepts.slice'

export const store = configureStore({
  reducer: {
    boggle,
    sudoku,
    paintinghouses,
    pathfinder,
    conceptssidebar,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
