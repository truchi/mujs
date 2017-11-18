import Interval from './Interval'
import Scale from './Scale'
import Mode from './Mode'
import { str2items } from './helpers/utils'
import SCALES from './dict/scales.yml'
import CHORDS from './dict/chords.yml'

let DICT  = []
let MODES = []
let EQUALS  = {}
let SIMILAR = {}

class Dict {
  static init() {
    Dict._initScales()
    Dict._matchInclusions()

    return Dict
  }

  static scales() {
    return DICT
  }

  static get(mode) {
    let i = EQUALS[mode.toString()]
    if (i)
      return MODES[i]
  }

  static similar(mode) {
    let equals = Dict.get(mode)
    if (equals)
      return equals

    let i = SIMILAR[mode.toString(true)]
    if (i)
      return MODES[i]
  }

  static _initScales() {
    DICT =
      CHORDS
        .map(chord => Object.assign(chord, { type: 'chord' }))
      .concat(
        SCALES
          .map(scale => Object.assign(scale, { type: 'mode' }))
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

      EQUALS [mode1.toString()    ] = i
      SIMILAR[mode1.toString(true)] = i

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

Dict.init()

export default Dict
