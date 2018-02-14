import { modulo }    from './2/utils'
import Symbols  from './2/Symbols'
import Note     from './2/Note'
import Interval from './2/Interval'
import Scale, { injectMode  } from './2/Scale'
import Mode , { injectScale } from './2/Mode'

injectMode(Mode)
injectScale(Scale)

window.modulo   = modulo
window.Symbols  = Symbols
window.Note     = Note
window.Interval = Interval
window.Scale    = Scale
window.Mode     = Mode

// ♭|♮|♯

let C = new Note('C')
let D = new Note(2)
let E = new Note('E')
let F = new Note(5)
let Gb = new Note('G♭')
let G = new Note('G')
let A = new Note(9)
let B = new Note('B')
console.log('-----')
console.log('notes')
console.log('-----')
console.log(C, D, E, F, G, A, B)

let i1 = new Interval('1')
let ib2 = new Interval('♭2')
let i2 = new Interval('2')
let i3 = new Interval('3')
let i4 = new Interval('4')
let is4 = new Interval('♯4')
let ib5 = new Interval('♭5')
let i5 = new Interval('5')
let i6 = new Interval('6')
let i7 = new Interval(11)
console.log('-----')
console.log('intvs')
console.log('-----')
console.log(i1, ib2, i2, i3, i4, i5, i6, i7)
console.log(i2.add(A))
console.log(i2.sub(i3))
console.log('♯4.equals(♭5)', is4.equals(ib5));
console.log('♯4.equivs(♭5)', is4.equivs(ib5));
console.log('♯4.equivs(G♭)', is4.equivs(Gb));

let scale = new Scale([i2, i2, ib2, i2, i2, i2, ib2])
console.log('-----')
console.log('scale')
console.log('-----')
console.log(scale)
console.log(scale.mode(-3))
let s1 = new Scale([2, 1, 2, 1, 2, 1, 2, 1])
let s2 = new Scale([1, 2, 1, 2, 1, 2, 1, 2])
console.log('Scale([2, 1, 2, 1, 2, 1, 2, 1]).equals(Scale([1, 2, 1, 2, 1, 2, 1, 2]))', s1.equals(s2));
console.log('Scale([2, 1, 2, 1, 2, 1, 2, 1]).equivs(Scale([1, 2, 1, 2, 1, 2, 1, 2]))', s1.equivs(s2));
console.log('scale.mode(2).scale().equals(scale.mode(2).scale())', scale.mode(2).scale().equals(scale.mode(2).scale()));
console.log('scale.mode(2).scale().equals(scale.mode(3).scale())', scale.mode(2).scale().equals(scale.mode(3).scale()));
console.log('scale.mode(2).scale().equivs(scale.mode(3).scale())', scale.mode(2).scale().equivs(scale.mode(3).scale()));

let mode = new Mode([2, 5, 4, 7, 9, 11])
console.log('----')
console.log('mode')
console.log('----')
console.log(mode)
console.log(mode.scale())
console.log(mode.scale().mode(2).notes(C))
let m1 = new Mode(['1', '2', '3'])
let m2 = new Mode(['1', '2', '♭4'])
console.log('Mode([1, 2, 3]).equals(Mode([1, 2, ♭4]))', m1.equals(m2));
console.log('Mode([1, 2, 3]).equivs(Mode([1, 2, ♭4]))', m1.equivs(m2));
