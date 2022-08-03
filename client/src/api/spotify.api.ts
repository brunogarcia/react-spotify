import axios from "./config/axios.config";
import { SpotifyUser, SpotifyPlaylists } from "../types/spotify.model";

/**
 * Get Current User's Profile
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile
 * @returns {Promise<SpotifyUser>} User's Profile
 */
export const getCurrentUserProfile = async (): Promise<SpotifyUser> => {
  try {
    const { data } = await axios.get<SpotifyUser>("/me");
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get a List of Current User's Playlists
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists
 * @returns {Promise<SpotifyPlaylists>} Current User's Playlists
 */
export const getCurrentUserPlaylists = async (
  limit = 20
): Promise<SpotifyPlaylists> => {
  try {
    const { data } = await axios.get<SpotifyPlaylists>(
      `/me/playlists?limit=${limit}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get a User's Top Artists and Tracks
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
 * @param {string} time_range - 'short_term' (last 4 weeks) 'medium_term' (last 6 months) or 'long_term'
 *                              (calculated from several years of data and including all new data as it becomes available). Defaults to 'short_term'
 * @returns {Promise}
 */
export const getTopArtists = (time_range = "short_term") => {
  return axios.get(`/me/top/artists?time_range=${time_range}`);
};
