class Item {
  constructor(arg) {
    let name
    let base
    let accs
    let semi

    if (typeof arg === 'string') {
      ({ name, base, accs, semi } = this.constructor.helper.parse(arg))
    } else if (typeof arg === 'number') {
      ({ name, base, accs, semi } = this.constructor.helper.fromSemi(arg))
    } else {
      console.error(
        `${this.constructor.name}@constructor: `
      + `arg must be string or number, got:`
      , arg
      )
      throw ''
    }

    this.name = name
    this.base = base
    this.accs = accs
    this.semi = semi
  }

  add(item) {
    return new this.constructor(this.semi + item.semi)
  }

  sub(item) {
    return new this.constructor(this.semi - item.semi)
  }

  clone() {
    return new this.constructor(this.name)
  }

  static clone(items) {
    return items.map(item => item.clone())
  }
}

export default Item
