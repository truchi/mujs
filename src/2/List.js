import Interval from './Interval'

class List {
  constructor(intvs = [0]) {
    this.intvs = intvs.map(intv =>
         intv.constructor.name === 'Interval'
      || intv.constructor.name === 'Note'
        ? new Interval(intv.semi)
        : new Interval(intv)
    )

    this.clean()
  }
}

export default List
