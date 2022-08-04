import { SpotifyUserTopTracks } from "../../types/spotify.model";
import { SectionWrapper, TracksGrid } from '../../components';

interface ProfileTopArtistsProps {
  tracks: SpotifyUserTopTracks;
}

const ProfileTopTracks = ({ tracks }: ProfileTopArtistsProps) => {
  return (
    <SectionWrapper title="Top tracks this month" seeAllLink="/top-tracks">
      <TracksGrid tracks={tracks.items} />
    </SectionWrapper>
  );
};

export default ProfileTopTracks;
