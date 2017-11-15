import { mod, accs2semi } from './utils'
import { ACCS } from './symbols'

class ItemHelper {
  constructor(Ctr, names, name2semi, semi2name) {
    this.Ctr       = Ctr
    this.names     = names
    this.name2semi = name2semi
    this.semi2name = semi2name
  }

  parse(str) {
    let name
    let accs
    let base

    if (this.Ctr.name === 'Interval') {
      [name, accs, base] = new RegExp(
        `([${ACCS.flat}|${ACCS.natural}|${ACCS.sharp}]*)(\\d*)`
      ).exec(str)

      base = '' + (mod(+base - 1, 7) + 1)
    } else if (this.Ctr.name === 'Note') {
      [name, base, accs] = new RegExp(
        `(${this.names.join('|')})([${ACCS.flat}|${ACCS.natural}|${ACCS.sharp}]*)`
      ).exec(str)
    }

    accs     = accs2semi(accs)
    let semi = mod(this.name2semi[base] + accs, 12)

    return { name, base, accs, semi }
  }

  fromSemi(semi) {
    let intv = new this.Ctr(this.semi2name(semi))
    let name = String(intv.name)
    let base = String(intv.base)
    let accs = Number(intv.accs)
        semi = Number(intv.semi)

    return { name, base, accs, semi }
  }
}

export default ItemHelper
