import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {FilmI} from "../../interfaces/entities/film";

interface TopFilmsResponse {
    pagesCount?: number
    films: Array<FilmI>
}

export const getTopFilmsApi = createApi({
    reducerPath: "topFilms",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://kinopoiskapiunofficial.tech/api/v2.2/",
        prepareHeaders: headers => {
            headers.set("X-API-KEY", "31964e49-1639-4bf2-b93c-59f8717da565")
            return headers
        }
    }),
    endpoints: (builder) => ({
        getFilms: builder.query<TopFilmsResponse, string>({
            query: () => "films/top?type=TOP_250_BEST_FILMS&page=1"
        })
    })
})

export const {useGetFilmsQuery} = getTopFilmsApi
