import { logout } from "./logout";
import { getAccessToken } from "./get-access-token";

const auth = {
  logout,
  accessToken: getAccessToken(),
};

export default auth;
