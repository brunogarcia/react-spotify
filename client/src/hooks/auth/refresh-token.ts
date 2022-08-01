import axios from 'axios';
import { logout } from './logout';
import { LOCALSTORAGE_KEYS, LOCALSTORAGE_VALUES } from './local-storage';

/**
 * Use the refresh token in localStorage to hit the /refresh_token endpoint
 * in our Node app, then update values in localStorage with data from response.
 * @returns {void}
 */
 export const refreshToken = async () => {
    try {
      // Logout if there's no refresh token stored or we've managed to get into a reload infinite loop
      if (!LOCALSTORAGE_VALUES.refreshToken ||
        LOCALSTORAGE_VALUES.refreshToken === 'undefined' ||
        (Date.now() - Number(LOCALSTORAGE_VALUES.timestamp) / 1000) < 1000
      ) {
        console.error('No refresh token available');
        logout();
      }
  
      // Use `/refresh_token` endpoint from our Node app
      const { data } = await axios.get(`/refresh_token?refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`);
  
      // Update localStorage values
      window.localStorage.setItem(LOCALSTORAGE_KEYS.accessToken, data.access_token);
      window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now().toString());
  
      // Reload the page for localStorage updates to be reflected
      window.location.reload();
  
    } catch (e) {
      console.error(e);
    }
  };
