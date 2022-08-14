import { usePlaylist } from '../../hooks';
import {
  PlaylistGrid,
  LoaderList,
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
        loading ? <LoaderList /> :
        error ? <ErrorMessage message={"No playlist available"} /> :
        playlist && <PlaylistGrid playlist={playlist} tracks={tracks} />
      }
    </>
  )
}

export default Playlist;
