import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActorInfo, IFilm } from "../../types/interfaces";
import { getActorFilms, getActorInfo } from "../../utils/api/getActor";

interface IStore {
    actor: IActorInfo,
    // films: IFilm[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    loadingFilms: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string
}

const initialState: IStore = {
    actor: {} as IActorInfo,
    // films: [],
    loading: 'idle',
    loadingFilms: "idle",
    error: ""
}

export const actorSlice = createSlice({
    name: "actorSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getActorInfo.fulfilled, (state, action) => {
                state.loading = "succeeded",
                    state.actor = action.payload
            })
            .addCase(getActorInfo.pending, (state) => {
                state.loading = "pending"
            })
            .addCase(getActorInfo.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload
                state.loading = "failed"
            })

            .addCase(getActorFilms.fulfilled, (state, action) => {
                state.loading = "succeeded"
                    // state.films = [...action.payload.cast]
            })
            .addCase(getActorFilms.pending, (state) => {
                state.loading = "pending"
            })
            .addCase(getActorFilms.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload
                state.loading = "failed"
            })
    }
})

export const { } = actorSlice.actions

export default actorSlice.reducer;