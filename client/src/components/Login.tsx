import React from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.a`
  background-color: green;
  color: white;
  padding: 10px 20px;
  margin: 20px auto;
  border-radius: 30px;
  display: inline-block;
`;

const Login: React.FC = () => {
  return (
    <StyledButton href="http://localhost:8888/login">
      Log in to Spotify
    </StyledButton>
  );
}

export default Login;
