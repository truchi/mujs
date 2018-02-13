import { modulo } from './utils'

class Symbols {
  static base2semi(str) {
    return Symbols.semis[
      (isNaN(parseInt(str))
        ? Symbols.notes
        : Symbols.intervals)
          .indexOf(str)
    ]
  }

  static semi2note(semi) {
    semi = modulo(semi, Symbols.N)

    return [
      `${Symbols.notes[0]}`                 // C
    , `${Symbols.notes[0]}${Symbols.sharp}` // C♯
    , `${Symbols.notes[1]}`                 // D
    , `${Symbols.notes[1]}${Symbols.sharp}` // D♯
    , `${Symbols.notes[2]}`                 // E
    , `${Symbols.notes[3]}`                 // F
    , `${Symbols.notes[3]}${Symbols.sharp}` // F♯
    , `${Symbols.notes[4]}`                 // G
    , `${Symbols.notes[4]}${Symbols.sharp}` // G♯
    , `${Symbols.notes[5]}`                 // A
    , `${Symbols.notes[5]}${Symbols.sharp}` // A♯
    , `${Symbols.notes[6]}`                 // B
    ][semi]
  }

  static semi2nterval(semi) {
    semi = modulo(semi, Symbols.N)

    return [
                     `${Symbols.intervals[0]}` //   1
    , `${Symbols.flat}${Symbols.intervals[1]}` // ♭2
    ,                `${Symbols.intervals[1]}` //   2
    , `${Symbols.flat}${Symbols.intervals[2]}` // ♭3
    ,                `${Symbols.intervals[2]}` //   3
    ,                `${Symbols.intervals[3]}` //   4
    , `${Symbols.flat}${Symbols.intervals[4]}` // ♭5
    ,                `${Symbols.intervals[4]}` //   5
    , `${Symbols.flat}${Symbols.intervals[5]}` // ♭6
    ,                `${Symbols.intervals[5]}` //   6
    , `${Symbols.flat}${Symbols.intervals[6]}` // ♭7
    ,                `${Symbols.intervals[6]}` //   7
    ][semi]
  }
}

Symbols.N = 12

Symbols.flat    = '♭'
Symbols.natural = '♮'
Symbols.sharp   = '♯'

Symbols.semis     = [   0,   2,   4,   5,   7,   9,  11 ]
Symbols.notes     = [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ]
Symbols.intervals = [ '1', '2', '3', '4', '5', '6', '7' ]

export default Symbols
