import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilm } from "../../types/interfaces";
import { getFilmDetails } from "../../utils/api/getFilms";

interface IState {
    // film: Array<IFilm>,
    film: IFilm,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string
}

const initialState: IState = {
    film: {} as IFilm,
    loading: 'idle',
    error: ""
}

const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilmDetails.fulfilled, (state, action) => {
                state.loading = "succeeded",
                    // state.film = [action.payload]
                    state.film = {...action.payload}
            })
            .addCase(getFilmDetails.pending, (state, action) => {
                state.loading = "pending"
            })
            .addCase(getFilmDetails.rejected, (state, action: PayloadAction<any>) => {
                state.loading = "failed",
                    state.error = action.payload
            })
    }
})

export default filmSlice.reducer;