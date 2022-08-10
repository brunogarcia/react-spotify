import { useState, useEffect } from "react";
import { getTopTracks } from "../api/spotify.api";
import { SpotifyPayload, SpotifyUserTopTracks } from "../types/spotify.model";

const useUserTracks = (payload: SpotifyPayload) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [topTracks, setTopTracks] = useState<SpotifyUserTopTracks | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userTopTracks = await getTopTracks({
          limit: payload.limit,
          time_range: payload.time_range,
        });
        setTopTracks(userTopTracks);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };

    fetchData();
  }, [payload.time_range, payload.limit]);

  return { error, loading, topTracks };
}

export default useUserTracks;
