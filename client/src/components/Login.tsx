import React from 'react';
import { StyledButton } from '../styles/ui';

const Login: React.FC = () => {
  return (
    <StyledButton href="http://localhost:8888/login">
      Log in to Spotify
    </StyledButton>
  );
}

export default Login;
