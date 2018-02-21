import { modulo } from './utils'
import Symbols    from './Symbols'
import List       from './List'
import Interval   from './Interval'

class Scale extends List {
  constructor(intvs) {
    super(intvs)
  }

  mode(i) {
    i = modulo(i, this.intvs.length)

    let intvs =
      this.intvs.slice(i)
        .concat(this.intvs.slice(0, i))
        .reduce((list, intv) => {
          const prev = list[list.length - 1]
          list.push(intv.add(prev))

          return list
        }, [new Interval])

    intvs.pop()

    return new List.Mode(intvs)
  }

  clean() {
    let intvs = this.intvs

    // Sum must be 12
    const sum = intvs.reduce((sum, intv) => sum + intv.semi, 0)
    if (sum !== Symbols.N) throw `Semi's sum must be ${ Symbols.N }, is ${ sum }`

    this.intvs = intvs
  }

  id() {
    const i = this._getIndex()
    const id = this.intvs
      .slice(i)
      .concat(this.intvs.slice(0, i))
      .map(intv => intv.name)
      .join(',')

    return `${ id } (${ i })`
  }

  slug() {
    const i = this._getIndex()
    const id = this.intvs
      .slice(i)
      .concat(this.intvs.slice(0, i))
      .map(intv => intv.semi)
      .join(',')

    return `${ id } (${ i })`
  }

  equals(scale) {
    return this.slug() === scale.slug()
  }

  equivs(scale) {
    const slug1 =  this.slug(false)
    const slug2 = scale.slug(false)

    return `${ slug1 },${ slug1 }`.indexOf(slug2) !== -1
  }

  _getIndex() {
    const semis  = this.intvs.map(i => i.semi)
    const l      = semis.length
    const table  = []

    const getScore = (mode) => {
      const l = mode.intvs.length
      return mode.scale()
        .intvs.map(i => i.semi)
        .reduce((sum, semi, i) => sum + semi * (l - i - 1), 0)
    }

    for (let i = 0; i < l; ++i)
      table.push({ i, semi: semis[i], score: getScore(this.mode(i)) })

    table.sort((i1, i2) =>
      i1.score != i2.score
        ? i2.score - i1.score
        : i2.semi - i1.semi
    )

    return table[0].i
  }
}

export default Scale
