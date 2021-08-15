import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import {homePageSlice} from "./slices/homePageSlice";

export const store = configureStore({
    reducer: {
        homePage: homePageSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        [...getDefaultMiddleware()]
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

setupListeners(store.dispatch)