import useTopTracks from "../../hooks/useTopTracks";
import { SectionWrapper, TracksGrid } from '../../components';

const ProfileTopTracks = () => {
  const { topTracks } = useTopTracks();
  return (
    <SectionWrapper title="Top tracks this month" seeAllLink="/top-tracks">
      { topTracks && <TracksGrid tracks={topTracks.items} /> }
    </SectionWrapper>
  );
};

export default ProfileTopTracks;
