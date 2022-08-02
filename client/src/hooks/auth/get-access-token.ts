import { initAuth } from './init-auth';
import { refreshToken } from './refresh-token';
import type { QueryParams } from '../../types/global';
import { hasTokenExpired } from './has-token-expired';
import { LOCALSTORAGE_KEYS, LOCALSTORAGE_VALUES } from './local-storage';

/**
 * Handles logic for retrieving the Spotify access token
 * from localStorage or URL query params
 *
 * @returns {string | null} A Spotify access token
 */
 export const getAccessToken = (): string | null => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const hasError = urlParams.get('error');
    const queryParams: QueryParams = {
      [LOCALSTORAGE_KEYS.accessToken]: urlParams.get('access_token'),
      [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
      [LOCALSTORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
    };

    const shouldInitAuth = queryParams[LOCALSTORAGE_KEYS.accessToken]
    const shouldRefreshToken = hasError || hasTokenExpired() || LOCALSTORAGE_VALUES.accessToken === 'undefined'
    const hasAccessToken = LOCALSTORAGE_VALUES.accessToken && LOCALSTORAGE_VALUES.accessToken !== 'undefined'

    // If there's an error OR the token in localStorage has expired, refresh the token
    if (shouldRefreshToken) {
      refreshToken();
    }

    // If there is a valid access token in localStorage, use that
    if (hasAccessToken) {
      return LOCALSTORAGE_VALUES.accessToken;
    }

    // If there is a token in the URL query params, user is logging in for the first time
    if (shouldInitAuth) {
      return initAuth(queryParams)
    }

    // We should never get here!
    return null;
  };
