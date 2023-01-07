import axios from "axios";

axios.defaults.withCredentials = true;

export const axiosWithoutCookie = axios.create({
  headers: {
    "accept": "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:8800/api",
});

export const axiosWithCookie = axios.create({
  headers: {
    "accept": "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:8800/api",
});

export const axiosWithCookieAndImage = axios.create({
  headers: {
    "accept": "application/json",
    "Content-Type": "multipart/form-data",
  },
  baseURL: "http://localhost:8800/api",
});
