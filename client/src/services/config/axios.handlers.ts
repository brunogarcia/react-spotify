import { useAuth } from "../../hooks";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export function handleRequest(config: AxiosRequestConfig) {
  const accessToken = window.localStorage.getItem(
    useAuth.localStorageKeys.accessToken
  );

  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    config.headers["Content-Type"] = "application/json";
  }

  return config;
}

export function handleResponse({ data, headers }: AxiosResponse) {
  return {
    data,
    headers,
  };
}

const isSessionExpired = (error: AxiosError): boolean => {
  if (error.response) {
    return error.response.status === 401;
  }

  return false;
};

export function handleError(error: AxiosError) {
  if (isSessionExpired(error)) {
    window.location.href = "/";
  }

  return Promise.reject(error.response);
}
