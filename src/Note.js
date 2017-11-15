import Item from './Item'
import Helper from './helpers/Item'
import { NOTES } from './helpers/symbols'
import { NOTE2SEMI, semi2note } from './helpers/utils'

class Note extends Item {
  constructor(arg = NOTES[0]) {
    super(arg)
  }
}

Note.helper = new Helper(Note, NOTES, NOTE2SEMI, semi2note)

export default Note
