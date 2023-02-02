import { createAsyncThunk } from "@reduxjs/toolkit";

export const getActorInfo = createAsyncThunk<any, string, {rejectValue : string}>(
    "getActorInfo",
    async (id, ThunkApi) => {
        const response = await fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`)
        if (!response.ok) {
            ThunkApi.rejectWithValue("Error with server")
        }
        const data = response.json();
        return data;
    }
)

export const getActorFilms = createAsyncThunk<any, string, {rejectValue : string}>(
    "getActorFilms",
    async (id, ThunkApi) => {
        const response = await fetch(`
        https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        if (!response.ok) {
            ThunkApi.rejectWithValue("Error with server")
        }
        const data = response.json();
        return data;
    }
)