import { AuthAction, AuthActionTypes, AuthState } from "../../types/auth";
const initialState: AuthState = {
  login: false,
  loading: false,
  error: null,
};

export const authFormReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_UP:
      return { login: false, loading: true, error: null };
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return { login: true, loading: false, error: null };
    case AuthActionTypes.SIGN_UP_ERROR:
      return { login: false, loading: false, error: action.payload };
    case AuthActionTypes.SIGN_IN:
      return { login: false, loading: true, error: null };
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return { login: true, loading: false, error: null };
    case AuthActionTypes.SIGN_IN_ERROR:
      return { login: false, loading: false, error: action.payload };
    case AuthActionTypes.SIGN_OUT:
      return { login: false, loading: false, error: null };
    default:
      return state;
  }
};
