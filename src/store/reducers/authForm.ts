import { AuthFormAction, AuthFormActionTypes, AuthFormState } from './../../types/authForm';
const initialState: AuthFormState = {
    authToken: {},
    loading: false,
    error: null,
  };

  export const authFormReducer = (state = initialState, action: AuthFormAction) => {
    switch (action.type) {
      case AuthFormActionTypes.SIGN_UP:
        return { loading: true, error: null, authToken: {} };
      default:
        return state;
    }
  };