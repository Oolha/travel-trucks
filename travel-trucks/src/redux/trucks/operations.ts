import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Camper } from "../types";

export const fetchCampers = createAsyncThunk<
  Camper[],
  void,
  { rejectValue: string }
>("camper/fetchCamper", async (_, thunkAPI) => {
  const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
  const END_POINT = "/campers";
  const url = BASE_URL + END_POINT;
  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (e) {
    const axiosError = e as AxiosError;
    return thunkAPI.rejectWithValue(axiosError.message);
  }
});
