import { useState, useEffect } from "react";
import {  SpotifyPlaylists } from "../types/spotify.model";
import { getUserPlaylists } from "../api/spotify.api";

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
