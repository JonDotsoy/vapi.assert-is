import {isFunction} from 'vapi.is/isFunction'

export const assertIsFunction = (value, name = 'value') => (
  isFunction(value) || (() => { throw new TypeError(`\`${name}\`: not is a function.`) })()
)
