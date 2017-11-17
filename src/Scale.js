import helper, { DEFAULT_ROOT, DEFAULT_INTVS } from './helpers/Scale'
import ModeHelper from './helpers/Mode'

class Scale {
  constructor(root = DEFAULT_ROOT, intvs = DEFAULT_INTVS) {
    this.root  = root
    this.intvs = intvs
    this.modes = helper.modes(this.root, this.intvs)
    this.notes = helper.notes(this.modes)
  }
}

ModeHelper.Scale = Scale

export default Scale
