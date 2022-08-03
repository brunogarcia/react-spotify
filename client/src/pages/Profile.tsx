import useProfile from "../hooks/useProfile";
import { ProfileHeader, ProfileTopArtists } from "../components";

const Profile = () => {
  const { profile, playlists, topArtists } = useProfile();
  return (
    <>
      {profile && <ProfileHeader profile={profile} playlists={playlists} />}
      {topArtists && <ProfileTopArtists topArtists={topArtists} />}
    </>
  );
};

export default Profile;
