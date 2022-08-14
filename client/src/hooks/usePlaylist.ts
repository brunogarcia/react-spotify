import { useParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from "react";
import { getPlaylistById, getPlaylistTracks } from "../api/spotify.api";
import {
  SpotifyPlaylist,
  SpotifyPlaylistTracks,
  SpotifyPlaylistTrack,
  SpotifyTrack,
} from "../types/spotify.model";

const usePlaylistById = () => {
  const { id } = useParams();

  const [error, setErrorPlaylist] = useState(false);
  const [loading, setLoadingPlaylist] = useState(true);
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
        const data = await getPlaylistById(id);
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
        const nextData = await getPlaylistTracks(tracksData.next);
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
  // in a way that works with our <TrackList> component
  const playlistTracksFiltered: SpotifyTrack[] | null = useMemo(() => {
    if (!tracks) {
      return null;
    }

    const list = tracks.map(({ track }) => track);
    const uniqueIds: string[] = [];
    return list.filter(item => {
      const isDuplicate = uniqueIds.includes(item.id);

      if (!isDuplicate) {
        uniqueIds.push(item.id);
        return true;
      }

      return false;
    });
  }, [tracks]);

  return {
    error,
    loading,
    playlist,
    tracks: playlistTracksFiltered,
  };
}

export default usePlaylistById;
