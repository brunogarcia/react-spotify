import { StyledLoginContainer, StyledLoginButton } from '../styles';

const Login = () => (
  <StyledLoginContainer>
    <StyledLoginButton href={`${process.env.REACT_APP_SERVER_HOST}/login`}>
      Log in to Spotify
    </StyledLoginButton>
  </StyledLoginContainer>
);

export default Login;
