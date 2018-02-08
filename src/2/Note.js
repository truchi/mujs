import { parseNoteName as parseName } from './helpers'

class Note {
  constructor(str) {
    const { name, base, accs, semi } = parseName(str)

    this.semi = semi
    this.name = name
    this.base = base
    this.accs = accs
  }
}

export default Note
