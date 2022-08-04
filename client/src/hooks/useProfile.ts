import { useState, useEffect } from "react";
import {
  SpotifyUser,
  SpotifyPlaylists,
  SpotifyUserTopArtists,
  SpotifyUserTopTracks,
} from "../types/spotify.model";
import {
  getTopArtists,
  getCurrentUserProfile,
  getCurrentUserPlaylists,
  getTopTracks,
} from "../api/spotify.api";

const useProfile = () => {
  const [profile, setProfile] = useState<SpotifyUser | null>(null);
  const [playlists, setPlaylists] = useState<SpotifyPlaylists | null>(null);
  const [topArtists, setTopArtists] = useState<SpotifyUserTopArtists | null>(null);
  const [topTracks, setTopTracks] = useState<SpotifyUserTopTracks | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getCurrentUserProfile();
        setProfile(userProfile);

        const userPlaylists = await getCurrentUserPlaylists();
        setPlaylists(userPlaylists);

        const userTopArtist = await getTopArtists({ time_range: "short_term", limit: 10 });
        setTopArtists(userTopArtist);

        const userTopTracks = await getTopTracks({ time_range: "short_term", limit: 10 });
        setTopTracks(userTopTracks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { profile, playlists, topArtists, topTracks };
}

export default useProfile;
