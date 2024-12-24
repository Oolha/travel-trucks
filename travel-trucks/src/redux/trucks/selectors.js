export const selectCampers = (state) => {
    return state.campers.campers;
};
export const selectIsLoading = (state) => {
    return state.campers.isLoading;
};
export const selectError = (state) => {
    return state.campers.error;
};
