import { useState, useEffect } from "react";
import { getTopArtists } from "../api/spotify.api";
import { SpotifyUserTopArtists, SpotifyPayload } from "../types/spotify.model";

const useTopArtists = (payload: SpotifyPayload) => {
  const [topArtists, setTopArtists] = useState<SpotifyUserTopArtists | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTopArtists(payload);
        setTopArtists(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [payload]);

  return { topArtists };
}

export default useTopArtists;

