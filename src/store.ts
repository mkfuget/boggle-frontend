import { configureStore } from '@reduxjs/toolkit'
import boggle from './modules/boggle/reducers/boggle.slice'
export const store = configureStore({
  reducer: {
    boggle,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
