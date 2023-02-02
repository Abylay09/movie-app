import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFilm, IPopularFilm } from "../../types/interfaces";

export const getPopularMovies = createAsyncThunk<any, undefined, { rejectValue: string }>(
    "getPopularFilms",
    async (_, { rejectWithValue }) => {
        
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        // const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        const result = await response.json();
        return result.results;
    }
)


export const getRecommendations = createAsyncThunk<any, number, { rejectValue: string }>(
    "getRecommendedFilms",
    async (id = 3, { rejectWithValue }) => {
        // const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${id}`);
        
        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        const result = await response.json();

        return result.results
    }
)

export const getFilmDetails = createAsyncThunk<IFilm, string, { rejectValue: string | undefined }>(
    "getFilmDetails",
    async (id, ThunkAPI) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

        if (!response.ok) {
            return ThunkAPI.rejectWithValue('Server Error!');
        }

        const result = await response.json();

        return result
    }
)