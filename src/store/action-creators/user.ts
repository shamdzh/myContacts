import { FormAction } from './../../types/form';
import axios from "axios";
import { Dispatch } from "redux";
import { FormActionTypes } from "../../types/form";
import { UserAction, UserActionTypes, UserProps } from "./../../types/user";
import { hideForm } from "./form";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      console.log("fetchUsers");
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get<UserProps>(
        "http://localhost:3001/contacts"
      );
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке контактов",
      });
    }
  };
};

export const addUser = (payload: UserProps) => {
  return async (dispatch: Dispatch<UserAction | FormAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.post("http://localhost:3001/contacts", {
        ...payload,
      });
      setTimeout(() => {
        dispatch({ type: FormActionTypes.HIDE_FORM, payload: false });
        dispatch({
          type: UserActionTypes.ADD_USER_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: UserActionTypes.ADD_USER_ERROR,
        payload: "Произошла ошибка при добавлении контакта",
      });
    }
  };
};

export const removeUser = (id: number) => {
  return async (dispatch: Dispatch<UserAction | FormAction>) => {
    try {
      dispatch({ type: UserActionTypes.REMOVE_USER });
      const response = await axios.delete(
        `http://localhost:3001/contacts/${id}`
      );
      setTimeout(() => {
        console.log("REMOVE_SUCCESS");
        dispatch({ type: FormActionTypes.HIDE_FORM, payload: false });
        dispatch({
          type: UserActionTypes.REMOVE_USER_SUCCESS,
          payload: id,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: UserActionTypes.REMOVE_USER_ERROR,
        payload: "Произошла ошибка при удалении контакта",
      });
    }
  };
};
