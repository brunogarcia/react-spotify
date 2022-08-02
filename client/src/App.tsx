import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import auth from './hooks/auth';
import ScrollToTop from './hooks/useScroll';
import { SpotifyUser } from "./types/spotify.model"
import { getCurrentUserProfile } from './api/spotify'

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
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/top-artists">
                <h1>Top Artists</h1>
              </Route>
              <Route path="/top-tracks">
                <h1>Top Tracks</h1>
              </Route>
              <Route path="/playlists/:id">
                <h1>Playlist</h1>
              </Route>
              <Route path="/playlists">
                <h1>Playlists</h1>
              </Route>
              <Route path="/">
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
              </Route>
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
