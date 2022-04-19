export interface UserState {
    users: any,
    loading: boolean,
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    payload: any
    type: UserActionTypes.FETCH_USERS_SUCCESS
}

interface FetchUsersErrorAction {
    payload: string | null
    type: UserActionTypes.FETCH_USERS_ERROR
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction