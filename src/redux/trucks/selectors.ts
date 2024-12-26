import { RootState } from "../store";
import { Camper } from "../types";

export const selectCampers = (state: RootState): Camper[] => {
  return state.campers.campers;
};
export const selectIsLoading = (state: RootState): boolean => {
  return state.campers.isLoading;
};
export const selectError = (state: RootState): string | null => {
  return state.campers.error;
};
export const selectPage = (state: RootState): number => {
  return state.campers.page;
};
