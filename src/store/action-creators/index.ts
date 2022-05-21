import * as UserActionCreators from './user'
import * as FormActionCreators from './form'
import * as AuthFormActionCreators from './auth'

export default {
    ...UserActionCreators,
    ...FormActionCreators,
    ...AuthFormActionCreators
}