import axios from "../config/axios.config";
import { SpotifyPlaylists } from "../../types/spotify.model";

/**
 * Get a List of Current User's Playlists
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists
 * @returns {Promise<SpotifyPlaylists>} Current User's Playlists
 */
 const getCurrentUserPlaylists = async (
  limit = 10
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

export default getCurrentUserPlaylists
