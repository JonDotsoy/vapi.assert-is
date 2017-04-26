import {messageError} from './util/messageError'
import {isString} from 'vapi.is/isString'

export const assertIsString = (value, name = 'value', message = 'not is a string.') => (
  isString(value) || (() => { throw new TypeError(messageError(name, message)) })()
)
