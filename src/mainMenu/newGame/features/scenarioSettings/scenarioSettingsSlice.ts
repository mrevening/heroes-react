import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'store'

interface Opponents{
  fractionId: Number,
  color: String,
  human: Boolean | undefined
  blocked: Boolean | undefined
  classBlocked: Boolean | undefined
}

interface ScenarioSettings {
  settings: {
    id: Number,
    name: String,
    size : String,
    difficulty: String,
    description: String,
    opponents: Array<Opponents>
  }
}

const initialState: ScenarioSettings = {
  settings: {
    id: 0,
    name: "",
    size : "",
    difficulty: "",
    description: "",
    opponents: [],
  }
}

export const scenarioSettingsSlice = createSlice({
  name: 'scenarioSettings',
  initialState,
  reducers: {
    setScenarioSettings: (state, action) => {
      state.settings = action.payload;
    },
    setHuman: (state, action) => {
      const targetSpot = state.settings.opponents[action.payload];
      if (targetSpot.blocked === true) return state;
      const humanPlayers = state.settings.opponents.filter(o => o.human === true);
      humanPlayers.map(p => delete p.human);
      state.settings.opponents[action.payload].human = true;
    },
    setFraction: (state, action) => {
      if (action.payload.classBlocked) return state;
      state.settings.opponents[action.payload.slot].fractionId = action.payload.id !== 6 ? action.payload.id + 1 : 0;
    }
  },
})

export const { setScenarioSettings, setHuman, setFraction } = scenarioSettingsSlice.actions

export default scenarioSettingsSlice.reducer