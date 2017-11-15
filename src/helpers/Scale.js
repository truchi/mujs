import { INTVS, NOTES } from './symbols'
import { SEMI2INTV, factors } from './utils'
import Note from '../Note'
import Interval from '../Interval'
import Mode from '../Mode'

class ScaleHelper {
  static modes(root, intvs) {
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
    intvs    = Interval.clone(intvs)
    let prev = new Interval(INTVS[0])
    intvs.unshift(prev)

    intvs = intvs.map(intv => {
      const add = intv.add(prev)
      prev = add

      return add
    })

    intvs.pop()
    return new Mode(root, intvs)
  }

  static notes(modes) {
    return Note.clone(modes[0].notes)
  }

  static symmetry(intvs) {
    const l     = intvs.length
    const semis = intvs.map(intv => intv.semi)
    const fctrs = factors(l)

    for (let factor of fctrs) {
      const pattern = semis.slice(0, factor)
      const test    = Array.prototype
        .concat.apply([], Array(l / factor).fill(pattern))

      if (pattern.join(' ') === test.join(' '))
        return factor
    }
  }
}

export const DEFAULT_ROOT  = new Note(NOTES[0])
export const DEFAULT_INTVS = [
  SEMI2INTV[2]
, SEMI2INTV[2]
, SEMI2INTV[1]
, SEMI2INTV[2]
, SEMI2INTV[2]
, SEMI2INTV[2]
, SEMI2INTV[1]
].map(i => new Interval(i))

export default ScaleHelper
