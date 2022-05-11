import { FormAction, FormActionTypes, FormState } from "./../../types/form";

const initialState: FormState = {
  visible: false,
};

export const formReducer = (state = initialState, action: FormAction) : FormState => {
  switch (action.type) {
    case FormActionTypes.SHOW_FORM:
      return {...state, visible: true};
    case FormActionTypes.HIDE_FORM:
        return {...state, visible: false};
    default:
      return state;
  }
};
