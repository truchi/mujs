import Interval from './Interval'

class List {
  constructor(intvs = [0]) {
    this.intvs = intvs.map(intv => {
      if (
           intv.constructor.name === 'Interval'
        || intv.constructor.name === 'Note'
      )
        return new Interval(intv.semi)

      return new Interval(intv)
    })
  }
}

export default List
