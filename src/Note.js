import helper from './helpers/Note'

class Note {
  constructor(arg = 'C') {
    let name = null
    let base = null
    let accs = null
    let semi = null

    if (typeof arg === 'string') {
      ({ name, base, accs, semi } = helper.parse(arg))
    } else if (typeof arg === 'number') {
      ({ name, base, accs, semi } = helper.fromSemi(arg))
    } else {
      console.error(`Note@constructor: arg must be string or number, got:`, arg)
      throw ''
    }

    this.name = name
    this.base = base
    this.accs = accs
    this.semi = semi
  }

  add(note) {
    return new Note(this.semi + note.semi)
  }
}

export default Note
