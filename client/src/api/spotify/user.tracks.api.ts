import axios from "../config/axios.config";
import {
  SpotifyPayload,
  SpotifyTimeRange,
  SpotifyUserTopTracks,
} from "../../types/spotify.model";

/**
 * Get a User's Top Tracks
 *
 * @param {SpotifyPayload} payload - Params for get user's top tracks
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
 * @returns {Promise<SpotifyUserTopTracks>} User's Top Tracks
 */
 export const getTopTracks = async (payload: SpotifyPayload): Promise<SpotifyUserTopTracks> => {
  const {
    limit = 10,
    time_range = SpotifyTimeRange.SHORT_TERM,
  } = payload;

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
