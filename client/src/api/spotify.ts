import axios from "./config/axios.config"
import { SpotifyUser } from "../types/spotify.model"

/**
 * Get Current User's Profile
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile
 * @returns {Promise}
 */
 export const getCurrentUserProfile = async (): Promise<SpotifyUser> => {
  try {
    const { data } = await axios.get('/me');
    return data;
  } catch(error) {
    throw error;
  }
 }
