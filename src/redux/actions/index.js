import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    return [
      { value: "tr", label: "Turkish" },
      { value: "en", label: "English" },
      { value: "de", label: "German" },
      { value: "fr", label: "French" },
      { value: "es", label: "Spanish" },
    ];
  }
);

export const translateText = createAsyncThunk(
  "translate/translateText",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { translateReducer } = getState();


      if (!translateReducer.textToTranslate.trim()) return "";

      const payload = {
        q: translateReducer.textToTranslate,
        target: translateReducer.targetLang.value,
      };

      if (translateReducer.sourceLang?.value !== "auto") {
        payload.source = translateReducer.sourceLang.value;
      }

      const res = await api.post("", payload);

  
      return res.data.data.translations.translatedText;
    } catch (error) {
      console.error("Error Detail:", error.response?.data || error.message);
      
      if (error.response?.status === 403) {
        return rejectWithValue("Invalid API Key or no subscription found.");
      }
      
      return rejectWithValue("An error occurred during translation.");
    }
  }
);