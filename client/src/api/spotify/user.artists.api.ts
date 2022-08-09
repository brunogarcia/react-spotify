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
 const getTopArtists = async (payload: SpotifyPayload): Promise<SpotifyUserTopArtists> => {
  const {
    limit = 10,
    time_range = SpotifyTimeRange.SHORT_TERM,
  } = payload;

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

export default getTopArtists
