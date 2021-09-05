import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'state/store'

interface FractionState {
  list: Array<Fraction>
}

const initialState: FractionState = {
  list: []
}

export const fractionsSlice = createSlice({
  name: 'fractions',
  initialState,
  reducers: {
    setFractions: (state, action) => {
      state.list = action.payload;
    }
  },
})

export const { setFractions } = fractionsSlice.actions

export const currentFraction = ((state: RootState, fractionId: number)  => state.fractions.list.filter(f => f.id === fractionId)[0]);

export default fractionsSlice.reducer