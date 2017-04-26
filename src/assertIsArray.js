import {messageError} from './util/messageError'
import {isArray} from 'vapi.is/isArray'

export const assertIsArray = (value, name = 'value', message = 'not is an array.') => (
  isArray(value) ||
  (() => { throw new TypeError(messageError(name, message)) })()
)
