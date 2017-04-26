import {isArray} from 'vapi.is/isArray'

export const assertIsArray = (value, name = 'value') => (
  isArray(value) || (() => { throw new TypeError(`\`${name}\`: not is an array.`) })()
)
