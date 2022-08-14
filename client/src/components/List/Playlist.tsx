import { usePlaylist } from '../../hooks';
import {
  PlaylistGrid,
  ErrorMessage,
} from '../../components';

const Playlist = () => {
  const {
    error,
    loading,
    playlist,
    tracks,
  } = usePlaylist();

  return (
    <>
      {
        error ? <ErrorMessage message={"No playlist available"} /> :
        playlist && (
          <PlaylistGrid playlist={playlist} tracks={tracks} loading={loading} />
        )
      }
    </>
  )
}

export default Playlist;
