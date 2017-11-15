/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ACCS = {
  flat   : '♭'
, natural: '♮'
, sharp  : '♯'
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ACCS;


const INTVS = ['1', '2', '3', '4', '5', '6', '7']
/* harmony export (immutable) */ __webpack_exports__["b"] = INTVS;

const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
/* harmony export (immutable) */ __webpack_exports__["c"] = NOTES;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);


const mod = (i, j) => ((i % j) + j) % j
/* harmony export (immutable) */ __webpack_exports__["h"] = mod;


const factors = (num) => {
  let factors = []

  for (let i = 1; i <= Math.abs(num/2); ++i) {
    if (num % i === 0) factors.push(i)
  }

  factors.push(num)
  return factors
}
/* harmony export (immutable) */ __webpack_exports__["g"] = factors;


const accs2semi = (accs) => {
  accs = accs.replace(__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].natural, '')
  let i = accs.length
    - 2 * (accs.match(new RegExp(`${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].flat}`, 'g')) || []).length

  return i
}
/* harmony export (immutable) */ __webpack_exports__["d"] = accs2semi;


const arr2items = (Ctr, arr) => arr.map(e => new Ctr(e))
/* harmony export (immutable) */ __webpack_exports__["e"] = arr2items;

const str2items = (Ctr, str) => arr2items(Ctr, str.split(' '))
/* harmony export (immutable) */ __webpack_exports__["k"] = str2items;


const zip = (keys, vals) => {
  let ret = {}

  for (let i in keys)
    ret[keys[i]] = vals[i]

  return ret
}

const INTV2SEMI = zip(__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */], [0, 2, 4, 5, 7, 9, 11])
/* harmony export (immutable) */ __webpack_exports__["a"] = INTV2SEMI;

const NOTE2SEMI = zip(__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */], [0, 2, 4, 5, 7, 9, 11])
/* harmony export (immutable) */ __webpack_exports__["b"] = NOTE2SEMI;


const SEMI2INTV = [
              `${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][0]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].flat}${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][1]}`
,             `${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][1]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].flat}${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][2]}`
,             `${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][2]}`
,             `${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][3]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].flat}${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][4]}`
,             `${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][4]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].flat}${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][5]}`
,             `${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][5]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].flat}${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][6]}`
,             `${__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][6]}`
]
/* harmony export (immutable) */ __webpack_exports__["c"] = SEMI2INTV;


const SEMI2NOTE = [
  `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][0]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][0]}${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].sharp}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][1]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][1]}${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].sharp}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][2]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][3]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][3]}${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].sharp}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][4]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][4]}${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].sharp}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][5]}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][5]}${__WEBPACK_IMPORTED_MODULE_0__symbols__["a" /* ACCS */].sharp}`
, `${__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][6]}`
]
/* unused harmony export SEMI2NOTE */


const semi2intv = (int) => SEMI2INTV[mod(int, 12)]
/* harmony export (immutable) */ __webpack_exports__["i"] = semi2intv;

const semi2note = (int) => SEMI2NOTE[mod(int, 12)]
/* harmony export (immutable) */ __webpack_exports__["j"] = semi2note;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbols__ = __webpack_require__(0);



class ItemHelper {
  constructor(Ctr, names, name2semi, semi2name) {
    this.Ctr       = Ctr
    this.names     = names
    this.name2semi = name2semi
    this.semi2name = semi2name
  }

  parse(str) {
    let name
    let accs
    let base

    if (this.Ctr.name === 'Interval') {
      [name, accs, base] = new RegExp(
        `([${__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* ACCS */].flat}|${__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* ACCS */].natural}|${__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* ACCS */].sharp}]*)(\\d*)`
      ).exec(str)

      base = '' + (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["h" /* mod */])(+base - 1, 7) + 1)
    } else if (this.Ctr.name === 'Note') {
      [name, base, accs] = new RegExp(
        `(${this.names.join('|')})([${__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* ACCS */].flat}|${__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* ACCS */].natural}|${__WEBPACK_IMPORTED_MODULE_1__symbols__["a" /* ACCS */].sharp}]*)`
      ).exec(str)
    }

    accs     = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* accs2semi */])(accs)
    let semi = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["h" /* mod */])(this.name2semi[base] + accs, 12)

    return { name, base, accs, semi }
  }

  fromSemi(semi) {
    let intv = new this.Ctr(this.semi2name(semi))
    let name = String(intv.name)
    let base = String(intv.base)
    let accs = Number(intv.accs)
        semi = Number(intv.semi)

    return { name, base, accs, semi }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ItemHelper);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_Item__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_utils__ = __webpack_require__(1);





class Note extends __WEBPACK_IMPORTED_MODULE_0__Item__["a" /* default */] {
  constructor(arg = __WEBPACK_IMPORTED_MODULE_2__helpers_symbols__["c" /* NOTES */][0]) {
    super(arg)
  }
}

Note.helper = new __WEBPACK_IMPORTED_MODULE_1__helpers_Item__["a" /* default */](Note, __WEBPACK_IMPORTED_MODULE_2__helpers_symbols__["c" /* NOTES */], __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["b" /* NOTE2SEMI */], __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["j" /* semi2note */])

/* harmony default export */ __webpack_exports__["a"] = (Note);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Item {
  constructor(arg) {
    let name
    let base
    let accs
    let semi

    if (typeof arg === 'string') {
      ({ name, base, accs, semi } = this.constructor.helper.parse(arg))
    } else if (typeof arg === 'number') {
      ({ name, base, accs, semi } = this.constructor.helper.fromSemi(arg))
    } else {
      console.error(
        `${this.constructor.name}@constructor: `
      + `arg must be string or number, got:`
      , arg
      )
      throw ''
    }

    this.name = name
    this.base = base
    this.accs = accs
    this.semi = semi
  }

  test() {
    return new this.constructor()
  }

  add(item) {
    return new this.constructor(this.semi + item.semi)
  }

  sub(item) {
    return new this.constructor(this.semi - item.semi)
  }

  clone() {
    return new this.constructor(this.name)
  }

  static clone(items) {
    return items.map(item => item.clone())
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Item);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_Item__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_utils__ = __webpack_require__(1);





class Interval extends __WEBPACK_IMPORTED_MODULE_0__Item__["a" /* default */] {
  constructor(arg = __WEBPACK_IMPORTED_MODULE_2__helpers_symbols__["b" /* INTVS */][0]) {
    super(arg)
  }
}

Interval.helper = new __WEBPACK_IMPORTED_MODULE_1__helpers_Item__["a" /* default */](Interval, __WEBPACK_IMPORTED_MODULE_2__helpers_symbols__["b" /* INTVS */], __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["a" /* INTV2SEMI */], __WEBPACK_IMPORTED_MODULE_3__helpers_utils__["i" /* semi2intv */])

/* harmony default export */ __webpack_exports__["a"] = (Interval);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__ = __webpack_require__(9);


class Scale {
  constructor(root = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["b" /* DEFAULT_ROOT */], intvs = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["a" /* DEFAULT_INTVS */]) {
    this.root  = root
    this.intvs = intvs
    this.modes = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["c" /* default */].modes(this.root, this.intvs)
    this.notes = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["c" /* default */].notes(this.modes)
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Scale);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Mode__ = __webpack_require__(8);


class Mode {
  constructor(root = __WEBPACK_IMPORTED_MODULE_0__helpers_Mode__["b" /* DEFAULT_ROOT */], intvs = __WEBPACK_IMPORTED_MODULE_0__helpers_Mode__["a" /* DEFAULT_INTVS */]) {
    this.root  = root
    this.intvs = intvs
    this.notes = __WEBPACK_IMPORTED_MODULE_0__helpers_Mode__["c" /* default */].notes(this.root, this.intvs)
  }

  scale() {
    return __WEBPACK_IMPORTED_MODULE_0__helpers_Mode__["c" /* default */].scale(this.root, this.intvs)
  }

  doesInclude(mode) {
    if (this.intvs.length <= mode.intvs.length) return false

    let semis = this.intvs.map(intv => intv.semi)

    for (let intv of mode.intvs) {
      if(!semis.includes(intv.semi)) return false
    }

    return true
  }

  toString(semi = false) {
    return this.intvs
      .map(intv => semi ? intv.semi : intv.name)
      .join(' ')
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Mode);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Note__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Scale__ = __webpack_require__(6);






class ModeHelper {
  static notes(root, intvs) {
    return intvs.map(intv => root.add(intv))
  }

  static scale(root, intvs) {
    root      = root.clone()
    intvs     = __WEBPACK_IMPORTED_MODULE_3__Interval__["a" /* default */].clone(intvs)
    let prev  = new __WEBPACK_IMPORTED_MODULE_3__Interval__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][0])

    intvs.push(prev)
    intvs = intvs.map(intv => {
      const sub = intv.sub(prev)
      prev = intv

      return sub
    })

    intvs.shift()
    return new __WEBPACK_IMPORTED_MODULE_4__Scale__["a" /* default */](root, intvs)
  }
}

const DEFAULT_ROOT  = new __WEBPACK_IMPORTED_MODULE_2__Note__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][0])
/* harmony export (immutable) */ __webpack_exports__["b"] = DEFAULT_ROOT;

