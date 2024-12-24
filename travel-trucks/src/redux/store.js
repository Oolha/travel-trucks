import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "../redux/trucks/slice";
import favoritesReducer from "../redux/favorites/slice";
export const store = configureStore({
    reducer: {
        campers: campersReducer,
        favorites: favoritesReducer,
    },
});
