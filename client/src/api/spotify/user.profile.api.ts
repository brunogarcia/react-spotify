import axios from "../config/axios.config";
import { SpotifyUser } from "../../types/spotify.model";

/**
 * Get Current User's Profile
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile
 * @returns {Promise<SpotifyUser>} User's Profile
 */
 const getCurrentUserProfile = async (): Promise<SpotifyUser> => {
  try {
    const { data } = await axios.get<SpotifyUser>("/me");
    return data;
  } catch (error) {
    throw error;
  }
};

export default getCurrentUserProfile
