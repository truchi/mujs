import { INTV2INT, mod, accs2int } from './utils'
import { ACCS, INTVS } from './symbols'

class Interval {
  static parse(str) {
    let [name, accs, base] = new RegExp(
      `([${ACCS.flat}|${ACCS.natural}|${ACCS.sharp}]*)(\\d*)`
    ).exec(str)

    base     = '' + (mod(+base - 1, 7) + 1)
    accs      = accs2int(accs)
    let semis = mod(INTV2INT[base] + accs, 12)

    return { name, base, accs, semis }
  }
}

export default Interval
