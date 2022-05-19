import * as UserActionCreators from './user'
import * as FormActionCreators from './form'
import * as AuthFormActionCreators from './authForm'

export default {
    ...UserActionCreators,
    ...FormActionCreators,
    ...AuthFormActionCreators
}