import { useParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from "react";
import { fetchPlaylistById, fetchPlaylistTracks } from "../api/spotify.api";
import {
  SpotifyTrack,
  SpotifyPlaylist,
  SpotifyPlaylistTrack,
  SpotifyPlaylistTracks,
} from "../types/spotify.model";

type PlaylistProps = {
  error: boolean;
  isLoading: boolean;
  playlist: SpotifyPlaylist | null;
  tracks: SpotifyTrack[] | null;
};

const usePlaylist = (): PlaylistProps => {
  const { id } = useParams();

  const [error, setErrorPlaylist] = useState(false);
  const [isLoading, setLoadingPlaylist] = useState(true);
  const [playlist, setPlaylist] = useState<SpotifyPlaylist | null>(null);

  const [tracksData, setTracksData] = useState<SpotifyPlaylistTracks | null>(null);
  const [tracks, setTracks] = useState<SpotifyPlaylistTrack[] | null>(null);

  // 1) Get playlist data based on ID from route params
  useEffect(() => {
    if (!id) {
      setErrorPlaylist(true);
      setLoadingPlaylist(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await fetchPlaylistById(id);
        setPlaylist(data);
        setLoadingPlaylist(false);
        setTracksData(data.tracks);
      } catch (error) {
        setErrorPlaylist(true);
      }
    };

    fetchData();
  }, [id]);

  // 2) When tracksData updates, compile arrays of tracks and audioFeatures
  useEffect(() => {
    if (!tracksData) {
      return;
    }

    // When tracksData updates, check if there are more tracks to fetch
    // then update the state variable
    const fetchMoreData = async () => {
      try {
        const nextData = await fetchPlaylistTracks(tracksData.next);
        setTracksData(nextData);
      } catch (error) {
        console.error(error);
      }
    };

    setTracks((tracks: SpotifyPlaylistTrack[] | null) => ([
      ...tracks ? tracks : [],
      ...tracksData.items
    ]));

    if (tracksData.next) {
      fetchMoreData()
    }
  }, [tracksData]);

  // 3) Create an array of memoized tracks that is structured
  // in a way that works with our <Tracks> component
  const tracksFiltered: SpotifyTrack[] | null = useMemo(() => {
    if (!tracks) {
      return null;
    }

    const trackIds: string[] = [];
    const trackList = tracks.map(({ track }) => track);
    const trackFilter = (item: SpotifyTrack) => {
      const isDuplicate = trackIds.includes(item.id);

      if (!isDuplicate) {
        trackIds.push(item.id);
        return true;
      }

      return false;
    }

    return trackList.filter(trackFilter);
  }, [tracks]);

  return {
    error,
    isLoading,
    playlist,
    tracks: tracksFiltered,
  };
}

export default usePlaylist;
