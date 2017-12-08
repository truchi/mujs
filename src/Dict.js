import Interval from './Interval'
import Scale from './Scale'
import Mode from './Mode'
import { str2items } from './helpers/utils'
import SCALES from './dict/scales.yml'
import CHORDS from './dict/chords.yml'

let DICT     = []
let MODES    = []
let EQUALS   = {}
let SIMILARS = {}

class Dict {
  static init() {
    Dict._initScales()
    Dict._matchInclusions()

    return Dict
  }

  static scales() {
    return DICT
  }

  static modes() {
    return MODES
  }

  static get(mode) {
    let i = EQUALS[mode.toString()]

    if (typeof i !== 'undefined') {
      return MODES[i]
    } else {
      return Dict._safen(mode)
    }
  }

  static _safen(mode) {
    mode          = mode.clone()
    mode.name     = ''
    mode.includes = MODES.filter(_mode =>  mode.doesInclude(_mode))
    mode.included = MODES.filter(_mode => _mode.doesInclude( mode))
    mode.type     = mode.intvs.length > 4 ? 'mode' : 'chord'

    mode.similars = []
    const i       = SIMILARS[mode.toString(true)]
    if (typeof i !== 'undefined') {
      mode.similars.push(MODES[i])
    }

    mode.clone = Dict._cloneFn(mode, mode.clone)

    return mode
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

        scale.modes = scale.modes.map((m, i) => {
          let mode = modes[i]

          if (!mode) {
            mode      = m
            mode.name = `${scale.name} n°${i + 1}`
          } else {
            let name  = mode.name
            mode      = new Mode(undefined, str2items(Interval, mode.intervals))
            mode.name = name
          }

          mode.type     = type
          mode.similars = []
          mode.includes = []
          mode.included = []
          mode.scale    = Dict._scaleFn(scale)
          mode.clone    = Dict._cloneFn(mode, mode.clone)
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

      const id = mode1.toString()
      if (EQUALS[id]) {
        console.warn('Found equal modes:', EQUALS[id], mode1)
      }
      EQUALS[id] = i
      SIMILARS[mode1.toString(true)] = i

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

  static _scaleFn(scale) {
    return () => scale
  }

  static _cloneFn(mode, clone) {
    return () => {
      const similars = mode.similars
      const includes = mode.includes
      const included = mode.included

      mode = clone.bind(mode)()

      mode.similars = similars
      mode.includes = includes
      mode.included = included

      return mode
    }
  }
}

Dict.init()

export default Dict
