import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPopularFilm } from '../../types/interfaces';
import { getPopularMovies } from '../../utils/api/getFilms';

interface IState {
    popularFilms: Array<IPopularFilm>,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: null
}

const initialState: IState = {
    popularFilms: [],
    loading: 'idle',
    error: null
}

export const popularFilmSlice = createSlice({
    name: "filmSlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPopularMovies.pending, (state) => {
                state.loading = "pending",
                    state.popularFilms = []
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                state.loading = "succeeded",
                    state.popularFilms.push(...action.payload)
            })
            .addCase(getPopularMovies.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
                state.loading = "failed";
            })
    }
})

export default popularFilmSlice.reducer;