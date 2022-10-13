// Map for localStorage keys
export const LOCAL_STORAGE_KEYS: Record<string, string> = {
  hasError: "spotify_has_error",
  accessToken: "spotify_access_token",
  refreshToken: "spotify_refresh_token",
  expireTime: "spotify_token_expire_time",
  timestamp: "spotify_token_timestamp",
};

// Map to retrieve localStorage values
export const LOCAL_STORAGE_VALUES = {
  accessToken: window.localStorage.getItem(LOCAL_STORAGE_KEYS.accessToken),
  refreshToken: window.localStorage.getItem(LOCAL_STORAGE_KEYS.refreshToken),
  expireTime: window.localStorage.getItem(LOCAL_STORAGE_KEYS.expireTime),
  timestamp: window.localStorage.getItem(LOCAL_STORAGE_KEYS.timestamp),
};
