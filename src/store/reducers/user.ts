import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction) : UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: state.users}
        case UserActionTypes.FETCH_USERS_SUCCESS: 
            return {loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        case UserActionTypes.ADD_USER:
            return {loading: true, error: null, users: state.users}
        case UserActionTypes.ADD_USER_SUCCESS:
            return {loading: false, error: null, users: [...state.users, action.payload]}
        case UserActionTypes.ADD_USER_ERROR:
            return {loading: false, error: action.payload, users: state.users}
        default: 
            return state
    }
}