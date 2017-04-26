import {messageError} from './util/messageError'
import {isSealed} from 'vapi.is/isSealed'

export const assertIsSealed = (value, name = 'value', message = 'not is a sealed object.') => (
  isSealed(value) || (() => { throw new TypeError(messageError(name, message)) })()
)
