import { AUTH } from "./AuthType";

function Authenticate(status) {
  return {
    type: AUTH,
  };
}

export default Authenticate;
