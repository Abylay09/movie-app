export interface IPopularFilm {
    id: number,
    backdrop_path: string,
    title: string
}

export interface IRecommendedFilm {
    id: number,
    backdrop_path: string,
    title: string,
    vote_average: number,
    release_date: string,
    poster_path: string
}

export type productionCountries = {
    "iso_3166_1": string,
    name: string
}

export type genres = {
    id: number,
    name: string
}

export interface ProductionCompany {
    id: number;
    logo_path?: any;
    name: string;
    origin_country: string;
}

export interface IFilm {
    id: number,
    title: string,
    backdrop_path: string,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    production_countries: productionCountries[],
    genres: genres[],
    release_date: string,
    vote_average: number,
    production_companies: ProductionCompany[];
    status: string
}

export interface IActor {
    name: string,
    popularity: string,
    known_for_department : string,
    profile_path : string,
    known_for : IFilm[]
}