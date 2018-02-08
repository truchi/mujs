import { modulo } from './utils'
import { semi2intv } from './helpers'

class Scale {
  constructor(semis) {
    this.semis = semis
  }

  mode(i) {
    i = modulo(i, this.semis.length)
    console.log(i);

    let semis = this.semis.slice(i).concat(this.semis.slice(0, i))
      .reduce((acc, semi) => {
        acc.push(semi + acc[acc.length - 1])

        return acc
      }, [0])

    semis.pop()
    // intvs = semis.map(intv => new Interval())

    console.log(this.semis.slice(i).concat(this.semis.slice(0, i)));
    console.log(semis);

    // return new Mode
  }
}

export default Scale
