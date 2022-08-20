import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { GlobalStyle } from "./styles";
import { useToken, useScroll as ScrollToTop } from "./hooks";

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
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
