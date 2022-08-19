import axios from "../config/axios.config";
import { SpotifyUser } from "../../types/spotify.model";

/**
 * Get Current User's Profile
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile
 * @returns {Promise<SpotifyUser>} User's Profile
 */
export const fetchUserProfile = async (): Promise<SpotifyUser> =>
  axios.get("/me").then(response => response.data);
