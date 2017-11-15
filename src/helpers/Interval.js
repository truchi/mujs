import { INTV2SEMI, mod, accs2semi, semi2intv } from './utils'
import { ACCS, INTVS } from './symbols'
import Interval from '../Interval'

class IntervalHelper {
  static parse(str) {
    let [name, accs, base] = new RegExp(
      `([${ACCS.flat}|${ACCS.natural}|${ACCS.sharp}]*)(\\d*)`
    ).exec(str)

    base     = '' + (mod(+base - 1, 7) + 1)
    accs     = accs2semi(accs)
    let semi = mod(INTV2SEMI[base] + accs, 12)

    return { name, base, accs, semi }
  }

  static fromSemi(semi) {
    let intv = new Interval(semi2intv(semi))
    let name = new String(intv.name)
    let base = new String(intv.base)
    let accs = new Number(intv.accs)
        semi = new Number(intv.semi)

    return { name, base, accs, semi }
  }
}

export default IntervalHelper
