import { useState, useEffect } from "react";
import { getUserPlaylists } from "../api/spotify.api";
import { SpotifyPlaylists } from "../types/spotify.model";

const useUserPlaylists = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState<SpotifyPlaylists | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserPlaylists();
        setPlaylists(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { error, loading, playlists };
}

export default useUserPlaylists;
