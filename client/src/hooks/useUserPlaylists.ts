import { useState, useEffect } from "react";
import {  SpotifyPlaylists } from "../types/spotify.model";
import { getUserPlaylists } from "../api/spotify.api";

const useUserPlaylists = () => {
  const [playlists, setPlaylists] = useState<SpotifyPlaylists | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userPlaylists = await getUserPlaylists();
        setPlaylists(userPlaylists);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { playlists };
}

export default useUserPlaylists;
