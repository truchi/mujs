import { NOTE2INT, mod, accs2int } from './utils'
import { NOTES, ACCS } from './symbols'

class Note {
  static parse(str) {
    let [name, base, accs] = new RegExp(
      `(${NOTES.join('|')})([${ACCS.flat}|${ACCS.natural}|${ACCS.sharp}]*)`
    ).exec(str)

    accs      = accs2int(accs)
    let semis = mod(NOTE2INT[base] + accs, 12)

    return { name, base, accs, semis }
  }
}

export default Note
