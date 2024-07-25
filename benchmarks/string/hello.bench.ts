import * as _ from 'radashi'
import { bench } from 'vitest'

describe('hello', () => {
  bench('with no arguments', () => {
    _.hello()
  })
})
