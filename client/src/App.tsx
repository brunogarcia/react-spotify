import { useState, useEffect } from 'react';
import auth from './hooks/auth';
import './App.css';

function App() {
  const [token, setToken] = useState<string | boolean | null>(null);

  useEffect(() => {
    setToken(auth.accessToken);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:8888/login">
            Log in to Spotify
          </a>
        ) : (
          <>
            <h1>Logged in!</h1>
            <button onClick={auth.logout}>Log Out</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
