import axios from "axios";
import { logout } from "./logout";
import { LOCAL_STORAGE_KEYS, LOCAL_STORAGE_VALUES } from "./local-storage";

/**
 * Logout if there's no refresh token stored
 * or we've managed to get into a reload infinite loop
 */
function shouldLogout(): boolean {
  return (
    !LOCAL_STORAGE_VALUES.refreshToken ||
    LOCAL_STORAGE_VALUES.refreshToken === "undefined" ||
    Date.now() - Number(LOCAL_STORAGE_VALUES.timestamp) / 1000 < 1000
  );
}

/**
 * Use the refresh token in localStorage to hit the /refresh_token endpoint
 * in our Node app, then update values in localStorage with data from response.
 */
export const refreshToken = async (): Promise<void> => {
  try {
    if (shouldLogout()) {
      console.error("No refresh token available");
      logout();
    }

    // Use `api/refresh_token` endpoint from the serverless function
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_HOST}/refresh_token?refresh_token=${LOCAL_STORAGE_VALUES.refreshToken}`
    );

    // Update localStorage values
    window.localStorage.setItem(
      LOCAL_STORAGE_KEYS.accessToken,
      data.access_token
    );

    window.localStorage.setItem(
      LOCAL_STORAGE_KEYS.timestamp,
      Date.now().toString()
    );

    // Reload the page for localStorage updates to be reflected
    window.location.reload();
  } catch (e) {
    console.error(e);
  }
};
