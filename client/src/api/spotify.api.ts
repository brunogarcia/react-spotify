import axios from "./config/axios.config";
import {
  SpotifyUser,
  SpotifyPlaylists,
  SpotifyUserTopTracks,
  SpotifyUserTopArtists,
  SpotifyUserTopItemsParams,
} from "../types/spotify.model";

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
  const params = {
    limit,
  };

  try {
    const { data } = await axios.get<SpotifyPlaylists>("/me/playlists", { params });
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get a User's Top Artists
 *
 * @param {SpotifyUserTopItemsParams} payload - Params for get user's top artists
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
 * @returns {Promise<SpotifyUserTopArtists>} User's Top Artists
 */
export const getTopArtists = async (payload: SpotifyUserTopItemsParams): Promise<SpotifyUserTopArtists> => {
  const { time_range = "short_term", limit = 10 } = payload;
  const params = {
    limit,
    time_range,
  };

  try {
    const { data } = await axios.get<SpotifyUserTopArtists>("/me/top/artists", { params });
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Get a User's Top Tracks
 *
 * @param {SpotifyUserTopItemsParams} payload - Params for get user's top tracks
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
 * @returns {Promise<SpotifyUserTopTracks>} User's Top Tracks
 */
 export const getTopTracks = async (payload: SpotifyUserTopItemsParams): Promise<SpotifyUserTopTracks> => {
  const { time_range = "short_term", limit = 10 } = payload;
  const params = {
    limit,
    time_range,
  };

  try {
    const { data } = await axios.get<SpotifyUserTopTracks>("/me/top/tracks", { params });
    return data;
  } catch (error) {
    throw error;
  }
};
