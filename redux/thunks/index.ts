import {createAsyncThunk} from "@reduxjs/toolkit";
import {FilmsTopType} from "../../static/api";
import {homeAPI} from "../../api/homeAPI";

export const fetchFilmsByType = createAsyncThunk(
    'users/fetchFilmsByType',
    async (filmType: FilmsTopType, thunkAPI) => {
        const response = await homeAPI.fetchHomeData(filmType)
        return response.films
    }
)