import helper, { DEFAULT_ROOT, DEFAULT_INTVS } from './helpers/Mode'

class Mode {
  constructor(root = DEFAULT_ROOT, intvs = DEFAULT_INTVS) {
    this.root  = root
    this.intvs = intvs
    this.notes = helper.notes(this.root, this.intvs)
  }

  scale() {
    return helper.scale(this.root, this.intvs)
  }

  doesInclude(mode) {
    if (this.intvs.length <= mode.intvs.length) return false

    let semis = this.intvs.map(intv => intv.semi)

    for (let intv of mode.intvs) {
      if(!semis.includes(intv.semi)) return false
    }

    return true
  }
}

export default Mode
