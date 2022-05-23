import * as UserActionCreators from './user'
import * as FormActionCreators from './form'
import * as AuthFormActionCreators from './auth'
import * as SearchActionCreators from './search'

export default {
    ...UserActionCreators,
    ...FormActionCreators,
    ...AuthFormActionCreators,
    ...SearchActionCreators
}