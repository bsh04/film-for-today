import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilmsTopType, LoadingStatus} from "../../static/api";
import {FilmI} from "../../interfaces/entities/film";
import {fetchFilmsByType} from "../thunks";
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {Payload} from "@hapi/boom";

interface SliceState {
    films: Array<FilmI>
    loading: LoadingStatus
    type: FilmsTopType
}

const initialState: SliceState = {
    films: [],
    loading: LoadingStatus.IDLE,
    type: FilmsTopType.TOP_AWAIT_FILMS
}

export const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        nextReducer(state: SliceState, action: PayloadAction<Array<FilmI>>) {
            state.films = action.payload
            state.loading = LoadingStatus.FULL_FILLED
        },
        setFilmsType(state: SliceState, action: PayloadAction<FilmsTopType>) {
            state.type = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchFilmsByType.pending, (state) => {
            state.loading = LoadingStatus.PENDING
        })

        builder.addCase(fetchFilmsByType.fulfilled, (state, action) => {
            state.films = action.payload
            state.loading = LoadingStatus.FULL_FILLED
        })
    },
})
