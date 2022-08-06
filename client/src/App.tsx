import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { GlobalStyle } from "./styles";
import useToken from "./hooks/useToken";
import ScrollToTop from "./hooks/useScroll";

import {
  Login,
  LoginCallback,
  Profile,
  TopArtists,
  TopTracks,
  Playlist,
  Playlists,
} from "./pages";

import { Logout } from "./components";

function App() {
  const { token } = useToken();

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
                <Route path="/callback" element={<LoginCallback />} />
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
