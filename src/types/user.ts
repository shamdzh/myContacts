export interface UserProps {
  id?: number;
  name: string;
  number: string;
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
  REMOVE_USER = "REMOVE_USER",
  REMOVE_USER_SUCCESS = "REMOVE_USER_SUCCESS",
  REMOVE_USER_ERROR = "REMOVE_USER_ERROR",
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

interface RemoveUserAction {
  type: UserActionTypes.REMOVE_USER
}

interface RemoveUserSuccessAction {
  type: UserActionTypes.REMOVE_USER_SUCCESS,
  payload: any
}


interface RemoveUserErrorAction {
  payload: string | null;
  type: UserActionTypes.REMOVE_USER_ERROR;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | AddUserAction
  | AddUserSuccessAction
  | AddUserErrorAction
  | RemoveUserAction
  | RemoveUserSuccessAction
  | RemoveUserErrorAction
