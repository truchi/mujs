import { semi2note } from './helpers'
import Note from './Note'

class Mode {
  constructor(intvs) {
    this.intvs = intvs
  }

  notes(root) {
    return this.intvs.map(intv => new Note(semi2note(root.semi + intv.semi)))
  }
}

export default Mode
