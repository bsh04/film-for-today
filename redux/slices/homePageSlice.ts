import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoadingStatus} from "../../static/api";
import {FilmI} from "../../interfaces/entities/film";
import {fetchFilmsByType, fetchFilters} from "../thunks";
import {FilmsTopType} from "../../static/enums";
import {FetchFiltersDataResponse} from "../../api/homeAPI";
import {CountryI} from "../../interfaces/entities/country";
import {GenreI} from "../../interfaces/entities/genre";
import {SelectChangeEvent} from "../../components/Select/Select";

interface SliceState {
    films: Array<FilmI>
    filters: FetchFiltersDataResponse
    filmsLoading: LoadingStatus
    filtersLoading: LoadingStatus
    type: FilmsTopType
    country?: SelectChangeEvent
    genre?: SelectChangeEvent
}

const initialState: SliceState = {
    films: [],
    filters: {
        countries: [],
        genres: []
    },
    filmsLoading: LoadingStatus.IDLE,
    filtersLoading: LoadingStatus.IDLE,
    type: FilmsTopType.TOP_AWAIT_FILMS
}

export const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        nextReducer(state: SliceState, action: PayloadAction<Array<FilmI>>) {
            state.films = action.payload
            state.filmsLoading = LoadingStatus.FULL_FILLED
        },
        setFilmsType(state: SliceState, action: PayloadAction<FilmsTopType>) {
            state.type = action.payload
        },
        setCountry(state: SliceState, action: PayloadAction<SelectChangeEvent>) {
            state.country = action.payload
        },
        setGenre(state: SliceState, action: PayloadAction<SelectChangeEvent>) {
            state.genre = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchFilmsByType.pending, (state) => {
            state.filmsLoading = LoadingStatus.PENDING
        })

        builder.addCase(fetchFilmsByType.fulfilled, (state, action) => {
            state.films = action.payload
            state.filmsLoading = LoadingStatus.FULL_FILLED
        })
        builder.addCase(fetchFilters.pending, (state) => {
            state.filtersLoading = LoadingStatus.PENDING
        })

        builder.addCase(fetchFilters.fulfilled, (state, action) => {
            state.filters = action.payload
            state.filtersLoading = LoadingStatus.FULL_FILLED
        })
    },
})
