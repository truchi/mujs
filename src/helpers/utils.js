import { ACCS } from './symbols'

export const mod = (i, j) => ((i % j) + j) % j

export const accs2int = (str) => {
  str = str.replace(ACCS.natural, '')
  let acc = str.length
    - 2 * (str.match(new RegExp(`${ACCS.flat}`, 'g')) || []).length

  return acc
}

export const NOTE2INT = { 'C': 0, 'D': 2, 'E': 4,
  'F': 5, 'G': 7, 'A': 9, 'B': 11 }

export const INTV2INT = { '1': 0, '2': 2, '3': 4,
  '4': 5, '5': 7, '6': 9, '7': 11 }
