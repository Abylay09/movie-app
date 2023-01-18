import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./films/popularFilmSlice";
import recSlice from "./films/recFilmSlice";

export const store = configureStore({
    reducer: {
        films: filmSlice,
        recs: recSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch