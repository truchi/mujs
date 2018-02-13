import Interval from './Interval'

class List {
  constructor(intvs) {
    this.intvs = intvs.map(intv =>
      intv.constructor.name === 'Interval'
        ? intv
        : new Interval(intv)
    )
  }
}

export default List
