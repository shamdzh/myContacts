import { FormAction, FormActionTypes, FormState } from "./../../types/form";

const initialState: FormState = {
  name: "",
  phone: "",
  visible: false,
};

export const formReducer = (state = initialState,action: FormAction): FormState => {
  switch (action.type) {
    case FormActionTypes.SHOW_FORM:
      return { ...state, visible: true };
    case FormActionTypes.HIDE_FORM:
      return { ...state, visible: false };
    case FormActionTypes.SET_NAME:
      return { ...state, name: action.payload };
    case FormActionTypes.SET_PHONE:
      return { ...state, phone: action.payload };
    default:
      return state;
  }
};
