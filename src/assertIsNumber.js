import {isNumber} from 'vapi.is/isNumber'

export const assertIsNumber = (value, name = 'value') => (
  isNumber(value) || (() => { throw new TypeError(`\`${name}\`: is not a number.`) })()
)
