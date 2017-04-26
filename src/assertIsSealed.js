import {isSealed} from 'vapi.is/isSealed'

export const assertIsSealed = (value, name = 'value') => (
  isSealed(value) || (() => { throw new TypeError(`\`${name}\`: is not a sealed object.`) })()
)
