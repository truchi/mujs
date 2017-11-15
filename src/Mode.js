import helper, { DEFAULT_ROOT, DEFAULT_INTVS } from './helpers/Mode'

class Mode {
  constructor(root = DEFAULT_ROOT, intvs = DEFAULT_INTVS) {
    this.root  = root
    this.intvs = intvs
    this.scale = helper.scale(this.intvs)
    this.notes = helper.notes(this.root, this.intvs)
  }
}

export default Mode
