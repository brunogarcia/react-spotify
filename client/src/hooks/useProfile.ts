import { useState, useEffect } from "react";
import {
  SpotifyUser,
  SpotifyPlaylists,
  SpotifyUserTopArtists,
} from "../types/spotify.model";
import {
  getTopArtists,
  getCurrentUserProfile,
  getCurrentUserPlaylists,
} from "../api/spotify.api";

const useProfile = () => {
  const [profile, setProfile] = useState<SpotifyUser | null>(null);
  const [playlists, setPlaylists] = useState<SpotifyPlaylists | null>(null);
  const [topArtists, setTopArtists] = useState<SpotifyUserTopArtists | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getCurrentUserProfile();
        setProfile(userProfile);

        const userPlaylists = await getCurrentUserPlaylists();
        setPlaylists(userPlaylists);

        const userTopArtist = await getTopArtists({ time_range: "short_term"});
        setTopArtists(userTopArtist);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { profile, playlists, topArtists };
}

export default useProfile;
