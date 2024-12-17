import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Camper } from "../types";
import { fetchCampers } from "./operations";

interface CamperState {
  campers: Camper[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CamperState = {
  campers: [],
  isLoading: false,
  error: null,
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
  reducers: {},
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
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export default sliceCampers.reducer;
