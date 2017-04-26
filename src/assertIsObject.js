import {isObject} from 'vapi.is/isObject'

export const assertIsObject = (value, name = 'value') => (
  isObject(value) || (() => { throw new TypeError(`\`${name}\`: is not a object.`) })()
)
