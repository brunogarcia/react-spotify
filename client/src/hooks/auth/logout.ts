import { LOCALSTORAGE_KEYS } from './local-storage';

/**
 * Clear out all localStorage items we've set and reload the page
 * @returns {void}
 */
 export const logout = () => {
    // Clear all localStorage items
    for (const property in LOCALSTORAGE_KEYS) {
      window.localStorage.removeItem(LOCALSTORAGE_KEYS[property]);
    }
    // Navigate to homepage
    window.location.href = window.location.origin;
    
  };
