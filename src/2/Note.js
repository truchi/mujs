import Symbols    from './Symbols'
import ItemHelper from './ItemHelper'
import Item       from './Item'

class Note extends Item {
  constructor(str) {
    super(str)
  }

  parse(str) {
    return ItemHelper.parse(str, Symbols.notes)
  }

  fake(semi) {
    return Symbols.semi2note(semi)
  }
}

export default Note
