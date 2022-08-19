import { useQuery } from "@tanstack/react-query"
import { QueryType } from "../types/query.model";
import { fetchPlaylists } from "../api/spotify.api";
import { SpotifyPayload } from "../types/spotify.model";

function usePlaylists (payload: SpotifyPayload) {
  const { limit } = payload;

  const {
    data,
    error,
    isLoading,
  } = useQuery([QueryType.PLAYLISTS, { limit }], () => fetchPlaylists(payload));

  return {
    error,
    isLoading,
    playlists: data,
  }
}

export default usePlaylists
