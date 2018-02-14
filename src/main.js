import { modulo }    from './2/utils'
import Symbols  from './2/Symbols'
import Note     from './2/Note'
import Interval from './2/Interval'
import Scale, { injectMode  } from './2/Scale'
import Mode , { injectScale } from './2/Mode'

injectMode(Mode)
injectScale(Scale)

window.modulo = modulo
window.Symbols = Symbols
window.Note = Note
window.Interval = Interval
window.Scale = Scale
window.Mode = Mode

// ♭|♮|♯

let C = new Note('C')
let D = new Note(2)
let E = new Note('E')
let F = new Note(5)
let G = new Note('G')
let A = new Note(9)
let B = new Note('B')
console.log(C, D, E, F, G, A, B)

let i1 = new Interval('1')
let ib2 = new Interval('♭2')
let i2 = new Interval('2')
let i3 = new Interval('3')
let i4 = new Interval('4')
let i5 = new Interval('5')
let i6 = new Interval('6')
let i7 = new Interval(11)
console.log(i1, ib2, i2, i3, i4, i5, i6, i7)
console.log(i2.add(A))
console.log(i2.sub(i3))

let scale = new Scale([i2, i2, ib2, i2, i2, i2, ib2])
console.log(scale)
console.log(scale.mode(-3))

let mode = new Mode([0, 2, 4, 5, 7, 9, 11])
console.log(mode)
console.log(mode.scale())
console.log(mode.scale().mode(2).notes(C))
