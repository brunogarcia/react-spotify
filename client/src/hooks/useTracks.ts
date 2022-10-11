import { useQuery } from "@tanstack/react-query"
import { QueryType } from "../types/query.model";
import { fetchTopTracks } from "../services/spotify.service";
import { SpotifyPayload } from "../types/spotify.model";

function useTracks (payload: SpotifyPayload) {
  const { limit, time_range } = payload;

  const {
    data,
    error,
    isLoading,
  } = useQuery([QueryType.TOP_TRACKS, { limit, time_range }], () => fetchTopTracks(payload));

  return {
    error,
    isLoading,
    tracks: data,
  }
}

export default useTracks
