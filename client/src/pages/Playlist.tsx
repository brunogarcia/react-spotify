import { usePlaylist } from '../hooks';
import {
  ErrorMessage,
  Playlist,
  PlaylistTracks,
} from '../components';

const PlaylistPage = () => {
  const {
    error,
    isLoading,
    playlist,
    tracks,
  } = usePlaylist();

  return (
      error ? <ErrorMessage message={"No playlist available"} /> :
      <>
        <Playlist playlist={playlist} loading={isLoading} />
        <PlaylistTracks tracks={tracks} loading={isLoading} />
      </>
  );
}

export default PlaylistPage;
