import { configureStore } from '@reduxjs/toolkit'
import boggle from './modules/boggle/reducers/boggle.slice'
import sudoku from './modules/sudoku/reducers/sudoku.slice'

export const store = configureStore({
  reducer: {
    boggle,
    sudoku,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
