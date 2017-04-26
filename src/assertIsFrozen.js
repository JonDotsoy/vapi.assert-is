import {isFrozen} from 'vapi.is/isFrozen'

export const assertIsFrozen = (value, name = 'value') => (
  isFrozen(value) || (() => { throw new TypeError(`\`${name}\`: is not a frozen object.`) })()
)