const DEFAULT_INTVS = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* arr2items */])(__WEBPACK_IMPORTED_MODULE_3__Interval__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */])
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_INTVS;


/* harmony default export */ __webpack_exports__["c"] = (ModeHelper);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Note__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Mode__ = __webpack_require__(7);






class ScaleHelper {
  static modes(root, intvs) {
    root           = root.clone()
    intvs          = __WEBPACK_IMPORTED_MODULE_3__Interval__["a" /* default */].clone(intvs)
    const symmetry = ScaleHelper.symmetry(intvs)
    let modes      = [ScaleHelper.mode(root, intvs)]

    for (let i = 1; i < symmetry; ++i) {
      intvs.push(intvs.shift())
      modes.push(
        ScaleHelper.mode(
          root.add(modes[0].notes[i])
        , intvs)
      )
    }

    return modes
  }

  static mode(root, intvs) {
    root     = root.clone()
    intvs    = __WEBPACK_IMPORTED_MODULE_3__Interval__["a" /* default */].clone(intvs)
    let prev = new __WEBPACK_IMPORTED_MODULE_3__Interval__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */][0])

    intvs.unshift(prev)
    intvs = intvs.map(intv => {
      const add = intv.add(prev)
      prev = add

      return add
    })

    intvs.pop()
    return new __WEBPACK_IMPORTED_MODULE_4__Mode__["a" /* default */](root, intvs)
  }

  static notes(modes) {
    return __WEBPACK_IMPORTED_MODULE_2__Note__["a" /* default */].clone(modes[0].notes)
  }

  static symmetry(intvs) {
    const l     = intvs.length
    const semis = intvs.map(intv => intv.semi)
    const fctrs = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* factors */])(l)

    for (let factor of fctrs) {
      const pattern = semis.slice(0, factor)
      const test    = Array.prototype
        .concat.apply([], Array(l / factor).fill(pattern))

      if (semis.join(' ') === test.join(' '))
        return factor
    }
  }
}

const DEFAULT_ROOT  = new __WEBPACK_IMPORTED_MODULE_2__Note__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][0])
/* harmony export (immutable) */ __webpack_exports__["b"] = DEFAULT_ROOT;

const DEFAULT_INTVS = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* arr2items */])(__WEBPACK_IMPORTED_MODULE_3__Interval__["a" /* default */], [
    __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* SEMI2INTV */][2]
  , __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* SEMI2INTV */][2]
  , __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* SEMI2INTV */][1]
  , __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* SEMI2INTV */][2]
  , __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* SEMI2INTV */][2]
  , __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* SEMI2INTV */][2]
  , __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* SEMI2INTV */][1]
  ]
)
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_INTVS;


