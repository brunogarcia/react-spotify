import {
  ProfileHeader,
  ProfileTopArtists,
  ProfileTopTracks,
  ProfilePlaylists,
} from "../components";

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <main>
        <ProfileTopArtists />
        <ProfileTopTracks />
        <ProfilePlaylists />
      </main>
    </>
  );
};

export default Profile;
