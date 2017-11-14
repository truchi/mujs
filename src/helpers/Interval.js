import { INTV2INT, mod, accs2int } from './utils'
import { ACCS, INTVS } from './symbols'

class Interval {
  static parse(str) {
    let [name, acc, base] = new RegExp(
      `([${ACCS.flat}|${ACCS.natural}|${ACCS.sharp}]*)(\\d*)`
    ).exec(str)

    base     = '' + (mod(+base - 1, 7) + 1)
    acc      = accs2int(acc)
    let semi = mod(INTV2INT[base] + acc, 12)

    return { name, base, acc, semi }
  }
}

export default Interval
