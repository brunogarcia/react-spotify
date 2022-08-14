import axios from "../config/axios.config";
import { SpotifyPlaylist, SpotifyPlaylists, SpotifyPlaylistTracks } from "../../types/spotify.model";

/**
 * Get a Playlist
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist
 * @param {string} id - The Spotify ID for the playlist
 * @returns {Promise<SpotifyPlaylist>} The playlist resource
 */
 export const getPlaylistById = async (id: string): Promise<SpotifyPlaylist> => {
  try {
    const { data } = await axios.get<SpotifyPlaylist>(`/playlists/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Get a List of Current User's Playlists
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists
 * @returns {Promise<SpotifyPlaylists>} Current User's Playlists
 */
export const getUserPlaylists = async (
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

/**
 * Get tracks of a playlist
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlists-tracks
 * @param url {string} - URL to the next page of tracks
 * @returns {SpotifyPlaylistTracks} The tracks of the playlist
 */
 export const getPlaylistTracks = async (url: string): Promise<SpotifyPlaylistTracks> => {
  try {
    const { data } = await axios.get<SpotifyPlaylistTracks>(url);
    return data;
  } catch (error) {
    throw error;
  }
}
