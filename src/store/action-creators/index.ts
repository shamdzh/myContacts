import * as UserActionCreators from './user'
import * as FormActionCreators from './form'

export default {
    ...UserActionCreators,
    ...FormActionCreators
}