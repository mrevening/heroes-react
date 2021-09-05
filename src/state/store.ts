import { configureStore } from '@reduxjs/toolkit'
import AppReducer from 'app/AppSlice';
import scenariosReducer from 'mainMenu/newGame/features/scenariosSlice';
import fractionsReducer from 'mainMenu/newGame/features/fractionsSlice';
import scenarioSettingsReducer from 'mainMenu/newGame/features/scenarioSettingsSlice';

const store = configureStore({
    reducer: {
        app: AppReducer,
        scenarioSettings: scenarioSettingsReducer,
        scenarios: scenariosReducer,
        fractions: fractionsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store