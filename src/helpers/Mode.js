import { INTVS } from './symbols'
import Interval from '../Interval'

class ModeHelper {
  static scale(intvs) {
    let prev = new Interval(INTVS[0])

    intvs.push(prev)
    intvs = intvs.map(intv => {
      const sub = intv.sub(prev)
      prev = intv

      return sub
    })

    intvs.shift()
    return intvs
  }
}

export default ModeHelper
