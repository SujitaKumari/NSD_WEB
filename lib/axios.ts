import axios from "axios";

const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://nsdapi.designoftime.co.in/api/v1",
  baseURL: "http://192.168.29.48:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;