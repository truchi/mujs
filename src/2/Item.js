import Cache from './Cache'

class Item {
  constructor(str = 0) {
    if (Number.isInteger(str)) str = this.fake(str)

    const { name, base, accs, semi } =
      Cache.remember(`Item:ctr:${str}`, () => this.parse(str))

    this.semi = semi
    this.name = name
    this.base = base
    this.accs = accs
  }

  add(item) {
    return new this.constructor(this.semi + item.semi)
  }

  sub(item) {
    return new this.constructor(this.semi - item.semi)
  }

  equals(item) {
    return this.name === item.name
  }

  equivs(item) {
    return this.semi === item.semi
  }
}

export default Item
