import type { QueryParams } from "../../types/global.model";
import { LOCAL_STORAGE_KEYS } from "./local-storage";

/**
 * Init Authorization
 *
 * If there is a token in the URL query params,
 * user is logging in for the first time
 *
 * @param {QueryParams} queryParams Query params
 * @returns {string | null} A Spotify access token
 */
export const initAuth = (queryParams: QueryParams): string | null => {
  // Store the query params in localStorage
  for (const property in queryParams) {
    window.localStorage.setItem(property, queryParams[property] as string);
  }

  // Set timestamp
  window.localStorage.setItem(
    LOCAL_STORAGE_KEYS.timestamp,
    Date.now().toString()
  );

  // Return access token from query params
  return queryParams[LOCAL_STORAGE_KEYS.accessToken];
};
