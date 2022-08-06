import {
  ProfileHeader,
  ProfileTopArtists,
  ProfileTopTracks,
  ProfilePlaylists,
} from "../components";

const ProfilePage = () => {
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

export default ProfilePage;
