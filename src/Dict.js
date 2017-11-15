import Interval from './Interval'
import Scale from './Scale'
import Mode from './Mode'
import { str2items } from './helpers/utils'
import SCALES from './dict/scales.yml'
import CHORDS from './dict/chords.yml'

let DICT  = []
let MODES = []

class Dict {
  static init() {
    Dict._initScales()
    Dict._matchInclusions()

    console.log(DICT);

    return Dict
  }

  static _initScales() {
    DICT =
      SCALES
        .map(scale => Object.assign(scale, { type: 'mode' }))
      .concat(
        CHORDS
          .map(chord => Object.assign(chord, { type: 'chord' }))
      )
      .map(scale => {
        let name  = scale.name
        let type  = scale.type
        let modes = scale.modes

        scale      = new Scale(undefined, str2items(Interval, scale.intervals))
        scale.name = name
        scale.type = type
        DICT.push(scale)

        scale.modes = modes.map(mode => {
          let name = mode.name

          mode       = new Mode(undefined, str2items(Interval, mode.intervals))
          mode.name  = name
          mode.type  = type
          mode.includes = []
          mode.included = []
          ;((mode, scale) => mode.scale = () => scale)(mode, scale)
          MODES.push(mode)

          return mode
        })

        return scale
      })
  }

  static _matchInclusions() {
    let found = []

    MODES.forEach((mode1, i) => {
      found[i] = found[i] || []

      MODES.forEach((mode2, j) => {
        if (i === j) return

        found[j] = found[j] || []
        if (found[j].includes(i)) return

        if (mode1.doesInclude(mode2)) {
          found[i].push(j)

          mode1.includes.push(mode2)
          mode2.included.push(mode1)
        }
      })
    })
  }
}

export default Dict
