import { UserProps } from "./../../types/user";
import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: state.users };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    case UserActionTypes.ADD_USER:
      return { loading: true, error: null, users: state.users };
    case UserActionTypes.ADD_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        users: [...state.users, action.payload],
      };
    case UserActionTypes.ADD_USER_ERROR:
      return { loading: false, error: action.payload, users: state.users };
    case UserActionTypes.EDIT_USER:
      return { loading: true, error: null, users: state.users };
    case UserActionTypes.EDIT_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        users: state.users.map(user => {
          if(user.id == action.payload.id) return action.payload; 
          else {
              return user
          }
      })
      };
    case UserActionTypes.EDIT_USER_ERROR:
      return { loading: false, error: action.payload, users: state.users };
    case UserActionTypes.REMOVE_USER:
      return { loading: true, error: null, users: state.users };
    case UserActionTypes.REMOVE_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        users: state.users.filter(
          (user: UserProps) => user.id !== action.payload
        ),
      };
    case UserActionTypes.REMOVE_USER:
      return { loading: true, error: null, users: state.users };
    default:
      return state;
  }
};
