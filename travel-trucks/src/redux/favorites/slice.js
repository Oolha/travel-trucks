import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites(state, action) {
            const isExist = state.find((camper) => camper.id === action.payload.id);
            if (!isExist) {
                state.push(action.payload);
                localStorage.setItem("favorites", JSON.stringify(state));
            }
        },
        removeFromFavorites(state, action) {
            const updatedState = state.filter((camper) => camper.id !== action.payload.id);
            localStorage.setItem("favorites", JSON.stringify(updatedState));
            return updatedState;
        },
        setFavorites(state, action) {
            return action.payload;
        },
    },
});
export const { addToFavorites, removeFromFavorites, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
