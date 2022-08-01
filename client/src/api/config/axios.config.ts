import axios, { type AxiosInstance } from "axios";

import {
  handleError,
  handleRequest,
  handleResponse,
} from "./axios.handlers";

const axiosSpotify: AxiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1"
});

axiosSpotify.interceptors.request.use(handleRequest, handleError);
axiosSpotify.interceptors.response.use(handleResponse, handleError);

export default axiosSpotify;
