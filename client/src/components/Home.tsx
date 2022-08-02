import React from 'react';
import auth from '../hooks/auth';
import { SpotifyUser } from "../types/spotify.model"

interface Props {
  profile: SpotifyUser | null;
}

const Home: React.FC<Props> = ({ profile }) => {
  return (
    <>
    <button onClick={auth.logout}>Log Out</button>

    {profile && (
      <div>
        <h1>{profile.display_name}</h1>
        <p>{profile.followers.total} Followers</p>
        {profile.images.length && profile.images[0].url && (
          <img src={profile.images[0].url} alt="Avatar"/>
        )}
      </div>
    )}
  </>
  );
}

export default Home;
