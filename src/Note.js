import helper from './helpers/Note'

class Note {
  constructor(str = 'C') {
    const { name, base, accs, semis } = helper.parse(str)

    this.name  = name
    this.base  = base
    this.accs  = accs
    this.semis = semi
  }
}

export default Note
