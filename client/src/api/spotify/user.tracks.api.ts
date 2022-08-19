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
 export const fetchTopTracks = async ({
  limit = 10,
  time_range = SpotifyTimeRange.SHORT_TERM,
}: SpotifyPayload): Promise<SpotifyUserTopTracks> => {
  const params = {
    limit,
    time_range,
  };

  return axios.get("/me/top/tracks", { params }).then(response => response.data);
};
