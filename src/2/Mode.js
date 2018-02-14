import List from './List'

let Scale

class Mode extends List {
  constructor(intvs) {
    super(intvs)
  }

  scale() {
    let intvs = this.intvs.reduce((list, intv, i, intvs) => {
      if (i !== 0) {
        const prev = intvs[i - 1]
        list.push(intv.sub(prev))
      }

      return list
    }, [])

    const last  = this.intvs[this.intvs.length - 1]
    const first = this.intvs[0]
    intvs.push(first.sub(last))

    return new Scale(intvs)
  }

  // notes(root) {
  //   return this.intvs.map(intv => new Note(semi2note(root.semi + intv.semi)))
  // }
}

export default Mode
export const injectScale = (Klass) => Scale = Klass
