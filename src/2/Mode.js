import List from './List'

let Scale = null

class Mode extends List {
  constructor(intvs) {
    super(intvs)
  }

  scale() {
    return new Scale([2, 2, 2])
  }

  // notes(root) {
  //   return this.intvs.map(intv => new Note(semi2note(root.semi + intv.semi)))
  // }
}

export default Mode
export const injectScale = (Klass) => Scale = Klass
