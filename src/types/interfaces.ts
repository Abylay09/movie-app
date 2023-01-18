export interface IPopularFilm {
    id : number,
    backdrop_path : string,
    title : string
}

export interface IRecommendedFilm {
    id : number,
    backdrop_path : string,
    title : string,
    vote_average : number,
    release_date : string
}