/* harmony default export */ __webpack_exports__["c"] = (ScaleHelper);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = [{"name":"Suspended","intervals":"2 4 4","modes":[{"name":"sus2","intervals":"1 2 5"},{"name":"sus4","intervals":"1 4 5"}]},{"name":"°","intervals":"♭3 ♭3 ♯4","modes":[{"name":"°","intervals":"1 ♭3 ♭5"}]},{"name":"-","intervals":"♭3 3 4","modes":[{"name":"-","intervals":"1 ♭3 5"}]},{"name":"Δ","intervals":"3 ♭3 4","modes":[{"name":"Δ","intervals":"1 3 5"}]},{"name":"+","intervals":"3 3 ♭4","modes":[{"name":"+","intervals":"1 3 ♯5"}]},{"name":"°7","intervals":"♭3 ♭3 ♭3 ♭3","modes":[{"name":"°7","intervals":"1 ♭3 ♭5 ♭♭7"}]},{"name":"ø","intervals":"♭3 ♭3 3 2","modes":[{"name":"ø","intervals":"1 ♭3 ♭5 ♭7"},{"name":"-6","intervals":"1 ♭3 5 6"}]},{"name":"-7","intervals":"♭3 3 ♭3 2","modes":[{"name":"-7","intervals":"1 ♭3 5 ♭7"},{"name":"Δ6","intervals":"1 3 5 6"}]},{"name":"-Δ7","intervals":"♭3 3 3 ♭2","modes":[{"name":"-Δ7","intervals":"1 ♭3 5 7"}]},{"name":"7♭5","intervals":"3 2 3 2","modes":[{"name":"7♭5","intervals":"1 3 ♭5 ♭7"}]},{"name":"7","intervals":"3 ♭3 ♭3 2","modes":[{"name":"7","intervals":"1 3 5 ♭7"}]},{"name":"7♯5","intervals":"3 3 2 2","modes":[{"name":"7♯5","intervals":"1 3 ♯5 ♭7"}]},{"name":"Δ7","intervals":"3 ♭3 3 ♭2","modes":[{"name":"Δ7","intervals":"1 3 5 7"}]}]

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = [{"name":"Pentatonic (Diatonic)","intervals":"2 2 ♭3 2 ♭3","modes":[{"name":"Pentatonic Major","intervals":"1 2 3 5 6"},{"name":"Pentatonic n°2 / Dorian(no3,13)","intervals":"1 2 4 5 ♭7"},{"name":"Pentatonic n°3 / Phrygian(no5,9)","intervals":"1 ♭3 4 ♭6 ♭7"},{"name":"Pentatonic n°4 / Mixolydian(no3,7)","intervals":"1 2 4 5 6"},{"name":"Pentatonic Minor","intervals":"1 ♭3 4 5 ♭7"}]},{"name":"Whole Tone","intervals":"2 2 2 2 2 2","modes":[{"name":"Whole Tone (7)","intervals":"1 2 3 ♭5 ♯5 ♭7"}]},{"name":"Diatonic","intervals":"2 2 ♭2 2 2 2 ♭2","modes":[{"name":"Ionian","intervals":"1 2 3 4 5 6 7"},{"name":"Dorian","intervals":"1 2 ♭3 4 5 6 ♭7"},{"name":"Phrygian","intervals":"1 ♭2 ♭3 4 5 ♭6 ♭7"},{"name":"Lydian","intervals":"1 2 3 ♯4 5 6 7"},{"name":"Mixolydian","intervals":"1 2 3 4 5 6 ♭7"},{"name":"Aeolian","intervals":"1 2 ♭3 4 5 ♭6 ♭7"},{"name":"Locrian","intervals":"1 ♭2 ♭3 4 ♭5 ♭6 ♭7"}]},{"name":"Double Harmonic Major","intervals":"2 ♭3 2 2 ♭2 ♭3 ♭2","modes":[{"name":"Double Harmonic Major / Ionian ♭9 ♭13","intervals":"1 ♭2 3 4 5 ♭6 7"},{"name":"Lydian ♯9 ♯13","intervals":"1 ♯2 3 ♯4 5 ♯6 7"},{"name":"Double Harmonic Major n°3","intervals":"1 ♭2 ♯2 3 5 ♭6 ♭♭7"},{"name":"Hungarian Minor","intervals":"1 ♭2 3 ♯4 5 ♭6 7"},{"name":"Oriental / Mixolydian ♭5 ♭9","intervals":"1 ♭2 3 4 ♭5 6 ♭7"},{"name":"Ionian ♯5 ♯9","intervals":"1 ♯2 3 4 ♯5 6 7"},{"name":"Locrian ♭♭3 ♭♭7","intervals":"1 ♭2 ♭♭3 4 ♭5 ♭6 ♭♭7"}]},{"name":"Harmonic Major","intervals":"2 2 ♭2 2 ♭2 ♭3 ♭2","modes":[{"name":"Harmonic Major / Ionian ♭13","intervals":"1 2 3 4 5 ♭6 7"},{"name":"Dorian ♭5","intervals":"1 2 ♭3 4 ♭5 6 ♭7"},{"name":"Harmonic Major n°3","intervals":"1 ♭2 ♯2 3 5 ♭6 ♭7"},{"name":"Lydian ♭3","intervals":"1 2 ♭3 ♯4 5 6 7"},{"name":"Mixolydian ♭9","intervals":"1 ♭2 3 4 5 6 ♭7"},{"name":"Lydian ♯5 ♯9","intervals":"1 ♯2 3 ♯4 ♯5 6 7"},{"name":"Locrian ♭♭7","intervals":"1 ♭2 ♭3 4 ♭5 ♭6 ♭♭7"}]},{"name":"Harmonic Minor","intervals":"2 ♭2 2 2 ♭2 ♭3 ♭2","modes":[{"name":"Harmonic Minor / Aeolian ♮7","intervals":"1 2 ♭3 4 5 ♭6 7"},{"name":"Locrian ♮13","intervals":"1 ♭2 ♭3 4 ♭5 6 ♭7"},{"name":"Ionian ♯5","intervals":"1 2 3 4 ♯5 6 7"},{"name":"Dorian ♯11","intervals":"1 2 ♭3 ♯4 5 6 ♭7"},{"name":"Phrygian Dominant","intervals":"1 ♭2 3 4 5 ♭6 ♭7"},{"name":"Lydian ♯9","intervals":"1 ♯2 3 ♯4 5 6 7"},{"name":"SuperLocrian Diminished","intervals":"1 ♭2 ♯2 3 ♭5 ♯5 ♭♭7"}]},{"name":"Melodic Minor","intervals":"2 ♭2 2 2 2 2 ♭2","modes":[{"name":"Melodic Minor / Dorian ♮7","intervals":"1 2 ♭3 4 5 6 7"},{"name":"Phrygian ♮13 / Dorian ♭2","intervals":"1 ♭2 ♭3 4 5 6 ♭7"},{"name":"Lydian ♯5","intervals":"1 2 3 ♯4 ♯5 6 7"},{"name":"Lydian Domminant / Mixolydian ♯11","intervals":"1 2 3 ♯4 5 6 ♭7"},{"name":"Mixolydian ♭13 / Aeolian ♮3","intervals":"1 2 3 4 5 ♭6 ♭7"},{"name":"Aeolian ♭5 / Locrian ♮9","intervals":"1 2 ♭3 4 ♭5 ♭6 ♭7"},{"name":"Altered / SuperLocrian","intervals":"1 ♭2 ♯2 3 ♭5 ♯5 ♭7"}]},{"name":"Double Diminished","intervals":"2 ♭2 2 ♭2 2 ♭2 2 ♭2","modes":[{"name":"Whole Half (°)","intervals":"1 2 ♭3 4 ♭5 ♯5 ♭♭7 7"},{"name":"Half Whole (7)","intervals":"1 ♭2 ♯2 3 ♭5 5 6 ♭7"}]}]

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_Item__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_Mode__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_Scale__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dict_chords_yml__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dict_chords_yml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__dict_chords_yml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dict_scales_yml__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dict_scales_yml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__dict_scales_yml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Item__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Note__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Mode__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Scale__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Dict__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_0__helpers_symbols__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return __WEBPACK_IMPORTED_MODULE_1__helpers_utils__["default"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ItemHelper", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers_Item__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModeHelper", function() { return __WEBPACK_IMPORTED_MODULE_3__helpers_Mode__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleHelper", function() { return __WEBPACK_IMPORTED_MODULE_4__helpers_Scale__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return __WEBPACK_IMPORTED_MODULE_7__Item__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return __WEBPACK_IMPORTED_MODULE_8__Note__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return __WEBPACK_IMPORTED_MODULE_9__Mode__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return __WEBPACK_IMPORTED_MODULE_10__Scale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Dict", function() { return __WEBPACK_IMPORTED_MODULE_11__Dict__["a"]; });
















/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Interval__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Scale__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mode__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dict_scales_yml__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dict_scales_yml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dict_scales_yml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dict_chords_yml__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dict_chords_yml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__dict_chords_yml__);







let DICT  = []
let MODES = []
let EQUALS  = {}
let SIMILAR = {}

class Dict {
  static init() {
    Dict._initScales()
    Dict._matchInclusions()

    return Dict
  }

  static scales() {
    return DICT
  }

  static get(mode) {
    let i = EQUALS[mode.toString()]
    if (i)
      return MODES[i]
  }

  static similar(mode) {
    let equals = Dict.get(mode)
    if (equals)
      return equals

    let i = SIMILAR[mode.toString(true)]
    if (i)
      return MODES[i]
  }

  static _initScales() {
    DICT =
      __WEBPACK_IMPORTED_MODULE_4__dict_scales_yml___default.a
        .map(scale => Object.assign(scale, { type: 'mode' }))
      .concat(
        __WEBPACK_IMPORTED_MODULE_5__dict_chords_yml___default.a
          .map(chord => Object.assign(chord, { type: 'chord' }))
      )
      .map(scale => {
        let name  = scale.name
        let type  = scale.type
        let modes = scale.modes

        scale      = new __WEBPACK_IMPORTED_MODULE_1__Scale__["a" /* default */](undefined, Object(__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["k" /* str2items */])(__WEBPACK_IMPORTED_MODULE_0__Interval__["a" /* default */], scale.intervals))
        scale.name = name
        scale.type = type
        DICT.push(scale)

        scale.modes = modes.map(mode => {
          let name = mode.name

          mode       = new __WEBPACK_IMPORTED_MODULE_2__Mode__["a" /* default */](undefined, Object(__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["k" /* str2items */])(__WEBPACK_IMPORTED_MODULE_0__Interval__["a" /* default */], mode.intervals))
          mode.name  = name
          mode.type  = type
          mode.includes = []
          mode.included = []
          ;((mode, scale) => mode.scale = () => scale)(mode, scale)
          MODES.push(mode)

          return mode
        })

        return scale
      })
  }

  static _matchInclusions() {
    let found = []

    MODES.forEach((mode1, i) => {
      found[i] = found[i] || []

      EQUALS [mode1.toString()    ] = i
      SIMILAR[mode1.toString(true)] = i

      MODES.forEach((mode2, j) => {
        if (i === j) return

        found[j] = found[j] || []
        if (found[j].includes(i)) return

        if (mode1.doesInclude(mode2)) {
          found[i].push(j)

          mode1.includes.push(mode2)
          mode2.included.push(mode1)
        }
      })
    })
  }
}

Dict.init()

