import Interval from './Interval'
import scalesYml from './dict/scales.yml'
import chordsYml from './dict/chords.yml'

let Scale, Mode
let DICT = {
  _map: {}
}

class Dict {
  static init() {
    let index = 0

    const add = ({ id, slug, name, scale, modes }, index) => {
      DICT._map[id  ] = index
      DICT._map[slug] = index
      DICT[index]     = typeof scale !== 'undefined'
        ? { id, name, slug, scale }
        : { id, name, slug, modes }
    }

    const make = (ctor, yml) => {
      const name  = yml.name
      const scale = new ctor(yml.intervals.split(' '))
      const id    = scale.id()
      const slug  = scale.slug()

      return { id, slug, name }
    }

    scalesYml
      .concat(chordsYml)
      .forEach(yml => {
        const scale = index++
        const modes = []

        yml.modes
          .forEach(yml => {
            if (yml === null) return modes.push(null)

            add(Object.assign({ scale }, make(Mode, yml)), index)
            modes.push(index++)
          })

        add(Object.assign({ modes }, make(Scale, yml)), scale)
      })
  }

  static get(arg = null) {
    if (arg === null)
      return DICT

    if (typeof arg === 'number')
      return Object.assign({}, DICT[arg])

    if (typeof arg === 'string')
      return Dict._search(arg)

    return null
  }

  static _search(str) {
    const index = DICT._map[str]

    if (typeof index === 'undefined') return null

    const data = Dict.get(index)

    if (data.hasOwnProperty('scale')) {
      data.scale = Dict.get(data.scale)
      delete data.scale.modes
    } else {
      data.modes = data.modes.map(i => {
        const mode = Dict.get(i)
        delete mode.scale

        return mode
      })
    }

    return data
  }

  static inject(scaleClass, modeClass) {
    Scale = scaleClass
    Mode  = modeClass
  }
}

export default Dict
