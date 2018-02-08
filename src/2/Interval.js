import { parseIntervalName as parseName } from './helpers'

class Interval {
  constructor(str) {
    const { name, base, accs, semi } = parseName(str)

    this.semi = semi
    this.name = name
    this.base = base
    this.accs = accs
  }
}

export default Interval
