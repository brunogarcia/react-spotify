import { ProfileHeader, ProfileTopArtists, ProfileTopTracks } from "../components";

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <main>
        <ProfileTopArtists />
        <ProfileTopTracks />
      </main>
    </>
  );
};

export default Profile;
