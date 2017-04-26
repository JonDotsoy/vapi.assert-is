import {messageError} from './util/messageError'
import {isObject} from 'vapi.is/isObject'

export const assertIsObject = (value, name = 'value', message = 'not is an object.') => (
  isObject(value) || (() => { throw new TypeError(messageError(name, message)) })()
)