/* harmony default export */ __webpack_exports__["a"] = (Dict);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjMwNDMwNDA3ZWM5YzI4ODU3NDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9JdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9Ob3RlLmpzIiwid2VicGFjazovLy8uL3NyYy9JdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9TY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGljdC9jaG9yZHMueW1sIiwid2VicGFjazovLy8uL3NyYy9kaWN0L3NjYWxlcy55bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RpY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGVBQWU7QUFDM0Q7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJtdWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIzMDQzMDQwN2VjOWMyODg1NzQxIiwiZXhwb3J0IGNvbnN0IEFDQ1MgPSB7XG4gIGZsYXQgICA6ICfima0nXG4sIG5hdHVyYWw6ICfima4nXG4sIHNoYXJwICA6ICfima8nXG59XG5cbmV4cG9ydCBjb25zdCBJTlRWUyA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNyddXG5leHBvcnQgY29uc3QgTk9URVMgPSBbJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdBJywgJ0InXVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVscGVycy9zeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFDQ1MsIElOVFZTLCBOT1RFUyB9IGZyb20gJy4vc3ltYm9scydcblxuZXhwb3J0IGNvbnN0IG1vZCA9IChpLCBqKSA9PiAoKGkgJSBqKSArIGopICUgalxuXG5leHBvcnQgY29uc3QgZmFjdG9ycyA9IChudW0pID0+IHtcbiAgbGV0IGZhY3RvcnMgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguYWJzKG51bS8yKTsgKytpKSB7XG4gICAgaWYgKG51bSAlIGkgPT09IDApIGZhY3RvcnMucHVzaChpKVxuICB9XG5cbiAgZmFjdG9ycy5wdXNoKG51bSlcbiAgcmV0dXJuIGZhY3RvcnNcbn1cblxuZXhwb3J0IGNvbnN0IGFjY3Myc2VtaSA9IChhY2NzKSA9PiB7XG4gIGFjY3MgPSBhY2NzLnJlcGxhY2UoQUNDUy5uYXR1cmFsLCAnJylcbiAgbGV0IGkgPSBhY2NzLmxlbmd0aFxuICAgIC0gMiAqIChhY2NzLm1hdGNoKG5ldyBSZWdFeHAoYCR7QUNDUy5mbGF0fWAsICdnJykpIHx8IFtdKS5sZW5ndGhcblxuICByZXR1cm4gaVxufVxuXG5leHBvcnQgY29uc3QgYXJyMml0ZW1zID0gKEN0ciwgYXJyKSA9PiBhcnIubWFwKGUgPT4gbmV3IEN0cihlKSlcbmV4cG9ydCBjb25zdCBzdHIyaXRlbXMgPSAoQ3RyLCBzdHIpID0+IGFycjJpdGVtcyhDdHIsIHN0ci5zcGxpdCgnICcpKVxuXG5jb25zdCB6aXAgPSAoa2V5cywgdmFscykgPT4ge1xuICBsZXQgcmV0ID0ge31cblxuICBmb3IgKGxldCBpIGluIGtleXMpXG4gICAgcmV0W2tleXNbaV1dID0gdmFsc1tpXVxuXG4gIHJldHVybiByZXRcbn1cblxuZXhwb3J0IGNvbnN0IElOVFYyU0VNSSA9IHppcChJTlRWUywgWzAsIDIsIDQsIDUsIDcsIDksIDExXSlcbmV4cG9ydCBjb25zdCBOT1RFMlNFTUkgPSB6aXAoTk9URVMsIFswLCAyLCA0LCA1LCA3LCA5LCAxMV0pXG5cbmV4cG9ydCBjb25zdCBTRU1JMklOVFYgPSBbXG4gICAgICAgICAgICAgIGAke0lOVFZTWzBdfWBcbiwgYCR7QUNDUy5mbGF0fSR7SU5UVlNbMV19YFxuLCAgICAgICAgICAgICBgJHtJTlRWU1sxXX1gXG4sIGAke0FDQ1MuZmxhdH0ke0lOVFZTWzJdfWBcbiwgICAgICAgICAgICAgYCR7SU5UVlNbMl19YFxuLCAgICAgICAgICAgICBgJHtJTlRWU1szXX1gXG4sIGAke0FDQ1MuZmxhdH0ke0lOVFZTWzRdfWBcbiwgICAgICAgICAgICAgYCR7SU5UVlNbNF19YFxuLCBgJHtBQ0NTLmZsYXR9JHtJTlRWU1s1XX1gXG4sICAgICAgICAgICAgIGAke0lOVFZTWzVdfWBcbiwgYCR7QUNDUy5mbGF0fSR7SU5UVlNbNl19YFxuLCAgICAgICAgICAgICBgJHtJTlRWU1s2XX1gXG5dXG5cbmV4cG9ydCBjb25zdCBTRU1JMk5PVEUgPSBbXG4gIGAke05PVEVTWzBdfWBcbiwgYCR7Tk9URVNbMF19JHtBQ0NTLnNoYXJwfWBcbiwgYCR7Tk9URVNbMV19YFxuLCBgJHtOT1RFU1sxXX0ke0FDQ1Muc2hhcnB9YFxuLCBgJHtOT1RFU1syXX1gXG4sIGAke05PVEVTWzNdfWBcbiwgYCR7Tk9URVNbM119JHtBQ0NTLnNoYXJwfWBcbiwgYCR7Tk9URVNbNF19YFxuLCBgJHtOT1RFU1s0XX0ke0FDQ1Muc2hhcnB9YFxuLCBgJHtOT1RFU1s1XX1gXG4sIGAke05PVEVTWzVdfSR7QUNDUy5zaGFycH1gXG4sIGAke05PVEVTWzZdfWBcbl1cblxuZXhwb3J0IGNvbnN0IHNlbWkyaW50diA9IChpbnQpID0+IFNFTUkySU5UVlttb2QoaW50LCAxMildXG5leHBvcnQgY29uc3Qgc2VtaTJub3RlID0gKGludCkgPT4gU0VNSTJOT1RFW21vZChpbnQsIDEyKV1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgbW9kLCBhY2NzMnNlbWkgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgQUNDUyB9IGZyb20gJy4vc3ltYm9scydcblxuY2xhc3MgSXRlbUhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKEN0ciwgbmFtZXMsIG5hbWUyc2VtaSwgc2VtaTJuYW1lKSB7XG4gICAgdGhpcy5DdHIgICAgICAgPSBDdHJcbiAgICB0aGlzLm5hbWVzICAgICA9IG5hbWVzXG4gICAgdGhpcy5uYW1lMnNlbWkgPSBuYW1lMnNlbWlcbiAgICB0aGlzLnNlbWkybmFtZSA9IHNlbWkybmFtZVxuICB9XG5cbiAgcGFyc2Uoc3RyKSB7XG4gICAgbGV0IG5hbWVcbiAgICBsZXQgYWNjc1xuICAgIGxldCBiYXNlXG5cbiAgICBpZiAodGhpcy5DdHIubmFtZSA9PT0gJ0ludGVydmFsJykge1xuICAgICAgW25hbWUsIGFjY3MsIGJhc2VdID0gbmV3IFJlZ0V4cChcbiAgICAgICAgYChbJHtBQ0NTLmZsYXR9fCR7QUNDUy5uYXR1cmFsfXwke0FDQ1Muc2hhcnB9XSopKFxcXFxkKilgXG4gICAgICApLmV4ZWMoc3RyKVxuXG4gICAgICBiYXNlID0gJycgKyAobW9kKCtiYXNlIC0gMSwgNykgKyAxKVxuICAgIH0gZWxzZSBpZiAodGhpcy5DdHIubmFtZSA9PT0gJ05vdGUnKSB7XG4gICAgICBbbmFtZSwgYmFzZSwgYWNjc10gPSBuZXcgUmVnRXhwKFxuICAgICAgICBgKCR7dGhpcy5uYW1lcy5qb2luKCd8Jyl9KShbJHtBQ0NTLmZsYXR9fCR7QUNDUy5uYXR1cmFsfXwke0FDQ1Muc2hhcnB9XSopYFxuICAgICAgKS5leGVjKHN0cilcbiAgICB9XG5cbiAgICBhY2NzICAgICA9IGFjY3Myc2VtaShhY2NzKVxuICAgIGxldCBzZW1pID0gbW9kKHRoaXMubmFtZTJzZW1pW2Jhc2VdICsgYWNjcywgMTIpXG5cbiAgICByZXR1cm4geyBuYW1lLCBiYXNlLCBhY2NzLCBzZW1pIH1cbiAgfVxuXG4gIGZyb21TZW1pKHNlbWkpIHtcbiAgICBsZXQgaW50diA9IG5ldyB0aGlzLkN0cih0aGlzLnNlbWkybmFtZShzZW1pKSlcbiAgICBsZXQgbmFtZSA9IFN0cmluZyhpbnR2Lm5hbWUpXG4gICAgbGV0IGJhc2UgPSBTdHJpbmcoaW50di5iYXNlKVxuICAgIGxldCBhY2NzID0gTnVtYmVyKGludHYuYWNjcylcbiAgICAgICAgc2VtaSA9IE51bWJlcihpbnR2LnNlbWkpXG5cbiAgICByZXR1cm4geyBuYW1lLCBiYXNlLCBhY2NzLCBzZW1pIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtSGVscGVyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWxwZXJzL0l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcnMvSXRlbSdcbmltcG9ydCB7IE5PVEVTIH0gZnJvbSAnLi9oZWxwZXJzL3N5bWJvbHMnXG5pbXBvcnQgeyBOT1RFMlNFTUksIHNlbWkybm90ZSB9IGZyb20gJy4vaGVscGVycy91dGlscydcblxuY2xhc3MgTm90ZSBleHRlbmRzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihhcmcgPSBOT1RFU1swXSkge1xuICAgIHN1cGVyKGFyZylcbiAgfVxufVxuXG5Ob3RlLmhlbHBlciA9IG5ldyBIZWxwZXIoTm90ZSwgTk9URVMsIE5PVEUyU0VNSSwgc2VtaTJub3RlKVxuXG5leHBvcnQgZGVmYXVsdCBOb3RlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Ob3RlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihhcmcpIHtcbiAgICBsZXQgbmFtZVxuICAgIGxldCBiYXNlXG4gICAgbGV0IGFjY3NcbiAgICBsZXQgc2VtaVxuXG4gICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAoeyBuYW1lLCBiYXNlLCBhY2NzLCBzZW1pIH0gPSB0aGlzLmNvbnN0cnVjdG9yLmhlbHBlci5wYXJzZShhcmcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICh7IG5hbWUsIGJhc2UsIGFjY3MsIHNlbWkgfSA9IHRoaXMuY29uc3RydWN0b3IuaGVscGVyLmZyb21TZW1pKGFyZykpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGAke3RoaXMuY29uc3RydWN0b3IubmFtZX1AY29uc3RydWN0b3I6IGBcbiAgICAgICsgYGFyZyBtdXN0IGJlIHN0cmluZyBvciBudW1iZXIsIGdvdDpgXG4gICAgICAsIGFyZ1xuICAgICAgKVxuICAgICAgdGhyb3cgJydcbiAgICB9XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5iYXNlID0gYmFzZVxuICAgIHRoaXMuYWNjcyA9IGFjY3NcbiAgICB0aGlzLnNlbWkgPSBzZW1pXG4gIH1cblxuICB0ZXN0KCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpXG4gIH1cblxuICBhZGQoaXRlbSkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLnNlbWkgKyBpdGVtLnNlbWkpXG4gIH1cblxuICBzdWIoaXRlbSkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLnNlbWkgLSBpdGVtLnNlbWkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5uYW1lKVxuICB9XG5cbiAgc3RhdGljIGNsb25lKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uY2xvbmUoKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9JdGVtLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXJzL0l0ZW0nXG5pbXBvcnQgeyBJTlRWUyB9IGZyb20gJy4vaGVscGVycy9zeW1ib2xzJ1xuaW1wb3J0IHsgSU5UVjJTRU1JLCBzZW1pMmludHYgfSBmcm9tICcuL2hlbHBlcnMvdXRpbHMnXG5cbmNsYXNzIEludGVydmFsIGV4dGVuZHMgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGFyZyA9IElOVFZTWzBdKSB7XG4gICAgc3VwZXIoYXJnKVxuICB9XG59XG5cbkludGVydmFsLmhlbHBlciA9IG5ldyBIZWxwZXIoSW50ZXJ2YWwsIElOVFZTLCBJTlRWMlNFTUksIHNlbWkyaW50dilcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2YWxcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ludGVydmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBoZWxwZXIsIHsgREVGQVVMVF9ST09ULCBERUZBVUxUX0lOVFZTIH0gZnJvbSAnLi9oZWxwZXJzL1NjYWxlJ1xuXG5jbGFzcyBTY2FsZSB7XG4gIGNvbnN0cnVjdG9yKHJvb3QgPSBERUZBVUxUX1JPT1QsIGludHZzID0gREVGQVVMVF9JTlRWUykge1xuICAgIHRoaXMucm9vdCAgPSByb290XG4gICAgdGhpcy5pbnR2cyA9IGludHZzXG4gICAgdGhpcy5tb2RlcyA9IGhlbHBlci5tb2Rlcyh0aGlzLnJvb3QsIHRoaXMuaW50dnMpXG4gICAgdGhpcy5ub3RlcyA9IGhlbHBlci5ub3Rlcyh0aGlzLm1vZGVzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjYWxlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TY2FsZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaGVscGVyLCB7IERFRkFVTFRfUk9PVCwgREVGQVVMVF9JTlRWUyB9IGZyb20gJy4vaGVscGVycy9Nb2RlJ1xuXG5jbGFzcyBNb2RlIHtcbiAgY29uc3RydWN0b3Iocm9vdCA9IERFRkFVTFRfUk9PVCwgaW50dnMgPSBERUZBVUxUX0lOVFZTKSB7XG4gICAgdGhpcy5yb290ICA9IHJvb3RcbiAgICB0aGlzLmludHZzID0gaW50dnNcbiAgICB0aGlzLm5vdGVzID0gaGVscGVyLm5vdGVzKHRoaXMucm9vdCwgdGhpcy5pbnR2cylcbiAgfVxuXG4gIHNjYWxlKCkge1xuICAgIHJldHVybiBoZWxwZXIuc2NhbGUodGhpcy5yb290LCB0aGlzLmludHZzKVxuICB9XG5cbiAgZG9lc0luY2x1ZGUobW9kZSkge1xuICAgIGlmICh0aGlzLmludHZzLmxlbmd0aCA8PSBtb2RlLmludHZzLmxlbmd0aCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgc2VtaXMgPSB0aGlzLmludHZzLm1hcChpbnR2ID0+IGludHYuc2VtaSlcblxuICAgIGZvciAobGV0IGludHYgb2YgbW9kZS5pbnR2cykge1xuICAgICAgaWYoIXNlbWlzLmluY2x1ZGVzKGludHYuc2VtaSkpIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB0b1N0cmluZyhzZW1pID0gZmFsc2UpIHtcbiAgICByZXR1cm4gdGhpcy5pbnR2c1xuICAgICAgLm1hcChpbnR2ID0+IHNlbWkgPyBpbnR2LnNlbWkgOiBpbnR2Lm5hbWUpXG4gICAgICAuam9pbignICcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTW9kZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJTlRWUywgTk9URVMgfSBmcm9tICcuL3N5bWJvbHMnXG5pbXBvcnQgeyBhcnIyaXRlbXMgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE5vdGUgZnJvbSAnLi4vTm90ZSdcbmltcG9ydCBJbnRlcnZhbCBmcm9tICcuLi9JbnRlcnZhbCdcbmltcG9ydCBTY2FsZSBmcm9tICcuLi9TY2FsZSdcblxuY2xhc3MgTW9kZUhlbHBlciB7XG4gIHN0YXRpYyBub3Rlcyhyb290LCBpbnR2cykge1xuICAgIHJldHVybiBpbnR2cy5tYXAoaW50diA9PiByb290LmFkZChpbnR2KSlcbiAgfVxuXG4gIHN0YXRpYyBzY2FsZShyb290LCBpbnR2cykge1xuICAgIHJvb3QgICAgICA9IHJvb3QuY2xvbmUoKVxuICAgIGludHZzICAgICA9IEludGVydmFsLmNsb25lKGludHZzKVxuICAgIGxldCBwcmV2ICA9IG5ldyBJbnRlcnZhbChJTlRWU1swXSlcblxuICAgIGludHZzLnB1c2gocHJldilcbiAgICBpbnR2cyA9IGludHZzLm1hcChpbnR2ID0+IHtcbiAgICAgIGNvbnN0IHN1YiA9IGludHYuc3ViKHByZXYpXG4gICAgICBwcmV2ID0gaW50dlxuXG4gICAgICByZXR1cm4gc3ViXG4gICAgfSlcblxuICAgIGludHZzLnNoaWZ0KClcbiAgICByZXR1cm4gbmV3IFNjYWxlKHJvb3QsIGludHZzKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1JPT1QgID0gbmV3IE5vdGUoTk9URVNbMF0pXG5leHBvcnQgY29uc3QgREVGQVVMVF9JTlRWUyA9IGFycjJpdGVtcyhJbnRlcnZhbCwgSU5UVlMpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVIZWxwZXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvTW9kZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJTlRWUywgTk9URVMgfSBmcm9tICcuL3N5bWJvbHMnXG5pbXBvcnQgeyBTRU1JMklOVFYsIGZhY3RvcnMsIGFycjJpdGVtcyB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTm90ZSBmcm9tICcuLi9Ob3RlJ1xuaW1wb3J0IEludGVydmFsIGZyb20gJy4uL0ludGVydmFsJ1xuaW1wb3J0IE1vZGUgZnJvbSAnLi4vTW9kZSdcblxuY2xhc3MgU2NhbGVIZWxwZXIge1xuICBzdGF0aWMgbW9kZXMocm9vdCwgaW50dnMpIHtcbiAgICByb290ICAgICAgICAgICA9IHJvb3QuY2xvbmUoKVxuICAgIGludHZzICAgICAgICAgID0gSW50ZXJ2YWwuY2xvbmUoaW50dnMpXG4gICAgY29uc3Qgc3ltbWV0cnkgPSBTY2FsZUhlbHBlci5zeW1tZXRyeShpbnR2cylcbiAgICBsZXQgbW9kZXMgICAgICA9IFtTY2FsZUhlbHBlci5tb2RlKHJvb3QsIGludHZzKV1cblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3ltbWV0cnk7ICsraSkge1xuICAgICAgaW50dnMucHVzaChpbnR2cy5zaGlmdCgpKVxuICAgICAgbW9kZXMucHVzaChcbiAgICAgICAgU2NhbGVIZWxwZXIubW9kZShcbiAgICAgICAgICByb290LmFkZChtb2Rlc1swXS5ub3Rlc1tpXSlcbiAgICAgICAgLCBpbnR2cylcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kZXNcbiAgfVxuXG4gIHN0YXRpYyBtb2RlKHJvb3QsIGludHZzKSB7XG4gICAgcm9vdCAgICAgPSByb290LmNsb25lKClcbiAgICBpbnR2cyAgICA9IEludGVydmFsLmNsb25lKGludHZzKVxuICAgIGxldCBwcmV2ID0gbmV3IEludGVydmFsKElOVFZTWzBdKVxuXG4gICAgaW50dnMudW5zaGlmdChwcmV2KVxuICAgIGludHZzID0gaW50dnMubWFwKGludHYgPT4ge1xuICAgICAgY29uc3QgYWRkID0gaW50di5hZGQocHJldilcbiAgICAgIHByZXYgPSBhZGRcblxuICAgICAgcmV0dXJuIGFkZFxuICAgIH0pXG5cbiAgICBpbnR2cy5wb3AoKVxuICAgIHJldHVybiBuZXcgTW9kZShyb290LCBpbnR2cylcbiAgfVxuXG4gIHN0YXRpYyBub3Rlcyhtb2Rlcykge1xuICAgIHJldHVybiBOb3RlLmNsb25lKG1vZGVzWzBdLm5vdGVzKVxuICB9XG5cbiAgc3RhdGljIHN5bW1ldHJ5KGludHZzKSB7XG4gICAgY29uc3QgbCAgICAgPSBpbnR2cy5sZW5ndGhcbiAgICBjb25zdCBzZW1pcyA9IGludHZzLm1hcChpbnR2ID0+IGludHYuc2VtaSlcbiAgICBjb25zdCBmY3RycyA9IGZhY3RvcnMobClcblxuICAgIGZvciAobGV0IGZhY3RvciBvZiBmY3Rycykge1xuICAgICAgY29uc3QgcGF0dGVybiA9IHNlbWlzLnNsaWNlKDAsIGZhY3RvcilcbiAgICAgIGNvbnN0IHRlc3QgICAgPSBBcnJheS5wcm90b3R5cGVcbiAgICAgICAgLmNvbmNhdC5hcHBseShbXSwgQXJyYXkobCAvIGZhY3RvcikuZmlsbChwYXR0ZXJuKSlcblxuICAgICAgaWYgKHNlbWlzLmpvaW4oJyAnKSA9PT0gdGVzdC5qb2luKCcgJykpXG4gICAgICAgIHJldHVybiBmYWN0b3JcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUk9PVCAgPSBuZXcgTm90ZShOT1RFU1swXSlcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOVFZTID0gYXJyMml0ZW1zKEludGVydmFsLCBbXG4gICAgU0VNSTJJTlRWWzJdXG4gICwgU0VNSTJJTlRWWzJdXG4gICwgU0VNSTJJTlRWWzFdXG4gICwgU0VNSTJJTlRWWzJdXG4gICwgU0VNSTJJTlRWWzJdXG4gICwgU0VNSTJJTlRWWzJdXG4gICwgU0VNSTJJTlRWWzFdXG4gIF1cbilcblxuZXhwb3J0IGRlZmF1bHQgU2NhbGVIZWxwZXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvU2NhbGUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wibmFtZVwiOlwiU3VzcGVuZGVkXCIsXCJpbnRlcnZhbHNcIjpcIjIgNCA0XCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJzdXMyXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiA1XCJ9LHtcIm5hbWVcIjpcInN1czRcIixcImludGVydmFsc1wiOlwiMSA0IDVcIn1dfSx7XCJuYW1lXCI6XCLCsFwiLFwiaW50ZXJ2YWxzXCI6XCLima0zIOKZrTMg4pmvNFwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiwrBcIixcImludGVydmFsc1wiOlwiMSDima0zIOKZrTVcIn1dfSx7XCJuYW1lXCI6XCItXCIsXCJpbnRlcnZhbHNcIjpcIuKZrTMgMyA0XCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCItXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyA1XCJ9XX0se1wibmFtZVwiOlwizpRcIixcImludGVydmFsc1wiOlwiMyDima0zIDRcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIs6UXCIsXCJpbnRlcnZhbHNcIjpcIjEgMyA1XCJ9XX0se1wibmFtZVwiOlwiK1wiLFwiaW50ZXJ2YWxzXCI6XCIzIDMg4pmtNFwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiK1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDMg4pmvNVwifV19LHtcIm5hbWVcIjpcIsKwN1wiLFwiaW50ZXJ2YWxzXCI6XCLima0zIOKZrTMg4pmtMyDima0zXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCLCsDdcIixcImludGVydmFsc1wiOlwiMSDima0zIOKZrTUg4pmt4pmtN1wifV19LHtcIm5hbWVcIjpcIsO4XCIsXCJpbnRlcnZhbHNcIjpcIuKZrTMg4pmtMyAzIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIsO4XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyDima01IOKZrTdcIn0se1wibmFtZVwiOlwiLTZcIixcImludGVydmFsc1wiOlwiMSDima0zIDUgNlwifV19LHtcIm5hbWVcIjpcIi03XCIsXCJpbnRlcnZhbHNcIjpcIuKZrTMgMyDima0zIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIi03XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyA1IOKZrTdcIn0se1wibmFtZVwiOlwizpQ2XCIsXCJpbnRlcnZhbHNcIjpcIjEgMyA1IDZcIn1dfSx7XCJuYW1lXCI6XCItzpQ3XCIsXCJpbnRlcnZhbHNcIjpcIuKZrTMgMyAzIOKZrTJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIi3OlDdcIixcImludGVydmFsc1wiOlwiMSDima0zIDUgN1wifV19LHtcIm5hbWVcIjpcIjfima01XCIsXCJpbnRlcnZhbHNcIjpcIjMgMiAzIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIjfima01XCIsXCJpbnRlcnZhbHNcIjpcIjEgMyDima01IOKZrTdcIn1dfSx7XCJuYW1lXCI6XCI3XCIsXCJpbnRlcnZhbHNcIjpcIjMg4pmtMyDima0zIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIjdcIixcImludGVydmFsc1wiOlwiMSAzIDUg4pmtN1wifV19LHtcIm5hbWVcIjpcIjfima81XCIsXCJpbnRlcnZhbHNcIjpcIjMgMyAyIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIjfima81XCIsXCJpbnRlcnZhbHNcIjpcIjEgMyDima81IOKZrTdcIn1dfSx7XCJuYW1lXCI6XCLOlDdcIixcImludGVydmFsc1wiOlwiMyDima0zIDMg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwizpQ3XCIsXCJpbnRlcnZhbHNcIjpcIjEgMyA1IDdcIn1dfV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaWN0L2Nob3Jkcy55bWxcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW3tcIm5hbWVcIjpcIlBlbnRhdG9uaWMgKERpYXRvbmljKVwiLFwiaW50ZXJ2YWxzXCI6XCIyIDIg4pmtMyAyIOKZrTNcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIlBlbnRhdG9uaWMgTWFqb3JcIixcImludGVydmFsc1wiOlwiMSAyIDMgNSA2XCJ9LHtcIm5hbWVcIjpcIlBlbnRhdG9uaWMgbsKwMiAvIERvcmlhbihubzMsMTMpXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiA0IDUg4pmtN1wifSx7XCJuYW1lXCI6XCJQZW50YXRvbmljIG7CsDMgLyBQaHJ5Z2lhbihubzUsOSlcIixcImludGVydmFsc1wiOlwiMSDima0zIDQg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIlBlbnRhdG9uaWMgbsKwNCAvIE1peG9seWRpYW4obm8zLDcpXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiA0IDUgNlwifSx7XCJuYW1lXCI6XCJQZW50YXRvbmljIE1pbm9yXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyA0IDUg4pmtN1wifV19LHtcIm5hbWVcIjpcIldob2xlIFRvbmVcIixcImludGVydmFsc1wiOlwiMiAyIDIgMiAyIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIldob2xlIFRvbmUgKDcpXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIOKZrTUg4pmvNSDima03XCJ9XX0se1wibmFtZVwiOlwiRGlhdG9uaWNcIixcImludGVydmFsc1wiOlwiMiAyIOKZrTIgMiAyIDIg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiSW9uaWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIDQgNSA2IDdcIn0se1wibmFtZVwiOlwiRG9yaWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQgNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiUGhyeWdpYW5cIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrTMgNCA1IOKZrTYg4pmtN1wifSx7XCJuYW1lXCI6XCJMeWRpYW5cIixcImludGVydmFsc1wiOlwiMSAyIDMg4pmvNCA1IDYgN1wifSx7XCJuYW1lXCI6XCJNaXhvbHlkaWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIDQgNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiQWVvbGlhblwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyA0IDUg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIkxvY3JpYW5cIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrTMgNCDima01IOKZrTYg4pmtN1wifV19LHtcIm5hbWVcIjpcIkRvdWJsZSBIYXJtb25pYyBNYWpvclwiLFwiaW50ZXJ2YWxzXCI6XCIyIOKZrTMgMiAyIOKZrTIg4pmtMyDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJEb3VibGUgSGFybW9uaWMgTWFqb3IgLyBJb25pYW4g4pmtOSDima0xM1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIgMyA0IDUg4pmtNiA3XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiDima85IOKZrzEzXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmvMiAzIOKZrzQgNSDima82IDdcIn0se1wibmFtZVwiOlwiRG91YmxlIEhhcm1vbmljIE1ham9yIG7CsDNcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrzIgMyA1IOKZrTYg4pmt4pmtN1wifSx7XCJuYW1lXCI6XCJIdW5nYXJpYW4gTWlub3JcIixcImludGVydmFsc1wiOlwiMSDima0yIDMg4pmvNCA1IOKZrTYgN1wifSx7XCJuYW1lXCI6XCJPcmllbnRhbCAvIE1peG9seWRpYW4g4pmtNSDima05XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiAzIDQg4pmtNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiSW9uaWFuIOKZrzUg4pmvOVwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrzIgMyA0IOKZrzUgNiA3XCJ9LHtcIm5hbWVcIjpcIkxvY3JpYW4g4pmt4pmtMyDima3ima03XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima3ima0zIDQg4pmtNSDima02IOKZreKZrTdcIn1dfSx7XCJuYW1lXCI6XCJIYXJtb25pYyBNYWpvclwiLFwiaW50ZXJ2YWxzXCI6XCIyIDIg4pmtMiAyIOKZrTIg4pmtMyDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJIYXJtb25pYyBNYWpvciAvIElvbmlhbiDima0xM1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgMyA0IDUg4pmtNiA3XCJ9LHtcIm5hbWVcIjpcIkRvcmlhbiDima01XCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQg4pmtNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiSGFybW9uaWMgTWFqb3IgbsKwM1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmvMiAzIDUg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiDima0zXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIOKZrzQgNSA2IDdcIn0se1wibmFtZVwiOlwiTWl4b2x5ZGlhbiDima05XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiAzIDQgNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiTHlkaWFuIOKZrzUg4pmvOVwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrzIgMyDima80IOKZrzUgNiA3XCJ9LHtcIm5hbWVcIjpcIkxvY3JpYW4g4pmt4pmtN1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmtMyA0IOKZrTUg4pmtNiDima3ima03XCJ9XX0se1wibmFtZVwiOlwiSGFybW9uaWMgTWlub3JcIixcImludGVydmFsc1wiOlwiMiDima0yIDIgMiDima0yIOKZrTMg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiSGFybW9uaWMgTWlub3IgLyBBZW9saWFuIOKZrjdcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMgNCA1IOKZrTYgN1wifSx7XCJuYW1lXCI6XCJMb2NyaWFuIOKZrjEzXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima0zIDQg4pmtNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiSW9uaWFuIOKZrzVcIixcImludGVydmFsc1wiOlwiMSAyIDMgNCDima81IDYgN1wifSx7XCJuYW1lXCI6XCJEb3JpYW4g4pmvMTFcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMg4pmvNCA1IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJQaHJ5Z2lhbiBEb21pbmFudFwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIgMyA0IDUg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiDima85XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmvMiAzIOKZrzQgNSA2IDdcIn0se1wibmFtZVwiOlwiU3VwZXJMb2NyaWFuIERpbWluaXNoZWRcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrzIgMyDima01IOKZrzUg4pmt4pmtN1wifV19LHtcIm5hbWVcIjpcIk1lbG9kaWMgTWlub3JcIixcImludGVydmFsc1wiOlwiMiDima0yIDIgMiAyIDIg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiTWVsb2RpYyBNaW5vciAvIERvcmlhbiDima43XCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQgNSA2IDdcIn0se1wibmFtZVwiOlwiUGhyeWdpYW4g4pmuMTMgLyBEb3JpYW4g4pmtMlwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmtMyA0IDUgNiDima03XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiDima81XCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIOKZrzQg4pmvNSA2IDdcIn0se1wibmFtZVwiOlwiTHlkaWFuIERvbW1pbmFudCAvIE1peG9seWRpYW4g4pmvMTFcIixcImludGVydmFsc1wiOlwiMSAyIDMg4pmvNCA1IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJNaXhvbHlkaWFuIOKZrTEzIC8gQWVvbGlhbiDima4zXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIDQgNSDima02IOKZrTdcIn0se1wibmFtZVwiOlwiQWVvbGlhbiDima01IC8gTG9jcmlhbiDima45XCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQg4pmtNSDima02IOKZrTdcIn0se1wibmFtZVwiOlwiQWx0ZXJlZCAvIFN1cGVyTG9jcmlhblwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmvMiAzIOKZrTUg4pmvNSDima03XCJ9XX0se1wibmFtZVwiOlwiRG91YmxlIERpbWluaXNoZWRcIixcImludGVydmFsc1wiOlwiMiDima0yIDIg4pmtMiAyIOKZrTIgMiDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJXaG9sZSBIYWxmICjCsClcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMgNCDima01IOKZrzUg4pmt4pmtNyA3XCJ9LHtcIm5hbWVcIjpcIkhhbGYgV2hvbGUgKDcpXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima8yIDMg4pmtNSA1IDYg4pmtN1wifV19XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RpY3Qvc2NhbGVzLnltbFxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9oZWxwZXJzL3N5bWJvbHMnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEl0ZW1IZWxwZXIgZnJvbSAnLi9oZWxwZXJzL0l0ZW0nXG5pbXBvcnQgTW9kZUhlbHBlciBmcm9tICcuL2hlbHBlcnMvTW9kZSdcbmltcG9ydCBTY2FsZUhlbHBlciBmcm9tICcuL2hlbHBlcnMvU2NhbGUnXG5pbXBvcnQgY2hvcmRzIGZyb20gJy4vZGljdC9jaG9yZHMueW1sJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuL2RpY3Qvc2NhbGVzLnltbCdcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcbmltcG9ydCBOb3RlIGZyb20gJy4vTm90ZSdcbmltcG9ydCBNb2RlIGZyb20gJy4vTW9kZSdcbmltcG9ydCBTY2FsZSBmcm9tICcuL1NjYWxlJ1xuaW1wb3J0IERpY3QgZnJvbSAnLi9EaWN0J1xuXG5leHBvcnQge1xuICBzeW1ib2xzXG4sIHV0aWxzXG4sIEl0ZW1IZWxwZXJcbiwgTW9kZUhlbHBlclxuLCBTY2FsZUhlbHBlclxuLCBJdGVtXG4sIE5vdGVcbiwgTW9kZVxuLCBTY2FsZVxuLCBEaWN0XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSW50ZXJ2YWwgZnJvbSAnLi9JbnRlcnZhbCdcbmltcG9ydCBTY2FsZSBmcm9tICcuL1NjYWxlJ1xuaW1wb3J0IE1vZGUgZnJvbSAnLi9Nb2RlJ1xuaW1wb3J0IHsgc3RyMml0ZW1zIH0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IFNDQUxFUyBmcm9tICcuL2RpY3Qvc2NhbGVzLnltbCdcbmltcG9ydCBDSE9SRFMgZnJvbSAnLi9kaWN0L2Nob3Jkcy55bWwnXG5cbmxldCBESUNUICA9IFtdXG5sZXQgTU9ERVMgPSBbXVxubGV0IEVRVUFMUyAgPSB7fVxubGV0IFNJTUlMQVIgPSB7fVxuXG5jbGFzcyBEaWN0IHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgRGljdC5faW5pdFNjYWxlcygpXG4gICAgRGljdC5fbWF0Y2hJbmNsdXNpb25zKClcblxuICAgIHJldHVybiBEaWN0XG4gIH1cblxuICBzdGF0aWMgc2NhbGVzKCkge1xuICAgIHJldHVybiBESUNUXG4gIH1cblxuICBzdGF0aWMgZ2V0KG1vZGUpIHtcbiAgICBsZXQgaSA9IEVRVUFMU1ttb2RlLnRvU3RyaW5nKCldXG4gICAgaWYgKGkpXG4gICAgICByZXR1cm4gTU9ERVNbaV1cbiAgfVxuXG4gIHN0YXRpYyBzaW1pbGFyKG1vZGUpIHtcbiAgICBsZXQgZXF1YWxzID0gRGljdC5nZXQobW9kZSlcbiAgICBpZiAoZXF1YWxzKVxuICAgICAgcmV0dXJuIGVxdWFsc1xuXG4gICAgbGV0IGkgPSBTSU1JTEFSW21vZGUudG9TdHJpbmcodHJ1ZSldXG4gICAgaWYgKGkpXG4gICAgICByZXR1cm4gTU9ERVNbaV1cbiAgfVxuXG4gIHN0YXRpYyBfaW5pdFNjYWxlcygpIHtcbiAgICBESUNUID1cbiAgICAgIFNDQUxFU1xuICAgICAgICAubWFwKHNjYWxlID0+IE9iamVjdC5hc3NpZ24oc2NhbGUsIHsgdHlwZTogJ21vZGUnIH0pKVxuICAgICAgLmNvbmNhdChcbiAgICAgICAgQ0hPUkRTXG4gICAgICAgICAgLm1hcChjaG9yZCA9PiBPYmplY3QuYXNzaWduKGNob3JkLCB7IHR5cGU6ICdjaG9yZCcgfSkpXG4gICAgICApXG4gICAgICAubWFwKHNjYWxlID0+IHtcbiAgICAgICAgbGV0IG5hbWUgID0gc2NhbGUubmFtZVxuICAgICAgICBsZXQgdHlwZSAgPSBzY2FsZS50eXBlXG4gICAgICAgIGxldCBtb2RlcyA9IHNjYWxlLm1vZGVzXG5cbiAgICAgICAgc2NhbGUgICAgICA9IG5ldyBTY2FsZSh1bmRlZmluZWQsIHN0cjJpdGVtcyhJbnRlcnZhbCwgc2NhbGUuaW50ZXJ2YWxzKSlcbiAgICAgICAgc2NhbGUubmFtZSA9IG5hbWVcbiAgICAgICAgc2NhbGUudHlwZSA9IHR5cGVcbiAgICAgICAgRElDVC5wdXNoKHNjYWxlKVxuXG4gICAgICAgIHNjYWxlLm1vZGVzID0gbW9kZXMubWFwKG1vZGUgPT4ge1xuICAgICAgICAgIGxldCBuYW1lID0gbW9kZS5uYW1lXG5cbiAgICAgICAgICBtb2RlICAgICAgID0gbmV3IE1vZGUodW5kZWZpbmVkLCBzdHIyaXRlbXMoSW50ZXJ2YWwsIG1vZGUuaW50ZXJ2YWxzKSlcbiAgICAgICAgICBtb2RlLm5hbWUgID0gbmFtZVxuICAgICAgICAgIG1vZGUudHlwZSAgPSB0eXBlXG4gICAgICAgICAgbW9kZS5pbmNsdWRlcyA9IFtdXG4gICAgICAgICAgbW9kZS5pbmNsdWRlZCA9IFtdXG4gICAgICAgICAgOygobW9kZSwgc2NhbGUpID0+IG1vZGUuc2NhbGUgPSAoKSA9PiBzY2FsZSkobW9kZSwgc2NhbGUpXG4gICAgICAgICAgTU9ERVMucHVzaChtb2RlKVxuXG4gICAgICAgICAgcmV0dXJuIG1vZGVcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gc2NhbGVcbiAgICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX21hdGNoSW5jbHVzaW9ucygpIHtcbiAgICBsZXQgZm91bmQgPSBbXVxuXG4gICAgTU9ERVMuZm9yRWFjaCgobW9kZTEsIGkpID0+IHtcbiAgICAgIGZvdW5kW2ldID0gZm91bmRbaV0gfHwgW11cblxuICAgICAgRVFVQUxTIFttb2RlMS50b1N0cmluZygpICAgIF0gPSBpXG4gICAgICBTSU1JTEFSW21vZGUxLnRvU3RyaW5nKHRydWUpXSA9IGlcblxuICAgICAgTU9ERVMuZm9yRWFjaCgobW9kZTIsIGopID0+IHtcbiAgICAgICAgaWYgKGkgPT09IGopIHJldHVyblxuXG4gICAgICAgIGZvdW5kW2pdID0gZm91bmRbal0gfHwgW11cbiAgICAgICAgaWYgKGZvdW5kW2pdLmluY2x1ZGVzKGkpKSByZXR1cm5cblxuICAgICAgICBpZiAobW9kZTEuZG9lc0luY2x1ZGUobW9kZTIpKSB7XG4gICAgICAgICAgZm91bmRbaV0ucHVzaChqKVxuXG4gICAgICAgICAgbW9kZTEuaW5jbHVkZXMucHVzaChtb2RlMilcbiAgICAgICAgICBtb2RlMi5pbmNsdWRlZC5wdXNoKG1vZGUxKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuRGljdC5pbml0KClcblxuZXhwb3J0IGRlZmF1bHQgRGljdFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRGljdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==