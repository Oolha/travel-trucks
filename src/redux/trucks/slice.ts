import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Camper } from "../types";
import { fetchCampers, fetchFilteredCampers } from "./operations";

interface CamperState {
  campers: Camper[];
  isLoading: boolean;
  error: string | null;
  page: number;
}

const initialState: CamperState = {
  campers: [],
  isLoading: false,
  error: null,
  page: 1,
};

const handlePending = (state: CamperState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (
  state: CamperState,
  action: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload || "An error occurred";
};

export const sliceCampers = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers: (state) => {
      state.campers = [];
      state.page = 1;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCampers.fulfilled,
        (state, action: PayloadAction<Camper[]>) => {
          state.isLoading = false;
          state.error = null;
          state.campers = action.payload;
        }
      )
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(
        fetchFilteredCampers.fulfilled,
        (state, action: PayloadAction<Camper[]>) => {
          state.isLoading = false;
          state.error = null;
          if (state.page === 1) {
            state.campers = action.payload;
          } else {
            state.campers = [...state.campers, ...action.payload];
          }
        }
      )
      .addCase(fetchFilteredCampers.pending, handlePending)
      .addCase(fetchFilteredCampers.rejected, handleRejected);
  },
});

export const { resetCampers, incrementPage } = sliceCampers.actions;
export default sliceCampers.reducer;
