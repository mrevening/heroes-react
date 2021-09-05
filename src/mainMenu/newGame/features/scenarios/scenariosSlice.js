import { createSlice } from '@reduxjs/toolkit'

export const scenariosSlice = createSlice({
  name: 'scenarios',
  initialState: {
    list: [],
  },
  reducers: {
    setScenarios: (state, action) => {
      state.list = action.payload;
    },
  },
})

export const { setScenarios } = scenariosSlice.actions

export default scenariosSlice.reducer