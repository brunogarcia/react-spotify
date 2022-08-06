import { useState, useEffect } from "react";
import { SpotifyUserTopArtists } from "../types/spotify.model";
import { getTopArtists } from "../api/spotify.api";

const useTopArtists = () => {
  const [topArtists, setTopArtists] = useState<SpotifyUserTopArtists | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userTopArtist = await getTopArtists({ time_range: "short_term", limit: 10 });
        setTopArtists(userTopArtist);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { topArtists };
}

export default useTopArtists;

