import { initAuth } from "./init-auth";
import { refreshToken } from "./refresh-token";
import type { QueryParams } from "../../types/global.model";
import { hasTokenExpired } from "./has-token-expired";
import { LOCAL_STORAGE_KEYS, LOCAL_STORAGE_VALUES } from "./local-storage";

/**
 * Get the access token, refresh token and expiration time from the URL query params
 *
 * @returns {QueryParams}
 */
function getQueryParams(): QueryParams {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const queryParams: QueryParams = {
    [LOCAL_STORAGE_KEYS.hasError]: urlParams.get("error"),
    [LOCAL_STORAGE_KEYS.accessToken]: urlParams.get("access_token"),
    [LOCAL_STORAGE_KEYS.refreshToken]: urlParams.get("refresh_token"),
    [LOCAL_STORAGE_KEYS.expireTime]: urlParams.get("expires_in"),
  };

  return queryParams;
}

/**
 * If there is a token in the URL query params, user is logging in for the first time
 *
 * @param {QueryParams} queryParams
 * @returns {boolean}
 */
function shouldInitAuth(queryParams: QueryParams): boolean {
  return  Boolean(queryParams[LOCAL_STORAGE_KEYS.accessToken]);
}

/**
 * If there is a valid access token in localStorage, use that
 *
 * @returns {boolean}
 */
 function hasAccessToken(): boolean {
  return Boolean(
    LOCAL_STORAGE_VALUES.accessToken &&
    LOCAL_STORAGE_VALUES.accessToken !== "undefined"
  );
}

/**
 * If there's an error OR the token in localStorage has expired, refresh the token
 *
 * @param {QueryParams} queryParams
 * @returns {boolean}
 */
 function shouldRefreshToken(queryParams: QueryParams): boolean {
  return Boolean(
    queryParams[LOCAL_STORAGE_KEYS.hasError] ||
    hasTokenExpired() ||
    LOCAL_STORAGE_VALUES.accessToken === "undefined"
  );
}

/**
 * Handles logic for retrieving the Spotify access token
 * from localStorage or URL query params
 *
 * @returns {string | null} A Spotify access token
 */
export function getAccessToken(): string | null {
  const queryParams = getQueryParams();

  if (shouldRefreshToken(queryParams)) {
    refreshToken();
  }

  if (hasAccessToken()) {
    return LOCAL_STORAGE_VALUES.accessToken;
  }

  if (shouldInitAuth(queryParams)) {
    return initAuth(queryParams);
  }

  return null;
};
