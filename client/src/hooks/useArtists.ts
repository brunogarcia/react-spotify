import { useQuery } from "@tanstack/react-query"
import { QueryType } from "../types/query.model";
import { fetchTopArtists } from "../services/spotify.service";
import { SpotifyPayload } from "../types/spotify.model";

function useArtists (payload: SpotifyPayload) {
  const { limit, time_range } = payload;

  const {
    data,
    error,
    isLoading,
  } = useQuery([QueryType.TOP_ARTISTS, { limit, time_range }], () => fetchTopArtists(payload));

  return {
    error,
    isLoading,
    artists: data,
  }
}

export default useArtists
