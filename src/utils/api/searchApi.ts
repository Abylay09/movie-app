import { createAsyncThunk } from "@reduxjs/toolkit";
import { IActor, IFilm } from "../../types/interfaces";

export const getSearchedMovies = createAsyncThunk<any, string>(
    "getSearchMovies",
    async (query, ThunkApi) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        if (!response.ok) {
            return ThunkApi.rejectWithValue("Error with Server")
        }

        const result = await response.json();
        return result;
    }
)

export const getSearchedActors= createAsyncThunk<any, string>(
    "getSearchActors",
    async (query, ThunkApi) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/person?language=en-US&query=${query}&page=1&include_adult=false&api_key=${process.env.REACT_APP_API_KEY}`)
        if (!response.ok) {
            return ThunkApi.rejectWithValue("Error with Server")
        }

        const result = await response.json();
        return result;
    }
)


