import { LOCALSTORAGE_KEYS } from "../../hooks/auth/local-storage";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiError {
  error_message: string;
}

export enum ApiErrorCode {
  EXPIRED_SIGNATURE = "Expired signature",
}

export function handleRequest(config: AxiosRequestConfig) {
  const accessToken = window.localStorage.getItem(
    LOCALSTORAGE_KEYS.accessToken
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

const isSessionExpired = (error: AxiosError<ApiError>): boolean => {
  if (error.response) {
    return (
      error.response.status === 401 &&
      error.response.data.error_message === ApiErrorCode.EXPIRED_SIGNATURE
    );
  }

  return false;
};

export function handleError(error: AxiosError<ApiError>) {
  if (isSessionExpired(error)) {
    window.location.href = "/";
  }

  return Promise.reject(error.response);
}
