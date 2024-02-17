import axios from "axios";

// const axios = require("axios").default;

export const req = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 1000,
  headers: { 
    withCredentials: true,
  },
});
