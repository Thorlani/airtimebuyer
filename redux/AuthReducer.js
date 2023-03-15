import { AUTH } from "./AuthType";

const initialState = false

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        state: true
      };
    default:
      return state;
  }
};

export default Auth;
