import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "./../../types/user";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get("http://localhost:3001/posts");
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};

export const addUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.post("http://localhost:3001/posts", {
        title: "MyRequest",
        author: "ShamDzh",
      });


      setTimeout(() => {
        dispatch({
          type: UserActionTypes.ADD_USER_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: UserActionTypes.ADD_USER_ERROR,
        payload: "Произошла ошибка при добавлении пользователя",
      });
    }
  };
};
