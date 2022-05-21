export interface AuthState {
  login: boolean
  loading: boolean;
  error: string | null;
}

export enum AuthActionTypes {
  SIGN_UP = "SIGN_UP",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_ERROR = "SIGN_UP_ERROR",
  SIGN_IN = "SIGN_IN",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_ERROR = "SIGN_IN_ERROR",
  SIGN_OUT = "SIGN_OUT"
}

interface SignUpAction {
  type: AuthActionTypes.SIGN_UP;
}

interface SignUpSuccessAction {
  type: AuthActionTypes.SIGN_UP_SUCCESS;
}

interface SignUpErrorAction {
  type: AuthActionTypes.SIGN_UP_ERROR;
  payload: string;
}

interface SignInAction {
  type: AuthActionTypes.SIGN_IN;
}

interface SignInSuccessAction {
  type: AuthActionTypes.SIGN_IN_SUCCESS;
}

interface SignInSuccessError {
  type: AuthActionTypes.SIGN_IN_ERROR;
  payload: string;
}

interface SignOut {
  type: AuthActionTypes.SIGN_OUT;
}

export type AuthAction =
  | SignUpAction
  | SignUpSuccessAction
  | SignUpErrorAction
  | SignInAction
  | SignInSuccessAction
  | SignInSuccessError
  | SignOut;
