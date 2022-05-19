export interface AuthFormState {
  authToken: object;
  loading: boolean;
  error: string | null;
}

export enum AuthFormActionTypes {
  SIGN_UP = "SIGN_UP",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_ERROR = "SIGN_UP_ERROR",
  SIGN_IN = "SIGN_IN",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_ERROR = "SIGN_IN_ERROR",
}

interface SignUpAction {
  type: AuthFormActionTypes.SIGN_UP;
}

interface SignUpSuccessAction {
  type: AuthFormActionTypes.SIGN_UP_SUCCESS;
  payload: object;
}

interface SignUpErrorAction {
  type: AuthFormActionTypes.SIGN_UP_ERROR;
  payload: string;
}

interface SignInAction {
  type: AuthFormActionTypes.SIGN_IN;
}

interface SignInSuccessAction {
  type: AuthFormActionTypes.SIGN_IN_SUCCESS;
  payload: object;
}

interface SignInSuccessError {
  type: AuthFormActionTypes.SIGN_IN_ERROR;
  payload: string;
}

export type AuthFormAction =
  | SignUpAction
  | SignUpSuccessAction
  | SignUpErrorAction
  | SignInAction
  | SignInSuccessAction
  | SignInSuccessError;
