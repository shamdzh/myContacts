export interface FormState {
    visible: boolean,
    name?: string,
    phone?: string
}

export enum FormActionTypes {
    SHOW_FORM = 'SHOW_FORM',
    HIDE_FORM = 'HIDE_FORM',
    SET_NAME = 'SET_NAME',
    SET_PHONE = 'SET_PHONE'
}

interface ShowFormAction {
    payload: boolean,
    type: FormActionTypes.SHOW_FORM
} 

interface HideFormAction {
    payload: boolean,
    type: FormActionTypes.HIDE_FORM
}

interface SetNameAction {
    payload: string,
    type: FormActionTypes.SET_NAME
}

interface SetPhoneAction {
    payload: string,
    type: FormActionTypes.SET_PHONE
}

export type FormAction = ShowFormAction | HideFormAction | SetNameAction | SetPhoneAction;