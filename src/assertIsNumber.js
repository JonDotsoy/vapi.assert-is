import {messageError} from './util/messageError'
import {isNumber} from 'vapi.is/isNumber'

export const assertIsNumber = (value, name = 'value', message = 'not is a number.') => (
  isNumber(value) || (() => { throw new TypeError(messageError(name, message)) })()
)
