import { INTVS, NOTES } from './symbols'
import Note from '../Note'
import Interval from '../Interval'
import Scale from '../Scale'

class ModeHelper {
  static notes(root, intvs) {
    return intvs.map(intv => root.add(intv))
  }

  static scale(root, intvs) {
    root      = root.clone()
    intvs     = Interval.clone(intvs)
    let prev  = new Interval(INTVS[0])

    intvs.push(prev)
    intvs = intvs.map(intv => {
      const sub = intv.sub(prev)
      prev = intv

      return sub
    })

    intvs.shift()
    return new Scale(root, intvs)
  }
}

export const DEFAULT_ROOT  = new Note(NOTES[0])
export const DEFAULT_INTVS = INTVS.map(i => new Interval(i))

export default ModeHelper
