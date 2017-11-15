import { NOTE2SEMI, mod, accs2semi } from './utils'
import { NOTES, ACCS } from './symbols'
import Note from '../Note'

class NoteHelper {
  static parse(str) {
    let [name, base, accs] = new RegExp(
      `(${NOTES.join('|')})([${ACCS.flat}|${ACCS.natural}|${ACCS.sharp}]*)`
    ).exec(str)

    accs     = accs2semi(accs)
    let semi = mod(NOTE2SEMI[base] + accs, 12)

    return { name, base, accs, semi }
  }

  static fromSemi(semi) {
    let intv = new Note(int2intv(semi))
    let name = String(intv.name)
    let base = String(intv.base)
    let accs = Number(intv.accs)
        semi = Number(intv.semi)

    return { name, base, accs, semi }
  }
}

export default NoteHelper
