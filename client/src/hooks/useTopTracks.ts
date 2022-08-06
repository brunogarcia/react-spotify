import { useState, useEffect } from "react";
import { SpotifyUserTopTracks } from "../types/spotify.model";
import { getTopTracks } from "../api/spotify.api";

const useTopTracks = () => {
  const [topTracks, setTopTracks] = useState<SpotifyUserTopTracks | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userTopTracks = await getTopTracks({ time_range: "short_term", limit: 10 });
        setTopTracks(userTopTracks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { topTracks };
}

export default useTopTracks;
