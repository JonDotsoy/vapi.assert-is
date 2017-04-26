import {isSealed} from 'vapi.is/isSealed'

export const assertIsSealed = (value, name = 'value') => (
  isSealed(value) || (() => { throw new TypeError(`\`${name}\`: not is a sealed object.`) })()
)
