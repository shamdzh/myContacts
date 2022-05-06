export interface UserProps {
  id: number;
  author: string;
  title: string;
}


export interface UserState {
  users: any;
  loading: boolean;
  error: null | string;
}


export enum UserActionTypes {
  ADD_USER = "ADD_USER",
  ADD_USER_SUCCESS = "ADD_USER_SUCCESS",
  ADD_USER_ERROR = "ADD_USER_ERROR",
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  payload: any;
  type: UserActionTypes.FETCH_USERS_SUCCESS;
}

interface FetchUsersErrorAction {
  payload: string | null;
  type: UserActionTypes.FETCH_USERS_ERROR;
}

interface AddUserAction {
  type: UserActionTypes.ADD_USER;
}

interface AddUserSuccessAction {
  payload: any;
  type: UserActionTypes.ADD_USER_SUCCESS;
}

interface AddUserErrorAction {
  payload: string | null;
  type: UserActionTypes.ADD_USER_ERROR;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | AddUserAction
  | AddUserSuccessAction
  | AddUserErrorAction;
