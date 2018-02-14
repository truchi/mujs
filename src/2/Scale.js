import { modulo } from './utils'
import Symbols    from './Symbols'
import List       from './List'
import Interval   from './Interval'

let Mode

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

    return new Mode(intvs)
  }

  clean() {
    let intvs = this.intvs

    // Sum must be 12
    const sum = intvs.reduce((sum, intv) => sum + intv.semi, 0)
    if (sum !== Symbols.N) throw `Semi's sum must be ${ Symbols.N }, is ${ sum }`

    this.intvs = intvs
  }
}

export default Scale
export const injectMode = (Klass) => Mode = Klass
