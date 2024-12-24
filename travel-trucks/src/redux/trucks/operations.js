import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCampers = createAsyncThunk("camper/fetchAllCampers", async (_, thunkAPI) => {
    const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
    const END_POINT = "/campers";
    const url = `${BASE_URL}${END_POINT}`;
    try {
        const response = await axios.get(url);
        return response.data.items; // Повертаємо всі продукти
    }
    catch (e) {
        const axiosError = e;
        return thunkAPI.rejectWithValue(axiosError.message);
    }
});
export const fetchFilteredCampers = createAsyncThunk("camper/fetchFilteredCampers", async (filterParams, thunkAPI) => {
    const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
    const END_POINT = "/campers";
    const url = `${BASE_URL}${END_POINT}`;
    const params = {};
    if (filterParams.location)
        params.location = filterParams.location;
    if (filterParams.form)
        params.form = filterParams.form;
    if (filterParams.AC)
        params.AC = filterParams.AC;
    if (filterParams.transmission)
        params.transmission = filterParams.transmission;
    if (filterParams.kitchen)
        params.kitchen = filterParams.kitchen;
    if (filterParams.TV)
        params.TV = filterParams.TV;
    if (filterParams.bathroom)
        params.bathroom = filterParams.bathroom;
    try {
        const response = await axios.get(url, { params });
        return response.data.items;
    }
    catch (e) {
        const axiosError = e;
        return thunkAPI.rejectWithValue(axiosError.message);
    }
});
