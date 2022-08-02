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

import { GlobalStyle } from './styles';

import Home from './components/Home';
import Login from './components/Login';
import TopArtists from './components/TopArtists';
import TopTracks from './components/TopTracks';
import Playlist from './components/Playlist';
import Playlists from './components/Playlists';

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
      <GlobalStyle />
      <header className="App-header">
        {!token ? <Login /> : (
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-tracks" element={<TopTracks />} />
              <Route path="/playlists/:id" element={<Playlist />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/" element={<Home profile={profile} />} />
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
