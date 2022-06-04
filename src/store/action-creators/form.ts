import { UserProps } from "./../../types/user";
import { FormAction, FormActionTypes } from "./../../types/form";
import { Dispatch } from "redux";

export const showForm = () => {
  return (dispatch: Dispatch<FormAction>) => {
    dispatch({ type: FormActionTypes.SHOW_FORM });
    dispatch({ type: FormActionTypes.SET_NAME, payload: "" });
    dispatch({ type: FormActionTypes.SET_PHONE, payload: "" });
  };
};

export const hideForm = () => {
  return (dispatch: Dispatch<FormAction>) => {
    console.log("hideForm");
    dispatch({ type: FormActionTypes.HIDE_FORM, payload: false });
    dispatch({ type: FormActionTypes.SET_NAME, payload: "" });
    dispatch({ type: FormActionTypes.SET_PHONE, payload: "" });
    dispatch({ type: FormActionTypes.EDIT_FORM, payload: false });
  };
};

export const editForm = (user: UserProps) => {
  return (dispatch: Dispatch<FormAction>) => {
    console.log("editForm");
    dispatch({ type: FormActionTypes.EDIT_FORM, payload: true });
    dispatch({ type: FormActionTypes.SET_EDIT_ID, payload: user.id! });
    dispatch({ type: FormActionTypes.SET_NAME, payload: user.name });
    dispatch({ type: FormActionTypes.SET_PHONE, payload: user.number });
  };
};

export const setName = (name: string) => {
  return (dispatch: Dispatch<FormAction>) => {
    console.log("setName");
    dispatch({ type: FormActionTypes.SET_NAME, payload: name });
  };
};

export const setPhone = (phone: string) => {
  return (dispatch: Dispatch<FormAction>) => {
    console.log("setName");
    dispatch({ type: FormActionTypes.SET_PHONE, payload: phone });
  };
};
