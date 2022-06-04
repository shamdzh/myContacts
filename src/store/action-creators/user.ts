import { AuthActionTypes, AuthAction } from "./../../types/auth";
import { FormAction } from "./../../types/form";
import axios from "axios";
import { Dispatch } from "redux";
import { FormActionTypes } from "../../types/form";
import { UserAction, UserActionTypes, UserProps } from "./../../types/user";
import { hideForm } from "./form";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction | AuthAction>) => {
    try {
      console.log("fetchUsers");
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get<UserProps>(
        "http://localhost:3001/contacts",
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")!).accessToken
            }`,
          },
        }
      );
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e: any) {
      console.log(e.response.status);

      if (e.response.status == 401) {
        localStorage.removeItem("user");
        dispatch({
          type: UserActionTypes.FETCH_USERS_ERROR,
          payload: "Ошибка 401. Не выполнена авторизация",
        });
        dispatch({
          type: AuthActionTypes.SIGN_OUT,
        });
      }
    }
  };
};

export const addUser = (payload: UserProps) => {
  return async (dispatch: Dispatch<UserAction | FormAction | AuthAction>) => {
    try {
      console.log('addUser')
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.post(
        "http://localhost:3001/contacts",
        { ...payload },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")!).accessToken
            }`,
          },
        }
      );
      setTimeout(() => {
        dispatch({ type: FormActionTypes.HIDE_FORM, payload: false });
        dispatch({
          type: UserActionTypes.ADD_USER_SUCCESS,
          payload: response.data,
        });
        dispatch({type: FormActionTypes.SET_NAME, payload: ''})
        dispatch({type: FormActionTypes.SET_PHONE, payload: ''})
      }, 500);

      
    } catch (e: any) {
      console.log(e.response.status);

      if (e.response.status == 401) {
        localStorage.removeItem("user");
        dispatch({
          type: UserActionTypes.ADD_USER_ERROR,
          payload: "Ошибка 401. Не выполнена авторизация",
        });
        dispatch({
          type: AuthActionTypes.SIGN_OUT,
        });
      }
    }
  };
};


export const editUser = (user: UserProps) => {
  return async (dispatch: Dispatch<UserAction | FormAction | AuthAction>) => {
    try {
      console.log('editUser')
      dispatch({ type: UserActionTypes.EDIT_USER });
      const response = await axios.put(
        `http://localhost:3001/660/contacts/${user.id}`,
        { name: user.name, number: user.number },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")!).accessToken
            }`,
          },
        }
      );
      setTimeout(() => {
        dispatch({ type: FormActionTypes.HIDE_FORM, payload: false });
        dispatch({
          type: UserActionTypes.EDIT_USER_SUCCESS,
          payload: response.data,
        });
        dispatch({type: FormActionTypes.EDIT_FORM, payload: false });
        dispatch({type: FormActionTypes.SET_NAME, payload: ''})
        dispatch({type: FormActionTypes.SET_PHONE, payload: ''})
      }, 500);

      
    } catch (e: any) {
      console.log(e.response.status);

      if (e.response.status == 401) {
        localStorage.removeItem("user");
        dispatch({
          type: UserActionTypes.ADD_USER_ERROR,
          payload: "Ошибка 401. Не выполнена авторизация",
        });
        dispatch({
          type: AuthActionTypes.SIGN_OUT,
        });
      }
    }
  };
};

export const removeUser = (id: number) => {
  return async (dispatch: Dispatch<UserAction | FormAction | AuthAction>) => {
    try {
      dispatch({ type: UserActionTypes.REMOVE_USER });
      const response = await axios.delete(
        `http://localhost:3001/660/contacts/${id}`,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")!).accessToken
            }`,
          },
        }
      );
      setTimeout(() => {
        console.log("REMOVE_SUCCESS");
        dispatch({ type: FormActionTypes.HIDE_FORM, payload: false });
        dispatch({
          type: UserActionTypes.REMOVE_USER_SUCCESS,
          payload: id,
        });
      }, 500);
    } catch (e: any) {
      console.log(e.response.status);

      if (e.response.status == 401) {
        localStorage.removeItem("user");
        dispatch({
          type: UserActionTypes.REMOVE_USER_ERROR,
          payload: "Ошибка 401. Не выполнена авторизация",
        });
        dispatch({
          type: AuthActionTypes.SIGN_OUT,
        });
      }
    }
  };
};
