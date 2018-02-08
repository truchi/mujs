import { modulo } from './utils'
import Symbols from './Symbols'

const parseName = (str, symbols, symbolsFirst = true) => {
  const flat    = Symbols.flat
  const natural = Symbols.natural
  const sharp   = Symbols.sharp
  const flaRe   = new RegExp(flat   , 'g')
  const natRe   = new RegExp(natural, 'g')
  const shaRe   = new RegExp(sharp  , 'g')
  const namesRe = Object.values(symbols).join('|')
  const accsRe  = [flat, natural, sharp].join('|')
  const regexp  = symbolsFirst
    ? `^(${ namesRe })([${ accsRe }]*)$`
    : `^([${ accsRe }]*)(${ namesRe })$`

  if (!str.match(regexp)) throw `Invalid name: ${ str }`

  let name, accs, base
  if (symbolsFirst) [name, base, accs] = new RegExp(regexp).exec(str)
  else              [name, accs, base] = new RegExp(regexp).exec(str)

  const flats  = accs.replace(natRe, '').replace(shaRe, '').length
  const sharps = accs.replace(natRe, '').replace(flaRe, '').length

  accs  = (sharps - flats) % 12
  accs  = accs === -0 ? 0 : accs
  name  = ''.padStart(Math.abs(accs), accs > 0 ? sharp : flat)

  if (symbolsFirst) name = base + name
  else              name = name + base

  const semi = modulo(base2semi(base, symbols) + accs, 12)

  return { semi, name, base, accs }
}

const base2semi = (base, symbols) => {
  const key = Object.keys(symbols)
    .find(key => symbols[key] === base)

  return {
    C: 0,  1: 0
  , D: 2 , 2: 2
  , E: 4 , 3: 4
  , F: 5 , 4: 5
  , G: 7 , 5: 7
  , A: 9 , 6: 9
  , B: 11, 7: 11
  }[key]
}

/**
 * Eports
 */
export const parseIntervalName = (str) => {
  return parseName(str, Symbols.intervals, false)
}

export const parseNoteName = (str) => {
  return parseName(str, Symbols.notes)
}
