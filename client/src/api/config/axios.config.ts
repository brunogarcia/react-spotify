import axios, { AxiosRequestConfig, type AxiosInstance } from "axios";

import isApiMockEnabled from "../../utils/is-api-mock-enabled";
import { handleError, handleRequest, handleResponse } from "./axios.handlers";

function axiosRequestConfig(): AxiosRequestConfig {
  let baseURL = "https://api.spotify.com/v1";

  if (isApiMockEnabled) {
    baseURL = `${process.env.REACT_APP_CLIENT_HOST}/api`;
  }

  return { baseURL }
}

const axiosSpotify: AxiosInstance = axios.create(axiosRequestConfig());

axiosSpotify.interceptors.request.use(handleRequest, handleError);
axiosSpotify.interceptors.response.use(handleResponse, handleError);

export default axiosSpotify;
