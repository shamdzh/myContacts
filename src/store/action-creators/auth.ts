import { AuthAction, AuthActionTypes } from "../../types/auth";
import { Dispatch } from "redux";
import axios from "axios";

export const signUp = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      console.log("signUp");
      dispatch({ type: AuthActionTypes.SIGN_UP });
      const response = await axios.post("http://localhost:3001/signup", {
        email: email,
        password: password,
      });

      setTimeout(() => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
          type: AuthActionTypes.SIGN_UP_SUCCESS,
        });
      }, 500);
    } catch (e) {
      console.log("signUp Error");
      dispatch({
        type: AuthActionTypes.SIGN_UP_ERROR,
        payload: "Произошла ошибка при регистрации пользователя",
      });
    }
  };
};

export const signIn = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      console.log("signIn");
      dispatch({ type: AuthActionTypes.SIGN_IN });
      const response = await axios.post("http://localhost:3001/signin", {
        email: email,
        password: password,
      });

      setTimeout(() => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
          type: AuthActionTypes.SIGN_IN_SUCCESS,
        });
      }, 500);
    } catch (e) {
      console.log("signIn Error");
      dispatch({
        type: AuthActionTypes.SIGN_UP_ERROR,
        payload: "Произошла ошибка при регистрации пользователя",
      });
    }
  };
};

export const setLogin = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: AuthActionTypes.SIGN_IN_SUCCESS,
    });
  };
};

export const signOut = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    localStorage.removeItem('user')
    dispatch({
      type: AuthActionTypes.SIGN_OUT,
    });
  };
};

