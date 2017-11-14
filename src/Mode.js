import { NOTES, INTVS } from './helpers/symbols'
import Note from './Note'
import Interval from './Interval'

const defaultNote  = new Note(NOTES[0])
const defaultIntvs = INTVS.map(i => new Interval(i))

class Mode {
  constructor(root = defaultNote, intvs = defaultIntvs) {
    this.root  = root
    this.intvs = intvs

    // TODO
    // this.scale
    // this.notes
  }
}

export default Mode
