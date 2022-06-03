export interface FormState {
  visible: boolean;
  edited?: boolean;
  editId?: number;
  name?: string;
  phone?: string;
}

export enum FormActionTypes {
  SHOW_FORM = "SHOW_FORM",
  HIDE_FORM = "HIDE_FORM",
  EDIT_FORM = "EDIT_FORM",
  SET_EDIT_ID = "SET_EDIT_ID",
  SET_NAME = "SET_NAME",
  SET_PHONE = "SET_PHONE",
}

interface ShowFormAction {
  type: FormActionTypes.SHOW_FORM;
}

interface HideFormAction {
  type: FormActionTypes.HIDE_FORM;
}

interface EditFormAction {
  payload: boolean;
  type: FormActionTypes.EDIT_FORM;
}

interface SetEditIdAction {
  payload: number;
  type: FormActionTypes.SET_EDIT_ID;
}

interface SetNameAction {
  payload: string;
  type: FormActionTypes.SET_NAME;
}

interface SetPhoneAction {
  payload: string;
  type: FormActionTypes.SET_PHONE;
}

export type FormAction =
  | ShowFormAction
  | HideFormAction
  | EditFormAction
  | SetNameAction
  | SetPhoneAction
  | SetEditIdAction;
