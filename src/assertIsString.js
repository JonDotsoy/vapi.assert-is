import {isString} from 'vapi.is/isString'

export const assertIsString = (value, name = 'value') => (
  isString(value) || (() => { throw new TypeError(`\`${name}\`: is not a string.`) })()
)
