import Interval from './Interval'
import Dict     from './Dict'

// const prefixes = {
//   Scale : { id: 's:id:', slug: 's:slug:' }
// , Mode  : { id: 'm:id:', slug: 'm:slug:' }
// , regexp: /^(s|m):(id|slug):(.*)$/i
// , parser: (str) => {
//     const exec = prefixes.regexp.exec(str)
//     if (!exec) throw `Unable to parse ${ str } (${ prefixes.regexp })`
//
//     const [all, klass, type, list] = exec
//     const constructor = klass === 's'  ? List.Scale  : List.Mode
//     const caster      = type  === 'id' ? String : Number
//
//     return { constructor, caster, list }
//   }
// }

class List {
  constructor(intvs = [0]) {
    // TODO separate returns otherwise wrong intv name...
    this.intvs = intvs.map(intv =>
         intv.constructor.name === 'Interval'
      || intv.constructor.name === 'Note'
        ? new Interval(intv.semi)
        : new Interval(intv)
    )

    this.clean()

    // this._same    = Dict.get(this.id())
    // this._similar = Dict.get(this.slug())
  }

  // id(withPrefix = true) {
  //   const prefix = withPrefix
  //     ? prefixes[this.constructor.name].id
  //     : ''
  //
  //   return prefix + this.intvs.map(intv => intv.name).join(',')
  // }
  //
  // slug(withPrefix = true) {
  //   const prefix = withPrefix
  //     ? prefixes[this.constructor.name].slug
  //     : ''
  //
  //   return prefix + this.intvs.map(intv => intv.semi).join(',')
  // }

  // static from(str) {
  //   const { constructor, caster, list } = prefixes.parser(str)
  //   const intvs = list.split(',')
  //     .map(intv => new Interval(new caster(intv)))
  //
  //   return new constructor(intvs)
  // }
}

List.Scale = null
List.Mode  = null

export default List
export const inject = (scaleClass, modeClass) => {
  List.Scale = scaleClass
  List.Mode  = modeClass
}
