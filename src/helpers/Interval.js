import { INTV2INT, mod, accs2int, int2intv } from './utils'
import { ACCS, INTVS } from './symbols'
import Interval from '../Interval'

class IntervalHelper {
  static parse(str) {
    let [name, accs, base] = new RegExp(
      `([${ACCS.flat}|${ACCS.natural}|${ACCS.sharp}]*)(\\d*)`
    ).exec(str)

    base      = '' + (mod(+base - 1, 7) + 1)
    accs      = accs2int(accs)
    let semis = mod(INTV2INT[base] + accs, 12)

    return { name, base, accs, semis }
  }

  static fromSemis(semis) {
    let intv  = new Interval(int2intv(semis))
    let name  = new String(intv.name)
    let base  = new String(intv.base)
    let accs  = new Number(intv.accs)
        semis = new Number(intv.semis)

    return { name, base, accs, semis }
  }
}

export default IntervalHelper
