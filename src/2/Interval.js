import { parseIntervalName as parseName } from './helpers'
import { Cache } from './utils'

class Interval {
  constructor(str) {
    const { name, base, accs, semi } =
      Cache.remember(`Interval:ctr:${str}`, () => parseName(str))

    this.semi = semi
    this.name = name
    this.base = base
    this.accs = accs
  }
}

export default Interval
