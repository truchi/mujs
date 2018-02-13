import { modulo } from './utils'
import Symbols    from './Symbols'

class ItemHelper {
  static parse(str, symbols, symbolsFirst = true) {
    const flat    = Symbols.flat
    const natural = Symbols.natural
    const sharp   = Symbols.sharp

    const flaRe = new RegExp(flat   , 'g')
    const natRe = new RegExp(natural, 'g')
    const shaRe = new RegExp(sharp  , 'g')

    const namesRe = symbols.join('|')
    const accsRe  = [flat, natural, sharp].join('|')
    const regexp  = symbolsFirst
      ? `^(${ namesRe })([${ accsRe }]*)$`
      : `^([${ accsRe }]*)(${ namesRe })$`

    // Throw if not parsable
    if (!str.match(regexp)) throw `Invalid name: ${ str }`

    // Get parts
    let name, accs, base
    if (symbolsFirst) [name, base, accs] = new RegExp(regexp).exec(str)
    else              [name, accs, base] = new RegExp(regexp).exec(str)

    // Count accidentals
    const flats  = accs.replace(natRe, '').replace(shaRe, '').length
    const sharps = accs.replace(natRe, '').replace(flaRe, '').length

    accs  = (sharps - flats) % Symbols.N
    accs  = accs === -0 ? 0 : accs

    // Simplify name's accidentals
    name = ''.padStart(Math.abs(accs), accs > 0 ? sharp : flat)
    name = symbolsFirst
      ? base + name
      : name + base

    // Get corresponding semi
    const semi = modulo(
      Symbols.base2semi(base) + accs
    , Symbols.N
    )

    return { semi, name, base, accs }
  }
}

export default ItemHelper
