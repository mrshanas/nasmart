import axios from "axios";

const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api"
    : "https://nasmart.mrshanas.com/api";

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
