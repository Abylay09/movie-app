import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./films/filmSlice";
import popularFilmSlice from "./films/popularFilmSlice";
import recSlice from "./films/recFilmSlice";
import searchSlice  from "./films/searchSlice";

export const store = configureStore({
    reducer: {
        films: popularFilmSlice,
        recs: recSlice,
        film : filmSlice,
        search  : searchSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch