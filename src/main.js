import Symbols from './2/Symbols'
import Note from './2/Note'
import Interval from './2/Interval'
import Mode from './2/Mode'
import Scale from './2/Scale'


// ♭|♮|♯

let C = new Note('C')
let D = new Note('D')
let E = new Note('E')
let F = new Note('F')
let G = new Note('G')
let A = new Note('A')
let B = new Note('B')
console.log(C, D, E, F, G, A, B);

let i1 = new Interval('1')
let i2 = new Interval('2')
let i3 = new Interval('3')
let i4 = new Interval('4')
let i5 = new Interval('5')
let i6 = new Interval('6')
let i7 = new Interval('7')
console.log(i1, i2, i3, i4, i5, i6, i7);

let mode = new Mode([i1, i2, i3, i4, i5, i6, i7])
console.log(mode);
let notes = mode.notes(F)
console.log(notes);

let scale = new Scale([2, 2, 1, 2, 2, 2, 1])
console.log(scale);
let m = scale.mode(1)
