import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActor, IFilm } from "../../types/interfaces";
import { getSearchedActors, getSearchedMovies } from "../../utils/api/searchApi";

interface IState {
    searchedFilms: IFilm[],
    searchedActor : IActor[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string,
    inputData: string,
    selectData: string,
}

const initialState: IState = {
    searchedFilms: [],
    searchedActor : [] ,
    loading: 'idle',
    error: "",
    inputData: "",
    selectData: "Movie"
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        handleInputData: (state, action) => {
            state.inputData = action.payload
        },
        handleSelectData: (state, action) => {
            state.selectData = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSearchedMovies.pending, (state) => {
                state.loading = "pending";
                state.searchedFilms = []
            })
            .addCase(getSearchedMovies.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.searchedFilms = [...action.payload.results];

            })
            .addCase(getSearchedMovies.rejected, (state, action: PayloadAction<any>) => {
                state.loading = "failed";
                state.error = action.payload
            })

            .addCase(getSearchedActors.pending, (state) => {
                state.loading = "pending";
                state.searchedActor = []
            })
            .addCase(getSearchedActors.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.searchedActor = [...action.payload.results];
            })
            .addCase(getSearchedActors.rejected, (state, action: PayloadAction<any>) => {
                state.loading = "failed";
                state.error = action.payload
            })
    }
})

export const { handleInputData, handleSelectData } = searchSlice.actions;
export default searchSlice.reducer;