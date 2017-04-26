import {messageError} from './util/messageError'
import {isFrozen} from 'vapi.is/isFrozen'

export const assertIsFrozen = (value, name = 'value', message = 'not is a frozen object.') => (
  isFrozen(value) || (() => { throw new TypeError(messageError(name, message)) })()
)
