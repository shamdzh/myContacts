import { formReducer } from './form';
import { userReducer } from './user';
import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>

