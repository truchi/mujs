import Note from './Note'
import Interval from './Interval'
import Mode from './Mode'
import Scale from './Scale'
import scales from './dict/scales.yml'
import chords from './dict/chords.yml'
console.log(scales)
console.log(chords)

let mode = new Mode()
console.log(mode.scale())

let scale = new Scale()
console.log(scale)
