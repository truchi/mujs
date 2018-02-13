import List from './List'

let Mode = null

class Scale extends List {
  constructor(intvs) {
    super(intvs)
  }

  mode() {
    return new Mode([0, 1, 2])
  }

  // mode(i) {
  //   let semis = this.intvs.map(intv => intv.semi)
  //
  //   i = modulo(i, semis.length)
  //   console.log(i);
  //
  //   semis =
  //     semis.slice(i)
  //     .concat(semis.slice(0, i))
  //     .reduce((acc, semi) => {
  //       acc.push(semi + acc[acc.length - 1])
  //
  //       return acc
  //     }, [0])
  //
  //   semis.pop()
  //   // intvs = semis.map(intv => new Interval())
  //
  //   console.log(this.intvs.map(intv => intv.semi));
  //   console.log(semis.slice(i).concat(semis.slice(0, i)));
  //   console.log(semis);
  //
  //   // return new Mode
  // }
}

export default Scale
export const injectMode = (Klass) => Mode = Klass
