import { AuthFormAction, AuthFormActionTypes } from "./../../types/authForm";
import { Dispatch } from "redux";
import axios from "axios";

export const signUp = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthFormAction>) => {
    try {
      console.log("signUp");
      dispatch({ type: AuthFormActionTypes.SIGN_UP });
      const response = await axios.post("http://localhost:3001/signup", {
        email: email,
        password: password,
      });
      setTimeout(() => {
        dispatch({
          type: AuthFormActionTypes.SIGN_UP_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      console.log("signUp Error");
      dispatch({
        type: AuthFormActionTypes.SIGN_UP_ERROR,
        payload: "Произошла ошибка при регистрации пользователя",
      });
    }
  };
};
