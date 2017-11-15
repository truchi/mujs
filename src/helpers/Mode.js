import { INTVS, NOTES } from './symbols'
import Note from '../Note'
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

export const DEFAULT_ROOT  = new Note(NOTES[0])
export const DEFAULT_INTVS = INTVS.map(i => new Interval(i))

export default ModeHelper
