import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPopularFilm } from "../../types/interfaces";

export const getPopularMovies = createAsyncThunk<any, undefined, { rejectValue: string }>(
    "getPopularFilms",
    async (_, { rejectWithValue }) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        const result = await response.json();
        return result.results;
    }
)


export const getRecommendations = createAsyncThunk<any, undefined, { rejectValue: string }>(
    "getRecommendedFilms",
    async (_, { rejectWithValue }) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/3/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)

        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        const result = await response.json();

        return result.results
    }
)