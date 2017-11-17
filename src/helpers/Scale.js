import { INTVS, NOTES } from './symbols'
import { SEMI2INTV, factors, arr2items } from './utils'
import Note from '../Note'
import Interval from '../Interval'

class ScaleHelper {
  static notes(modes) {
    return Note.clone(modes[0].notes)
  }

  static modes(root, intvs) {
    root           = root.clone()
    intvs          = Interval.clone(intvs)
    const symmetry = ScaleHelper.symmetry(intvs)
    let modes      = [ScaleHelper.mode(root, intvs)]

    for (let i = 1; i < symmetry; ++i) {
      intvs.push(intvs.shift())
      modes.push(
        ScaleHelper.mode(
          root.add(modes[0].notes[i])
        , intvs)
      )
    }

    return modes
  }

  static mode(root, intvs) {
    root     = root.clone()
    intvs    = Interval.clone(intvs)
    let prev = new Interval(INTVS[0])

    intvs.unshift(prev)
    intvs = intvs.map(intv => {
      const add = intv.add(prev)
      prev = add

      return add
    })

    intvs.pop()
    return new ScaleHelper.Mode(root, intvs)
  }

  static symmetry(intvs) {
    const l     = intvs.length
    const semis = intvs.map(intv => intv.semi)
    const fctrs = factors(l)

    for (let factor of fctrs) {
      const pattern = semis.slice(0, factor)
      const test    = Array.prototype
        .concat.apply([], Array(l / factor).fill(pattern))

      if (semis.join(' ') === test.join(' '))
        return factor
    }
  }
}

export const DEFAULT_ROOT  = new Note(NOTES[0])
export const DEFAULT_INTVS = arr2items(Interval, [
    SEMI2INTV[2]
  , SEMI2INTV[2]
  , SEMI2INTV[1]
  , SEMI2INTV[2]
  , SEMI2INTV[2]
  , SEMI2INTV[2]
  , SEMI2INTV[1]
  ]
)

export default ScaleHelper
