import { useAuth } from "../../hooks";
import { StyledLogoutButton } from '../../styles';

const Logout = () => (
  <StyledLogoutButton onClick={useAuth.logout}>
    Log Out
  </StyledLogoutButton>
)

export default Logout;
