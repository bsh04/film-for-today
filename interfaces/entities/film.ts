export interface FilmI {
    filmId: number
    nameRu: string
    nameEn: string
    year: number
    filmLength: string
    countries: Array<CountryI>
    genres: Array<GenreI>
    rating: number
    ratingVoteCount: number
    posterUrl: string
    posterUrlPreview: string
    ratingChange?: string
    slogan: null,
    description: null,
    type: "FILM",
    ratingMpaa?: number,
    ratingAgeLimits?: number,
    premiereRu?: string,
    distributors?: string,
    premiereWorld?: string,
    premiereDigital?: string,
    premiereWorldCountry?: string,
    premiereDvd?: string,
    premiereBluRay?: string,
    distributorRelease?: string,
}

export interface CountryI {
    country: string
}

export interface GenreI {
    genre: string
}