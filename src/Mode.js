import { NOTES, INTVS } from './helpers/symbols'
import Note from './Note'
import Interval from './Interval'
import helper from './helpers/Mode'

const defaultNote  = new Note(NOTES[0])
const defaultIntvs = INTVS.map(i => new Interval(i))

class Mode {
  constructor(root = defaultNote, intvs = defaultIntvs) {
    this.root  = root
    this.intvs = intvs
    this.scale = helper.scale(this.intvs)
    this.notes = helper.notes(this.root, this.intvs)
  }
}

export default Mode
