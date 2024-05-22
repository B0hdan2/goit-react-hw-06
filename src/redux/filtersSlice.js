import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    selectFilter: (state) => state.name,
  },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { setFilter } = slice.actions;
export const { selectFilter } = slice.selectors;
