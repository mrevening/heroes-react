import { createSlice } from '@reduxjs/toolkit'

interface ScenariosState {
  list: Array<IScenario>
}

const initialState: ScenariosState = {
  list: []
}

export const scenariosSlice = createSlice({
  name: 'scenarios',
  initialState,
  reducers: {
    setScenarios: (state, action) => {
      state.list = action.payload;
    },
  },
})

export const { setScenarios } = scenariosSlice.actions

export default scenariosSlice.reducer