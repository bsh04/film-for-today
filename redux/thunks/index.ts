import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchFiltersDataResponse, homeAPI} from "../../api/homeAPI";
import {FilmsTopType} from "../../static/enums";

export const fetchFilmsByType = createAsyncThunk(
    'users/fetchFilmsByType',
    async (filmType: FilmsTopType) => {
        const response = await homeAPI.fetchHomeData(filmType)
        return response.films
    }
)

export const fetchFilters = createAsyncThunk(
    'users/fetchFilters',
    async () => {
        return await homeAPI.fetchFilters()
    }
)