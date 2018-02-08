import { parseNoteName as parseName } from './helpers'
import { Cache } from './utils'

class Note {
  constructor(str) {
    const { name, base, accs, semi } =
      Cache.remember(`Note:ctr:${str}`, () => parseName(str))

    this.semi = semi
    this.name = name
    this.base = base
    this.accs = accs
  }
}

export default Note
