export interface FormState {
    visible: boolean
}

export enum FormActionTypes {
    SHOW_FORM = 'SHOW_FORM',
    HIDE_FORM = 'HIDE_FORM'
}

interface ShowFormAction {
    payload: boolean,
    type: FormActionTypes.SHOW_FORM
} 

interface HideFormAction {
    payload: boolean,
    type: FormActionTypes.HIDE_FORM
}

export type FormAction = ShowFormAction | HideFormAction;