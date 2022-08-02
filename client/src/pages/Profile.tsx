import { useState, useEffect } from 'react';
import { getCurrentUserProfile } from '../api/spotify'
import { SpotifyUser } from "../types/spotify.model"

const Profile = () => {
  const [profile, setProfile] = useState<SpotifyUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getCurrentUserProfile();
        setProfile(user);
      } catch(error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
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
  )
};

export default Profile;
