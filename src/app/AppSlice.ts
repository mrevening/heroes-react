import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'state/store'

interface AppState {
  showMainMenu: boolean,
  showGame: boolean
}

const initialState: AppState = {
  showMainMenu: true,
  showGame: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowMainManu: (state) => {
      state.showMainMenu = true
      state.showGame = false
    },
    setShowGame: (state) => {
        state.showMainMenu = false
        state.showGame = true
      }
  },
})

export const { setShowMainManu, setShowGame } = appSlice.actions

export const showMainMenu = (state: RootState) => state.app.showMainMenu
export const showGame = (state: RootState) => state.app.showGame

export default appSlice.reducer