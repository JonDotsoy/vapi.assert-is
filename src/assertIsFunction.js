import {messageError} from './util/messageError'
import {isFunction} from 'vapi.is/isFunction'

export const assertIsFunction = (value, name = 'value', message = 'not is a function.') => (
  isFunction(value) || (() => { throw new TypeError(messageError(name, message)) })()
)
