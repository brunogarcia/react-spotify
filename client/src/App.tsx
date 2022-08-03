import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import auth from "./hooks/useAuth";
import { GlobalStyle } from "./styles";
import ScrollToTop from "./hooks/useScroll";

import {
  Login,
  Profile,
  TopArtists,
  TopTracks,
  Playlist,
  Playlists,
} from "./pages";

import { Logout } from "./components";

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(auth.accessToken);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        {!token ? (
          <Login />
        ) : (
          <>
            <Logout />
            <Router>
              <ScrollToTop />
              <Routes>
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-tracks" element={<TopTracks />} />
                <Route path="/playlists/:id" element={<Playlist />} />
                <Route path="/playlists" element={<Playlists />} />
                <Route path="/" element={<Profile />} />
              </Routes>
            </Router>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
