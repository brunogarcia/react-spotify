import useProfile from "../hooks/useProfile";
import { ProfileHeader, ProfileTopArtists, ProfileTopTracks } from "../components";

const Profile = () => {
  const { profile, playlists, topArtists, topTracks } = useProfile();
  return (
    <>
      {profile && <ProfileHeader profile={profile} playlists={playlists} />}
      <main>
        {topArtists && <ProfileTopArtists artists={topArtists} />}
        {topTracks && <ProfileTopTracks tracks={topTracks} />}
      </main>
    </>
  );
};

export default Profile;
