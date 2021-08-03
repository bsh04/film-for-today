import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {getTopFilmsApi} from "./slices/topFilmsSlice";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [getTopFilmsApi.reducerPath]: getTopFilmsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getTopFilmsApi.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

setupListeners(store.dispatch)