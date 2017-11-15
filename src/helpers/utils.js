import { ACCS, INTVS, NOTES } from './symbols'

export const mod = (i, j) => ((i % j) + j) % j

export const factors = (num) => {
  let factors = []

  for (let i = 1; i <= Math.abs(num/2); ++i) {
    if (num % i === 0) factors.push(i)
  }

  factors.push(num)
  return factors
}

export const accs2semi = (accs) => {
  accs = accs.replace(ACCS.natural, '')
  let i = accs.length
    - 2 * (accs.match(new RegExp(`${ACCS.flat}`, 'g')) || []).length

  return i
}

const zip = (keys, vals) => {
  let ret = {}

  for (let i in keys)
    ret[keys[i]] = vals[i]

  return ret
}

export const INTV2SEMI = zip(INTVS, [0, 2, 4, 5, 7, 9, 11])
export const NOTE2SEMI = zip(NOTES, [0, 2, 4, 5, 7, 9, 11])

export const SEMI2INTV = [
  `${INTVS[0]}`
, `${ACCS.flat}${INTVS[1]}`
,             `${INTVS[1]}`
, `${ACCS.flat}${INTVS[2]}`
,             `${INTVS[2]}`
,             `${INTVS[3]}`
, `${ACCS.flat}${INTVS[4]}`
,             `${INTVS[4]}`
, `${ACCS.flat}${INTVS[5]}`
,             `${INTVS[5]}`
, `${ACCS.flat}${INTVS[6]}`
,             `${INTVS[6]}`
]

export const SEMI2NOTE = [
  `${NOTES[0]}`
, `${NOTES[0]}${ACCS.sharp}`
, `${NOTES[1]}`
, `${NOTES[1]}${ACCS.sharp}`
, `${NOTES[2]}`
, `${NOTES[3]}`
, `${NOTES[3]}${ACCS.sharp}`
, `${NOTES[4]}`
, `${NOTES[4]}${ACCS.sharp}`
, `${NOTES[5]}`
, `${NOTES[5]}${ACCS.sharp}`
, `${NOTES[6]}`
]

export const semi2intv = (int) => SEMI2INTV[mod(int, 12)]
export const semi2note = (int) => SEMI2NOTE[mod(int, 12)]
