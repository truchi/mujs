import List from './List'

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

    return new List.Scale(intvs)
  }

  notes(root) {
    return this.intvs.map(intv => root.add(intv))
  }

  clean() {
    let intvs = this.intvs

    // Add unison if missing
    const hasUnison = intvs.some(intv => intv.semi === 0)
    if (!hasUnison)
      intvs.unshift(new Interval)

    // Sort
    intvs = intvs.sort((intv1, intv2) => intv1.semi - intv2.semi)

    // Remove duplicates
    let semis = []
    intvs = intvs.filter(intv => {
      const found = semis.indexOf(intv.semi) !== -1
      semis.push(intv.semi)

      return !found
    })

    this.intvs = intvs
  }

  equals(mode) {
    return this.intvs.every((intv, i) => intv.equals(mode.intvs[i]))
  }

  equivs(mode) {
    return this.intvs.every((intv, i) => intv.equivs(mode.intvs[i]))
  }
}

export default Mode
