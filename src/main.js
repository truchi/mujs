import Dict from './Dict'
import Mode from './Mode'
import Interval from './Interval'


let mode2 = new Mode(undefined, '1 2 3 4 5 6 ♯♯6'.split(' ').map(i => new Interval(i)))
let mode  = new Mode()
console.log(Dict.get(mode));
console.log(Dict.get(mode2));
console.log(Dict.similar(mode));
console.log(Dict.similar(mode2));
