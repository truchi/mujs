import helper from './helpers/Interval'

class Interval {
  constructor(arg = '1') {
    let name = null
    let base = null
    let accs = null
    let semi = null

    if (typeof arg === 'string') {
      ({ name, base, accs, semi } = helper.parse(arg))
    } else if (typeof arg === 'number') {
      ({ name, base, accs, semi } = helper.fromSemi(arg))
    } else {
      console.error(`Interval@constructor: arg must be string or number, got:`, arg)
      throw ''
    }

    this.name = name
    this.base = base
    this.accs = accs
    this.semi = semi
  }

  sub(intv) {
    return new Interval(this.semi - intv.semi)
  }
}

export default Interval
