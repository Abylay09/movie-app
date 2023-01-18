import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecommendedFilm } from "../../types/interfaces";
import { getRecommendations } from "../../utils/api/getFilms";

interface IStore {
    recommendations: Array<IRecommendedFilm>,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: null
}

const initialState: IStore = {
    recommendations: [],
    loading: 'idle',
    error: null
}

export const recSlice = createSlice(
    {
        name: "recommendationFilmSlice",
        initialState,
        reducers: {

        },
        extraReducers: (builder) => {
            builder
                .addCase(getRecommendations.pending, (state, action) => {
                    state.recommendations = [],
                        state.loading = "pending"
                })
                .addCase(getRecommendations.fulfilled, (state, action) => {
                    state.loading = "succeeded",
                        state.recommendations.push(...action.payload)
                })
                .addCase(getRecommendations.rejected, (state, action: PayloadAction<any>) => {
                    state.loading = "failed",
                        state.error = action.payload
                })
        }
    }
)


export default recSlice.reducer;