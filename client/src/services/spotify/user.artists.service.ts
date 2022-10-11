import axios from "../config/axios.config";
import {
  SpotifyPayload,
  SpotifyTimeRange,
  SpotifyUserTopArtists,
} from "../../types/spotify.model";

/**
 * Get a User's Top Artists
 *
 * @param {SpotifyPayload} payload - Params for get user's top artists
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
 * @returns {Promise<SpotifyUserTopArtists>} User's Top Artists
 */
 export const fetchTopArtists = async ({
  limit = 10,
  time_range = SpotifyTimeRange.SHORT_TERM,
}: SpotifyPayload): Promise<SpotifyUserTopArtists> => {
  const params = {
    limit,
    time_range,
  };
   const { data } = await axios.get<SpotifyUserTopArtists>('/me/top/artists', { params });
   return data;
 }
