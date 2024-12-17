import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Camper } from "../types";

export const fetchCampers = createAsyncThunk<
  Camper[],
  void,
  { rejectValue: string }
>("camper/fetchAllCampers", async (_, thunkAPI) => {
  const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
  const END_POINT = "/campers";
  const url = `${BASE_URL}${END_POINT}`;

  try {
    const response = await axios.get(url);
    return response.data.items; // Повертаємо всі продукти
  } catch (e) {
    const axiosError = e as AxiosError;
    return thunkAPI.rejectWithValue(axiosError.message);
  }
});

export const fetchFilteredCampers = createAsyncThunk<
  Camper[],
  { location: string; form: string; AC: boolean; kitchen: boolean },
  { rejectValue: string }
>("camper/fetchFilteredCampers", async (filterParams, thunkAPI) => {
  const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
  const END_POINT = "/campers";
  const url = `${BASE_URL}${END_POINT}`;

  const params: { [key: string]: string | boolean } = {};
  if (filterParams.location) params.location = filterParams.location;
  if (filterParams.form) params.form = filterParams.form;
  if (filterParams.AC !== undefined) params.AC = filterParams.AC;
  if (filterParams.kitchen !== undefined) params.kitchen = filterParams.kitchen;

  try {
    const response = await axios.get(url, { params });
    return response.data.items;
  } catch (e) {
    const axiosError = e as AxiosError;
    return thunkAPI.rejectWithValue(axiosError.message);
  }
});
