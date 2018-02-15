import Interval from './Interval'

const prefixes = {
  Scale : { id: 's:id:', slug: 's:slug:' }
, Mode  : { id: 'm:id:', slug: 'm:slug:' }
, regexp: /^(s|m):(id|slug):(.*)$/i
, parser: (str) => {
    const exec = prefixes.regexp.exec(str)
    if (!exec) throw `Unable to parse ${ str } (${ prefixes.regexp })`

    const [all, klass, type, list] = exec
    const constructor = klass === 's'  ? Scale  : Mode
    const caster      = type  === 'id' ? String : Number

    return { constructor, caster, list }
  }
}

let Scale, Mode

class List {
  constructor(intvs = [0]) {
    this.intvs = intvs.map(intv =>
         intv.constructor.name === 'Interval'
      || intv.constructor.name === 'Note'
        ? new Interval(intv.semi)
        : new Interval(intv)
    )

    this.clean()
  }

  id() {
    const prefix = prefixes[this.constructor.name].id

    return prefix + this.intvs.map(intv => intv.name).join(',')
  }

  slug() {
    const prefix = prefixes[this.constructor.name].slug

    return prefix + this.intvs.map(intv => intv.semi).join(',')
  }

  static from(str) {
    const { constructor, caster, list } = prefixes.parser(str)
    const intvs = list.split(',')
      .map(intv => new Interval(new caster(intv)))

    return new constructor(intvs)
  }

  static inject(scaleClass, modeClass) {
    Scale = scaleClass
    Mode  = modeClass
  }
}

export default List
