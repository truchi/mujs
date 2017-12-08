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
    mode = mode.clone()

    const i = EQUALS[mode.toString()]
    if (typeof i !== 'undefined') {
      return MODES[i]

    } else {
      const j = SIMILARS[mode.toString(true)]
      if (typeof j !== 'undefined') {
        const similar = MODES[j]
        const intvs   = mode.intvs

        mode       = similar.clone()
        mode.name  = `~ ${similar.name}`
        mode.intvs = intvs

        return mode

      } else {
        return Dict._safen(mode)
      }
    }
  }

  static _safen(mode) {
    mode.name     = ''
    mode.type     = mode.intvs.length > 4 ? 'mode' : 'chord'
    mode.includes = MODES.filter(_mode =>  mode.doesInclude(_mode))
    mode.included = MODES.filter(_mode => _mode.doesInclude( mode))

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
          mode.includes = []
          mode.included = []

          mode.scale = Dict._scale(scale, i)
          mode.clone = Dict._modeClone(mode, mode.clone)
          MODES.push(mode)

          return mode
        })

        scale.clone = Dict._scaleClone(scale, scale.clone)

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

  static _scale(scale, i) {
    return () => {
      const modes    = scale.modes.map(mode => mode)

      let newScale   = scale.clone()
      newScale.modes = modes.slice(i).concat(modes.slice(0, i))

      return newScale
    }
  }

  static _modeClone(mode, originalClone) {
    return () => {
      const name     = mode.name
      const type     = mode.type
      const includes = mode.includes
      const included = mode.included
      const scale    = mode.scale
      const clone    = mode.clone

      let newMode      = originalClone.bind(mode)()
      newMode.name     = name
      newMode.type     = type
      newMode.includes = includes
      newMode.included = included
      newMode.scale    = scale
      newMode.clone    = clone

      return newMode
    }
  }

  static _scaleClone(scale, originalClone) {
    return () => {
      const name  = scale.name
      const type  = scale.type
      const modes = scale.modes
      const clone = scale.clone

      let newScale   = originalClone.bind(scale)()
      newScale.name  = name
      newScale.type  = type
      newScale.modes = modes
      newScale.clone = clone

      return newScale
    }
  }
}

Dict.init()

export default Dict
