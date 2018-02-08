import Interval from './Interval'
import Scale from './Scale'
import Mode from './Mode'
import scalesYml from './dict/scales.yml'
import chordsYml from './dict/chords.yml'
console.log(scalesYml.concat(chordsYml));

let SCALES = {
  _name2id     : {}
, _intervals2id: {}
}
let MODES = {
  _name2id     : {}
, _intervals2id: {}
}

class Dict {
  static init() {
    let scaleId = 0
    let  modeId = 0

    scalesYml.concat(chordsYml).forEach(scale => {
      let name      = scale.name
      let intervals = scale.intervals
      let modes     = scale.modes
      let modeIds   = []
      let semis     = intervals
        .split(' ')
        .map(i => new Interval(i))
        .map(i => i.semi)

      modes.forEach(mode => {
        if (mode === null) return

        let name      = mode.name
        let intervals = mode.intervals
        let semis     = intervals
          .split(' ')
          .map(i => new Interval(i))
          .map(i => i.semi)

        MODES[modeId] = { name, intervals, scaleId, semis }
        MODES.     _name2id[name     ] = modeId
        MODES._intervals2id[intervals] = modeId
        modeIds.push(modeId)

        ++modeId
      })

      SCALES[scaleId] = { name , intervals, modeIds, semis }
      SCALES.     _name2id[name     ] = scaleId
      SCALES._intervals2id[intervals] = scaleId

      ++scaleId
    })
  }
}

Dict.init()

export const scales = SCALES
export const modes  = MODES
export default Dict
