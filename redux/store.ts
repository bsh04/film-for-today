import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {getTopFilmsAPI} from "../api/getTopFilmsAPI";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [getTopFilmsAPI.reducerPath]: getTopFilmsAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        [...getDefaultMiddleware(), getTopFilmsAPI.middleware]
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

setupListeners(store.dispatch)