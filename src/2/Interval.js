import Symbols    from './Symbols'
import ItemHelper from './ItemHelper'
import Item       from './Item'

class Interval extends Item {
  constructor(str) {
    super(str)
  }

  parse(str) {
    return ItemHelper.parse(str, Symbols.intervals, false)
  }

  fake(semi) {
    return Symbols.semi2nterval(semi)
  }
}

export default Interval
