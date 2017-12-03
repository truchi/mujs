import { INTVS, NOTES } from './symbols'
import { arr2items } from './utils'
import Note from '../Note'
import Interval from '../Interval'

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
    return new ModeHelper.Scale(root, intvs)
  }
}

export const DEFAULT_ROOT  = new Note(NOTES[0])
export const DEFAULT_INTVS = arr2items(Interval, INTVS)

export default ModeHelper
