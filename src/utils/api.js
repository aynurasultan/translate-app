import axios from "axios";

const api = axios.create({
  baseURL: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
    "x-rapidapi-key": "2bb33ecfd7mshc27a4943994f308p199e67jsn18e9865062e0",
  },
});

export default api;