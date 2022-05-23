import { searchReducer } from './search';
import { formReducer } from './form';
import { userReducer } from './user';
import { combineReducers } from 'redux';
import { authFormReducer } from './auth';


export const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer,
    authForm: authFormReducer,
    search: searchReducer
})

export type RootState = ReturnType<typeof rootReducer>

