import helper from './helpers/Interval'

class Interval {
  constructor(str = 'C') {
    const { name, base, accs, semis } = helper.parse(str)

    this.name  = name
    this.base  = base
    this.accs  = accs
    this.semis = semis
  }
}

export default Interval
