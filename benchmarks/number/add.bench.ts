import * as _ from 'radashi'
import { bench } from 'vitest'

describe('add', () => {
  bench('with no arguments', () => {
    _.add()
  })
})
