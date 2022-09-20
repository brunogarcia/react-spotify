import axios from "../config/axios.config";
import {
  SpotifyPayload,
  SpotifyPlaylist,
  SpotifyPlaylists,
  SpotifyPlaylistTracks
} from "../../types/spotify.model";

/**
 * Get a Playlist
 *
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist
 * @param {string} id - The Spotify ID for the playlist
 * @returns {Promise<SpotifyPlaylist>} The playlist resource
 */
 export const fetchPlaylistById = async (id: string): Promise<SpotifyPlaylist> => {
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
 * @param {SpotifyPayload} params - The parameters to pass to the API
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists
 * @returns {Promise<SpotifyPlaylists>} Current User's Playlists
 */
export const fetchPlaylists = async ({ limit }: SpotifyPayload): Promise<SpotifyPlaylists> => {
  const params = { limit };
  const { data } = await axios.get<SpotifyPlaylists>('/me/playlists', { params });
  return data;
}

/**
 * Get tracks of a playlist
 *
 * @param url {string} - URL to the next page of tracks
 * @link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlists-tracks
 * @returns {SpotifyPlaylistTracks} The tracks of the playlist
 */
 export const fetchPlaylistTracks = async (url: string): Promise<SpotifyPlaylistTracks> => {
  try {
    const { data } = await axios.get<SpotifyPlaylistTracks>(url);
    return data;
  } catch (error) {
    throw error;
  }
}
