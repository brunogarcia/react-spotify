import { LOCAL_STORAGE_KEYS } from "./local-storage";

/**
 * Clear out all localStorage items we've set and reload the page
 * @returns {void}
 */
export const logout = (): void => {
  // Clear all localStorage items
  for (const property in LOCAL_STORAGE_KEYS) {
    window.localStorage.removeItem(LOCAL_STORAGE_KEYS[property]);
  }
  // Navigate to homepage
  window.location.href = window.location.origin;
};
