import { formReducer } from './form';
import { userReducer } from './user';
import { combineReducers } from 'redux';
import { authFormReducer } from './authForm';


export const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer,
    authForm: authFormReducer
})

export type RootState = ReturnType<typeof rootReducer>

