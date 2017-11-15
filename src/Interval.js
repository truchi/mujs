import Item from './Item'
import Helper from './helpers/Item'
import { INTVS } from './helpers/symbols'
import { INTV2SEMI, semi2intv } from './helpers/utils'

class Interval extends Item {
  constructor(arg = INTVS[0]) {
    super(arg)
  }
}

Interval.helper = new Helper(Interval, INTVS, INTV2SEMI, semi2intv)

export default Interval
