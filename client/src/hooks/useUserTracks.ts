import { useState, useEffect } from "react";
import { getTopTracks } from "../api/spotify.api";
import { SpotifyTimeRange, SpotifyUserTopTracks } from "../types/spotify.model";

const useUserTracks = () => {
  const [topTracks, setTopTracks] = useState<SpotifyUserTopTracks | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userTopTracks = await getTopTracks({
          limit: 10,
          time_range: SpotifyTimeRange.SHORT_TERM,
        });
        setTopTracks(userTopTracks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { topTracks };
}

export default useUserTracks;
