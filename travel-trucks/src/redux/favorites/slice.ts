import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Camper } from "../types";

const initialState: Camper[] = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<Camper>) {
      const isExist = state.find((camper) => camper.id === action.payload.id);
      if (!isExist) {
        state.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    removeFromFavorites(state, action: PayloadAction<{ id: string }>) {
      const updatedState = state.filter(
        (camper) => camper.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedState));
      return updatedState;
    },
    setFavorites(state, action: PayloadAction<Camper[]>) {
      return action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
