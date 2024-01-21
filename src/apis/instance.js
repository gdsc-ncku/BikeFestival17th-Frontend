const axios = require("axios").default;

export default req = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
