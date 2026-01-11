import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  sourceLang: { value: "auto", label: "" },
  targetLang: { value: "en", label: "English" },
  textToTranslate: "",
  translatedText: "",
  isLoading: false,
  error: null,
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setSource: (state, action) => { state.sourceLang = action.payload; },
    setTarget: (state, action) => { state.targetLang = action.payload; },
    setText: (state, action) => { state.textToTranslate = action.payload; },
    clearText: (state) => { state.translatedText = ""; }
  },
  extraReducers: (builder) => {
    builder
      .addCase(translateText.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(translateText.fulfilled, (state, action) => {
        state.isLoading = false;
        state.translatedText = action.payload;
      })
      .addCase(translateText.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setSource, setTarget, setText, clearText } = translateSlice.actions;
export default translateSlice.reducer;