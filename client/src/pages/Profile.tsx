import useProfile from "../hooks/useProfile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileTopArtists from "../components/ProfileTopArtists";

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
