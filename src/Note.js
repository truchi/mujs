import helper from './helpers/Note'

class Note {
  constructor(str = 'C') {
    const { name, base, acc, semi } = helper.parse(str)

    this.name = name
    this.base = base
    this.acc  = acc
    this.semi = semi
  }
}

export default Note
