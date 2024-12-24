import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";
const initialState = {
    campers: [],
    isLoading: false,
    error: null,
};
const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload || "An error occurred";
};
export const sliceCampers = createSlice({
    name: "campers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.campers = action.payload;
        })
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.rejected, handleRejected);
    },
});
export default sliceCampers.reducer;
