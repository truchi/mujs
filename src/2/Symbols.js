class Symbols {
}

Symbols.flat    = '♭'
Symbols.natural = '♮'
Symbols.sharp   = '♯'
Symbols.notes = {
  C: 'C'
, D: 'D'
, E: 'E'
, F: 'F'
, G: 'G'
, A: 'A'
, B: 'B'
}
Symbols.intervals = {
  1: '1'
, 2: '2'
, 3: '3'
, 4: '4'
, 5: '5'
, 6: '6'
, 7: '7'
}
Symbols.semi2note = [
  `${Symbols.notes.C}`
, `${Symbols.notes.C}${Symbols.sharp}`
, `${Symbols.notes.D}`
, `${Symbols.notes.D}${Symbols.sharp}`
, `${Symbols.notes.E}`
, `${Symbols.notes.F}`
, `${Symbols.notes.F}${Symbols.sharp}`
, `${Symbols.notes.G}`
, `${Symbols.notes.G}${Symbols.sharp}`
, `${Symbols.notes.A}`
, `${Symbols.notes.A}${Symbols.sharp}`
, `${Symbols.notes.B}`
]
Symbols.semi2intv = [
                 `${Symbols.intervals[1]}`
, `${Symbols.flat}${Symbols.intervals[2]}`
,                `${Symbols.intervals[2]}`
, `${Symbols.flat}${Symbols.intervals[3]}`
,                `${Symbols.intervals[3]}`
,                `${Symbols.intervals[4]}`
, `${Symbols.flat}${Symbols.intervals[5]}`
,                `${Symbols.intervals[5]}`
, `${Symbols.flat}${Symbols.intervals[6]}`
,                `${Symbols.intervals[6]}`
, `${Symbols.flat}${Symbols.intervals[7]}`
,                `${Symbols.intervals[7]}`
]
Symbols.semis = {
  C: 0,  1: 0
, D: 2 , 2: 2
, E: 4 , 3: 4
, F: 5 , 4: 5
, G: 7 , 5: 7
, A: 9 , 6: 9
, B: 11, 7: 11
}

export default Symbols
