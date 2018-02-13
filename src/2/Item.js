import Cache from './Cache'

class Item {
  constructor(str) {
    if (Number.isInteger(str)) str = this.fake(str)

    const { name, base, accs, semi } =
      Cache.remember(`Item:ctr:${str}`, () => this.parse(str))

    this.semi = semi
    this.name = name
    this.base = base
    this.accs = accs
  }
}

export default Item
