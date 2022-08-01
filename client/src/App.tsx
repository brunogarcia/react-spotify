import { useState, useEffect } from 'react';
import auth from './hooks/auth';
import { getCurrentUserProfile } from './api/spotify'
import { SpotifyUser } from "./types/spotify.model"
import './App.css';

function App() {
  const [token, setToken] = useState<string | boolean | null>(null);
  const [profile, setProfile] = useState<SpotifyUser | null>(null);

  useEffect(() => {
    setToken(auth.accessToken);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getCurrentUserProfile();
        setProfile(user);
      } catch(error) {
        console.error(error);
      }
    };

    token && fetchData();
  }, [token]);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:8888/login">
            Log in to Spotify
          </a>
        ) : (
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
        )}
      </header>
    </div>
  );
}

export default App;
