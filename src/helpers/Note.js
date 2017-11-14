import { NOTE2INT, mod, accs2int } from './utils'
import { NOTES, ACCS } from './symbols'

class Note {
  static parse(str) {
    let [name, base, acc] = new RegExp(
      `(${NOTES.join('|')})([${ACCS.flat}|${ACCS.natural}|${ACCS.sharp}]*)`
    ).exec(str)

    acc      = accs2int(acc)
    let semi = mod(NOTE2INT[base] + acc, 12)

    return { name, base, acc, semi }
  }
}

export default Note
