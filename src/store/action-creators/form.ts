import { FormAction, FormActionTypes } from './../../types/form';
import { Dispatch } from 'redux';


export const showForm = () => {
    return (dispatch: Dispatch<FormAction>) => {
        dispatch({type: FormActionTypes.SHOW_FORM, payload: true})
    }
}

export const hideForm = () => {
    return (dispatch: Dispatch<FormAction>) => {
        dispatch({type: FormActionTypes.HIDE_FORM, payload: false})
    }
}