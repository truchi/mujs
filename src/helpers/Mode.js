import { INTVS } from './symbols'
import Interval from '../Interval'

class ModeHelper {
  static scale(intvs) {
    let prev  = new Interval(INTVS[0])
    let scale = intvs.map(intv => new Interval(intv.name))

    scale.push(prev)
    scale = scale.map(intv => {
      const sub = intv.sub(prev)
      prev = intv

      return sub
    })

    scale.shift()
    return scale
  }

  static notes(root, intvs) {
    return intvs.map(intv => root.add(intv))
  }
}

export default ModeHelper
