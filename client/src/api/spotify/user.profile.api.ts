import axios from "../config/axios.config";
import { SpotifyProfile } from "../../types/spotify.model";

/**
 * Get Current User's Profile
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile
 * @returns {Promise<SpotifyProfile>} Spotify Profile
 */
export const fetchUserProfile = async (): Promise<SpotifyProfile> => {
  const { data } = await axios.get<SpotifyProfile>("/me")
  return data;
}
