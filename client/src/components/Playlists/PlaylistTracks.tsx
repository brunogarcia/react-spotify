import { SpotifyTrack } from "../../types/spotify.model";
import {
  SectionWrapper,
  Tracks,
  LoaderList,
} from '..';

type PlaylistProps = {
  loading: boolean;
  tracks: SpotifyTrack[] | null;
}

const Playlist = ({ loading, tracks }: PlaylistProps) => (
  <main>
    <SectionWrapper title="Playlist" breadcrumb={true}>
    {
      loading ? <LoaderList /> :
      tracks && <Tracks tracks={tracks} />
    }
    </SectionWrapper>
  </main>
);

export default Playlist;
