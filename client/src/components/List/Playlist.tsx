import { usePlaylist } from '../../hooks';
import {
  ErrorMessage,
  PlaylistGrid,
  PlaylistTracksGrid,
} from '../../components';

const Playlist = () => {
  const {
    error,
    isLoading,
    playlist,
    tracks,
  } = usePlaylist();

  return (
      error ? <ErrorMessage message={"No playlist available"} /> :
      <>
        <PlaylistGrid playlist={playlist} loading={isLoading} />
        <PlaylistTracksGrid tracks={tracks} loading={isLoading} />
      </>
  );
}

export default Playlist;
