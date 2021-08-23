import {fetchService} from "../tools/fetchService";
import {FilmsTopType} from "../static/enums";
import {FilmI} from "../interfaces/entities/film";
import {GenreI} from "../interfaces/entities/genre";
import {CountryI} from "../interfaces/entities/country";

export interface FetchHomeDataResponse {
    pagesCount: number
    films: Array<FilmI>
}

export interface FetchFiltersDataResponse {
    genres: Array<GenreI>
    countries: Array<CountryI>
}

const fetchHomeData = (type: FilmsTopType) => fetchService({url: "films/top", params: `type=${type}`, version: 2})

const fetchFilters = () => fetchService({url: "films/filters"})

export const homeAPI = {
    fetchHomeData,
    fetchFilters
}