
import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    languages: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.languages = action.payload;
    });
  },
});

export default languageSlice.reducer;