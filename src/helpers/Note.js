import { NOTE2INT, mod, accs2int } from './utils'
import { NOTES, ACCS } from './symbols'
import Note from '../Note'

class NoteHelper {
  static parse(str) {
    let [name, base, accs] = new RegExp(
      `(${NOTES.join('|')})([${ACCS.flat}|${ACCS.natural}|${ACCS.sharp}]*)`
    ).exec(str)

    accs      = accs2int(accs)
    let semis = mod(NOTE2INT[base] + accs, 12)

    return { name, base, accs, semis }
  }

  static fromSemis(semis) {
    let intv  = new Note(int2intv(semis))
    let name  = new String(intv.name)
    let base  = new String(intv.base)
    let accs  = new Number(intv.accs)
        semis = new Number(intv.semis)

    return { name, base, accs, semis }
  }
}

export default NoteHelper
