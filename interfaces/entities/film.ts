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
}

export interface CountryI {
    country: string
}

export interface GenreI {
    genre: string
}