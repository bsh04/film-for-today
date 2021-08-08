import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {FilmI} from "../interfaces/entities/film";
import {FilmsTopType} from "../static/api";
import {baseQueryService} from "./baseQueryService";

export interface TopFilmsResponse {
    pagesCount?: number
    films: Array<FilmI>
}

export const getTopFilmsAPI = createApi({
    reducerPath: "topFilms",
    baseQuery: baseQueryService(),
    endpoints: (builder) => ({
        getFilms: builder.query<TopFilmsResponse, FilmsTopType>({
            query: (type) => `films/top?type=${type}&page=1`
        })
    })
})

export const {useGetFilmsQuery} = getTopFilmsAPI
