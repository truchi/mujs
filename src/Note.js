import helper from './helpers/Note'

class Note {
  constructor(arg = 'C') {
    let name  = null
    let base  = null
    let accs  = null
    let semis = null

    if (typeof arg === 'string') {
      ({ name, base, accs, semis } = helper.parse(arg))
    } else if (typeof arg === 'number') {
      ({ name, base, accs, semis } = helper.fromSemis(arg))
    } else {
      console.error(`Note@constructor: arg must be string or number, got:`, arg)
      throw ''
    }

    this.name  = name
    this.base  = base
    this.accs  = accs
    this.semis = semis
  }
}

export default Note
