var MuJS =
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


/* harmony default export */ __webpack_exports__["d"] = ({
  ACCS : ACCS
, INTVS: INTVS
, NOTES: NOTES
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);


const zip = (keys, vals) => {
  let ret = {}

  for (let i in keys)
    ret[keys[i]] = vals[i]

  return ret
}

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


/* harmony default export */ __webpack_exports__["f"] = ({
  mod      : mod
, factors  : factors
, accs2semi: accs2semi
, arr2items: arr2items
, str2items: str2items
, INTV2SEMI: INTV2SEMI
, NOTE2SEMI: NOTE2SEMI
, SEMI2INTV: SEMI2INTV
, SEMI2NOTE: SEMI2NOTE
, semi2intv: semi2intv
, semi2note: semi2note
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_Item__ = __webpack_require__(3);
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
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Note__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Interval__ = __webpack_require__(2);





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
    return new Mode.Scale(root, intvs)
  }
}

const DEFAULT_ROOT  = new __WEBPACK_IMPORTED_MODULE_2__Note__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__symbols__["c" /* NOTES */][0])
/* harmony export (immutable) */ __webpack_exports__["b"] = DEFAULT_ROOT;

const DEFAULT_INTVS = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* arr2items */])(__WEBPACK_IMPORTED_MODULE_3__Interval__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__symbols__["b" /* INTVS */])
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_INTVS;


/* harmony default export */ __webpack_exports__["c"] = (ModeHelper);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Item__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_Item__ = __webpack_require__(3);
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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Note__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Interval__ = __webpack_require__(2);





class ScaleHelper {
  static notes(modes) {
    return __WEBPACK_IMPORTED_MODULE_2__Note__["a" /* default */].clone(modes[0].notes)
  }

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
    return new ScaleHelper.Mode(root, intvs)
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
/* 8 */
/***/ (function(module, exports) {

module.exports = [{"name":"Suspended","intervals":"2 4 4","modes":[{"name":"sus2","intervals":"1 2 5"},{"name":"sus4","intervals":"1 4 5"}]},{"name":"°","intervals":"♭3 ♭3 ♯4","modes":[{"name":"°","intervals":"1 ♭3 ♭5"}]},{"name":"-","intervals":"♭3 3 4","modes":[{"name":"-","intervals":"1 ♭3 5"}]},{"name":"Δ","intervals":"3 ♭3 4","modes":[{"name":"Δ","intervals":"1 3 5"}]},{"name":"+","intervals":"3 3 ♭4","modes":[{"name":"+","intervals":"1 3 ♯5"}]},{"name":"°7","intervals":"♭3 ♭3 ♭3 ♭3","modes":[{"name":"°7","intervals":"1 ♭3 ♭5 ♭♭7"}]},{"name":"ø","intervals":"♭3 ♭3 3 2","modes":[{"name":"ø","intervals":"1 ♭3 ♭5 ♭7"},{"name":"-6","intervals":"1 ♭3 5 6"}]},{"name":"-7","intervals":"♭3 3 ♭3 2","modes":[{"name":"-7","intervals":"1 ♭3 5 ♭7"},{"name":"Δ6","intervals":"1 3 5 6"}]},{"name":"-Δ7","intervals":"♭3 3 3 ♭2","modes":[{"name":"-Δ7","intervals":"1 ♭3 5 7"}]},{"name":"7♭5","intervals":"3 2 3 2","modes":[{"name":"7♭5","intervals":"1 3 ♭5 ♭7"}]},{"name":"7","intervals":"3 ♭3 ♭3 2","modes":[{"name":"7","intervals":"1 3 5 ♭7"}]},{"name":"7♯5","intervals":"3 3 2 2","modes":[{"name":"7♯5","intervals":"1 3 ♯5 ♭7"}]},{"name":"Δ7","intervals":"3 ♭3 3 ♭2","modes":[{"name":"Δ7","intervals":"1 3 5 7"}]}]

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = [{"name":"Pentatonic (Diatonic)","intervals":"2 2 ♭3 2 ♭3","modes":[{"name":"Pentatonic Major","intervals":"1 2 3 5 6"},{"name":"Pentatonic n°2 / Dorian(no3,13)","intervals":"1 2 4 5 ♭7"},{"name":"Pentatonic n°3 / Phrygian(no5,9)","intervals":"1 ♭3 4 ♭6 ♭7"},{"name":"Pentatonic n°4 / Mixolydian(no3,7)","intervals":"1 2 4 5 6"},{"name":"Pentatonic Minor","intervals":"1 ♭3 4 5 ♭7"}]},{"name":"Whole Tone","intervals":"2 2 2 2 2 2","modes":[{"name":"Whole Tone (7)","intervals":"1 2 3 ♭5 ♯5 ♭7"}]},{"name":"Diatonic","intervals":"2 2 ♭2 2 2 2 ♭2","modes":[{"name":"Ionian","intervals":"1 2 3 4 5 6 7"},{"name":"Dorian","intervals":"1 2 ♭3 4 5 6 ♭7"},{"name":"Phrygian","intervals":"1 ♭2 ♭3 4 5 ♭6 ♭7"},{"name":"Lydian","intervals":"1 2 3 ♯4 5 6 7"},{"name":"Mixolydian","intervals":"1 2 3 4 5 6 ♭7"},{"name":"Aeolian","intervals":"1 2 ♭3 4 5 ♭6 ♭7"},{"name":"Locrian","intervals":"1 ♭2 ♭3 4 ♭5 ♭6 ♭7"}]},{"name":"Double Harmonic Major","intervals":"2 ♭3 2 2 ♭2 ♭3 ♭2","modes":[{"name":"Double Harmonic Major / Ionian ♭9 ♭13","intervals":"1 ♭2 3 4 5 ♭6 7"},{"name":"Lydian ♯9 ♯13","intervals":"1 ♯2 3 ♯4 5 ♯6 7"},{"name":"Double Harmonic Major n°3","intervals":"1 ♭2 ♯2 3 5 ♭6 ♭♭7"},{"name":"Hungarian Minor","intervals":"1 ♭2 3 ♯4 5 ♭6 7"},{"name":"Oriental / Mixolydian ♭5 ♭9","intervals":"1 ♭2 3 4 ♭5 6 ♭7"},{"name":"Ionian ♯5 ♯9","intervals":"1 ♯2 3 4 ♯5 6 7"},{"name":"Locrian ♭♭3 ♭♭7","intervals":"1 ♭2 ♭♭3 4 ♭5 ♭6 ♭♭7"}]},{"name":"Harmonic Major","intervals":"2 2 ♭2 2 ♭2 ♭3 ♭2","modes":[{"name":"Harmonic Major / Ionian ♭13","intervals":"1 2 3 4 5 ♭6 7"},{"name":"Dorian ♭5","intervals":"1 2 ♭3 4 ♭5 6 ♭7"},{"name":"Harmonic Major n°3","intervals":"1 ♭2 ♯2 3 5 ♭6 ♭7"},{"name":"Lydian ♭3","intervals":"1 2 ♭3 ♯4 5 6 7"},{"name":"Mixolydian ♭9","intervals":"1 ♭2 3 4 5 6 ♭7"},{"name":"Lydian ♯5 ♯9","intervals":"1 ♯2 3 ♯4 ♯5 6 7"},{"name":"Locrian ♭♭7","intervals":"1 ♭2 ♭3 4 ♭5 ♭6 ♭♭7"}]},{"name":"Harmonic Minor","intervals":"2 ♭2 2 2 ♭2 ♭3 ♭2","modes":[{"name":"Harmonic Minor / Aeolian ♮7","intervals":"1 2 ♭3 4 5 ♭6 7"},{"name":"Locrian ♮13","intervals":"1 ♭2 ♭3 4 ♭5 6 ♭7"},{"name":"Ionian ♯5","intervals":"1 2 3 4 ♯5 6 7"},{"name":"Dorian ♯11","intervals":"1 2 ♭3 ♯4 5 6 ♭7"},{"name":"Phrygian Dominant","intervals":"1 ♭2 3 4 5 ♭6 ♭7"},{"name":"Lydian ♯9","intervals":"1 ♯2 3 ♯4 5 6 7"},{"name":"SuperLocrian Diminished","intervals":"1 ♭2 ♯2 3 ♭5 ♯5 ♭♭7"}]},{"name":"Melodic Minor","intervals":"2 ♭2 2 2 2 2 ♭2","modes":[{"name":"Melodic Minor / Dorian ♮7","intervals":"1 2 ♭3 4 5 6 7"},{"name":"Phrygian ♮13 / Dorian ♭2","intervals":"1 ♭2 ♭3 4 5 6 ♭7"},{"name":"Lydian ♯5","intervals":"1 2 3 ♯4 ♯5 6 7"},{"name":"Lydian Domminant / Mixolydian ♯11","intervals":"1 2 3 ♯4 5 6 ♭7"},{"name":"Mixolydian ♭13 / Aeolian ♮3","intervals":"1 2 3 4 5 ♭6 ♭7"},{"name":"Aeolian ♭5 / Locrian ♮9","intervals":"1 2 ♭3 4 ♭5 ♭6 ♭7"},{"name":"Altered / SuperLocrian","intervals":"1 ♭2 ♯2 3 ♭5 ♯5 ♭7"}]},{"name":"Double Diminished","intervals":"2 ♭2 2 ♭2 2 ♭2 2 ♭2","modes":[{"name":"Whole Half (°)","intervals":"1 2 ♭3 4 ♭5 ♯5 ♭♭7 7"},{"name":"Half Whole (7)","intervals":"1 ♭2 ♯2 3 ♭5 5 6 ♭7"}]}]

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Mode__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_Scale__ = __webpack_require__(7);



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

__WEBPACK_IMPORTED_MODULE_1__helpers_Scale__["c" /* default */].Mode = Mode

/* harmony default export */ __webpack_exports__["a"] = (Mode);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_Mode__ = __webpack_require__(4);



class Scale {
  constructor(root = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["b" /* DEFAULT_ROOT */], intvs = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["a" /* DEFAULT_INTVS */]) {
    this.root  = root
    this.intvs = intvs
    this.modes = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["c" /* default */].modes(this.root, this.intvs)
    this.notes = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["c" /* default */].notes(this.modes)
  }
}

__WEBPACK_IMPORTED_MODULE_1__helpers_Mode__["c" /* default */].Scale = Scale

/* harmony default export */ __webpack_exports__["a"] = (Scale);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_symbols__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_Item__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_Mode__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_Scale__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dict_chords_yml__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dict_chords_yml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__dict_chords_yml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dict_scales_yml__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dict_scales_yml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__dict_scales_yml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Item__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Note__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Mode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Scale__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Dict__ = __webpack_require__(13);














const MuJS = {
  symbols: __WEBPACK_IMPORTED_MODULE_0__helpers_symbols__["d" /* default */]
, utils: __WEBPACK_IMPORTED_MODULE_1__helpers_utils__["f" /* default */]
, ItemHelper: __WEBPACK_IMPORTED_MODULE_2__helpers_Item__["a" /* default */]
, ModeHelper: __WEBPACK_IMPORTED_MODULE_3__helpers_Mode__["c" /* default */]
, ScaleHelper: __WEBPACK_IMPORTED_MODULE_4__helpers_Scale__["c" /* default */]
, chords: __WEBPACK_IMPORTED_MODULE_5__dict_chords_yml___default.a
, scales: __WEBPACK_IMPORTED_MODULE_6__dict_scales_yml___default.a
, Item: __WEBPACK_IMPORTED_MODULE_7__Item__["a" /* default */]
, Interval: __WEBPACK_IMPORTED_MODULE_8__Interval__["a" /* default */]
, Note: __WEBPACK_IMPORTED_MODULE_9__Note__["a" /* default */]
, Mode: __WEBPACK_IMPORTED_MODULE_10__Mode__["a" /* default */]
, Scale: __WEBPACK_IMPORTED_MODULE_11__Scale__["a" /* default */]
, Dict: __WEBPACK_IMPORTED_MODULE_12__Dict__["a" /* default */]
}

/* harmony default export */ __webpack_exports__["default"] = (MujS);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Interval__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Scale__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dict_scales_yml__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dict_scales_yml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dict_scales_yml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dict_chords_yml__ = __webpack_require__(8);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2NlMTdkZjAyNTNiYzA3MjgwMGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9Nb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9Ob3RlLmpzIiwid2VicGFjazovLy8uL3NyYy9JdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL1NjYWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWN0L2Nob3Jkcy55bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpY3Qvc2NhbGVzLnltbCIsIndlYnBhY2s6Ly8vLi9zcmMvTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RpY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7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O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ29CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZUFBZTtBQUMzRDtBQUNBO0FBQ0EsOENBQThDLGdCQUFnQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6Im11anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2NlMTdkZjAyNTNiYzA3MjgwMGMiLCJleHBvcnQgY29uc3QgQUNDUyA9IHtcbiAgZmxhdCAgIDogJ+KZrSdcbiwgbmF0dXJhbDogJ+KZridcbiwgc2hhcnAgIDogJ+KZrydcbn1cblxuZXhwb3J0IGNvbnN0IElOVFZTID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3J11cbmV4cG9ydCBjb25zdCBOT1RFUyA9IFsnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0EnLCAnQiddXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQUNDUyA6IEFDQ1NcbiwgSU5UVlM6IElOVFZTXG4sIE5PVEVTOiBOT1RFU1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVscGVycy9zeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFDQ1MsIElOVFZTLCBOT1RFUyB9IGZyb20gJy4vc3ltYm9scydcblxuY29uc3QgemlwID0gKGtleXMsIHZhbHMpID0+IHtcbiAgbGV0IHJldCA9IHt9XG5cbiAgZm9yIChsZXQgaSBpbiBrZXlzKVxuICAgIHJldFtrZXlzW2ldXSA9IHZhbHNbaV1cblxuICByZXR1cm4gcmV0XG59XG5cbmV4cG9ydCBjb25zdCBtb2QgPSAoaSwgaikgPT4gKChpICUgaikgKyBqKSAlIGpcblxuZXhwb3J0IGNvbnN0IGZhY3RvcnMgPSAobnVtKSA9PiB7XG4gIGxldCBmYWN0b3JzID0gW11cblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmFicyhudW0vMik7ICsraSkge1xuICAgIGlmIChudW0gJSBpID09PSAwKSBmYWN0b3JzLnB1c2goaSlcbiAgfVxuXG4gIGZhY3RvcnMucHVzaChudW0pXG4gIHJldHVybiBmYWN0b3JzXG59XG5cbmV4cG9ydCBjb25zdCBhY2NzMnNlbWkgPSAoYWNjcykgPT4ge1xuICBhY2NzID0gYWNjcy5yZXBsYWNlKEFDQ1MubmF0dXJhbCwgJycpXG4gIGxldCBpID0gYWNjcy5sZW5ndGhcbiAgICAtIDIgKiAoYWNjcy5tYXRjaChuZXcgUmVnRXhwKGAke0FDQ1MuZmxhdH1gLCAnZycpKSB8fCBbXSkubGVuZ3RoXG5cbiAgcmV0dXJuIGlcbn1cblxuZXhwb3J0IGNvbnN0IGFycjJpdGVtcyA9IChDdHIsIGFycikgPT4gYXJyLm1hcChlID0+IG5ldyBDdHIoZSkpXG5leHBvcnQgY29uc3Qgc3RyMml0ZW1zID0gKEN0ciwgc3RyKSA9PiBhcnIyaXRlbXMoQ3RyLCBzdHIuc3BsaXQoJyAnKSlcblxuZXhwb3J0IGNvbnN0IElOVFYyU0VNSSA9IHppcChJTlRWUywgWzAsIDIsIDQsIDUsIDcsIDksIDExXSlcbmV4cG9ydCBjb25zdCBOT1RFMlNFTUkgPSB6aXAoTk9URVMsIFswLCAyLCA0LCA1LCA3LCA5LCAxMV0pXG5cbmV4cG9ydCBjb25zdCBTRU1JMklOVFYgPSBbXG4gICAgICAgICAgICAgIGAke0lOVFZTWzBdfWBcbiwgYCR7QUNDUy5mbGF0fSR7SU5UVlNbMV19YFxuLCAgICAgICAgICAgICBgJHtJTlRWU1sxXX1gXG4sIGAke0FDQ1MuZmxhdH0ke0lOVFZTWzJdfWBcbiwgICAgICAgICAgICAgYCR7SU5UVlNbMl19YFxuLCAgICAgICAgICAgICBgJHtJTlRWU1szXX1gXG4sIGAke0FDQ1MuZmxhdH0ke0lOVFZTWzRdfWBcbiwgICAgICAgICAgICAgYCR7SU5UVlNbNF19YFxuLCBgJHtBQ0NTLmZsYXR9JHtJTlRWU1s1XX1gXG4sICAgICAgICAgICAgIGAke0lOVFZTWzVdfWBcbiwgYCR7QUNDUy5mbGF0fSR7SU5UVlNbNl19YFxuLCAgICAgICAgICAgICBgJHtJTlRWU1s2XX1gXG5dXG5cbmV4cG9ydCBjb25zdCBTRU1JMk5PVEUgPSBbXG4gIGAke05PVEVTWzBdfWBcbiwgYCR7Tk9URVNbMF19JHtBQ0NTLnNoYXJwfWBcbiwgYCR7Tk9URVNbMV19YFxuLCBgJHtOT1RFU1sxXX0ke0FDQ1Muc2hhcnB9YFxuLCBgJHtOT1RFU1syXX1gXG4sIGAke05PVEVTWzNdfWBcbiwgYCR7Tk9URVNbM119JHtBQ0NTLnNoYXJwfWBcbiwgYCR7Tk9URVNbNF19YFxuLCBgJHtOT1RFU1s0XX0ke0FDQ1Muc2hhcnB9YFxuLCBgJHtOT1RFU1s1XX1gXG4sIGAke05PVEVTWzVdfSR7QUNDUy5zaGFycH1gXG4sIGAke05PVEVTWzZdfWBcbl1cblxuZXhwb3J0IGNvbnN0IHNlbWkyaW50diA9IChpbnQpID0+IFNFTUkySU5UVlttb2QoaW50LCAxMildXG5leHBvcnQgY29uc3Qgc2VtaTJub3RlID0gKGludCkgPT4gU0VNSTJOT1RFW21vZChpbnQsIDEyKV1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtb2QgICAgICA6IG1vZFxuLCBmYWN0b3JzICA6IGZhY3RvcnNcbiwgYWNjczJzZW1pOiBhY2NzMnNlbWlcbiwgYXJyMml0ZW1zOiBhcnIyaXRlbXNcbiwgc3RyMml0ZW1zOiBzdHIyaXRlbXNcbiwgSU5UVjJTRU1JOiBJTlRWMlNFTUlcbiwgTk9URTJTRU1JOiBOT1RFMlNFTUlcbiwgU0VNSTJJTlRWOiBTRU1JMklOVFZcbiwgU0VNSTJOT1RFOiBTRU1JMk5PVEVcbiwgc2VtaTJpbnR2OiBzZW1pMmludHZcbiwgc2VtaTJub3RlOiBzZW1pMm5vdGVcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcnMvSXRlbSdcbmltcG9ydCB7IElOVFZTIH0gZnJvbSAnLi9oZWxwZXJzL3N5bWJvbHMnXG5pbXBvcnQgeyBJTlRWMlNFTUksIHNlbWkyaW50diB9IGZyb20gJy4vaGVscGVycy91dGlscydcblxuY2xhc3MgSW50ZXJ2YWwgZXh0ZW5kcyBJdGVtIHtcbiAgY29uc3RydWN0b3IoYXJnID0gSU5UVlNbMF0pIHtcbiAgICBzdXBlcihhcmcpXG4gIH1cbn1cblxuSW50ZXJ2YWwuaGVscGVyID0gbmV3IEhlbHBlcihJbnRlcnZhbCwgSU5UVlMsIElOVFYyU0VNSSwgc2VtaTJpbnR2KVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZhbFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvSW50ZXJ2YWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgbW9kLCBhY2NzMnNlbWkgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgQUNDUyB9IGZyb20gJy4vc3ltYm9scydcblxuY2xhc3MgSXRlbUhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKEN0ciwgbmFtZXMsIG5hbWUyc2VtaSwgc2VtaTJuYW1lKSB7XG4gICAgdGhpcy5DdHIgICAgICAgPSBDdHJcbiAgICB0aGlzLm5hbWVzICAgICA9IG5hbWVzXG4gICAgdGhpcy5uYW1lMnNlbWkgPSBuYW1lMnNlbWlcbiAgICB0aGlzLnNlbWkybmFtZSA9IHNlbWkybmFtZVxuICB9XG5cbiAgcGFyc2Uoc3RyKSB7XG4gICAgbGV0IG5hbWVcbiAgICBsZXQgYWNjc1xuICAgIGxldCBiYXNlXG5cbiAgICBpZiAodGhpcy5DdHIubmFtZSA9PT0gJ0ludGVydmFsJykge1xuICAgICAgW25hbWUsIGFjY3MsIGJhc2VdID0gbmV3IFJlZ0V4cChcbiAgICAgICAgYChbJHtBQ0NTLmZsYXR9fCR7QUNDUy5uYXR1cmFsfXwke0FDQ1Muc2hhcnB9XSopKFxcXFxkKilgXG4gICAgICApLmV4ZWMoc3RyKVxuXG4gICAgICBiYXNlID0gJycgKyAobW9kKCtiYXNlIC0gMSwgNykgKyAxKVxuICAgIH0gZWxzZSBpZiAodGhpcy5DdHIubmFtZSA9PT0gJ05vdGUnKSB7XG4gICAgICBbbmFtZSwgYmFzZSwgYWNjc10gPSBuZXcgUmVnRXhwKFxuICAgICAgICBgKCR7dGhpcy5uYW1lcy5qb2luKCd8Jyl9KShbJHtBQ0NTLmZsYXR9fCR7QUNDUy5uYXR1cmFsfXwke0FDQ1Muc2hhcnB9XSopYFxuICAgICAgKS5leGVjKHN0cilcbiAgICB9XG5cbiAgICBhY2NzICAgICA9IGFjY3Myc2VtaShhY2NzKVxuICAgIGxldCBzZW1pID0gbW9kKHRoaXMubmFtZTJzZW1pW2Jhc2VdICsgYWNjcywgMTIpXG5cbiAgICByZXR1cm4geyBuYW1lLCBiYXNlLCBhY2NzLCBzZW1pIH1cbiAgfVxuXG4gIGZyb21TZW1pKHNlbWkpIHtcbiAgICBsZXQgaW50diA9IG5ldyB0aGlzLkN0cih0aGlzLnNlbWkybmFtZShzZW1pKSlcbiAgICBsZXQgbmFtZSA9IFN0cmluZyhpbnR2Lm5hbWUpXG4gICAgbGV0IGJhc2UgPSBTdHJpbmcoaW50di5iYXNlKVxuICAgIGxldCBhY2NzID0gTnVtYmVyKGludHYuYWNjcylcbiAgICAgICAgc2VtaSA9IE51bWJlcihpbnR2LnNlbWkpXG5cbiAgICByZXR1cm4geyBuYW1lLCBiYXNlLCBhY2NzLCBzZW1pIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtSGVscGVyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWxwZXJzL0l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSU5UVlMsIE5PVEVTIH0gZnJvbSAnLi9zeW1ib2xzJ1xuaW1wb3J0IHsgYXJyMml0ZW1zIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBOb3RlIGZyb20gJy4uL05vdGUnXG5pbXBvcnQgSW50ZXJ2YWwgZnJvbSAnLi4vSW50ZXJ2YWwnXG5cbmNsYXNzIE1vZGVIZWxwZXIge1xuICBzdGF0aWMgbm90ZXMocm9vdCwgaW50dnMpIHtcbiAgICByZXR1cm4gaW50dnMubWFwKGludHYgPT4gcm9vdC5hZGQoaW50dikpXG4gIH1cblxuICBzdGF0aWMgc2NhbGUocm9vdCwgaW50dnMpIHtcbiAgICByb290ICAgICAgPSByb290LmNsb25lKClcbiAgICBpbnR2cyAgICAgPSBJbnRlcnZhbC5jbG9uZShpbnR2cylcbiAgICBsZXQgcHJldiAgPSBuZXcgSW50ZXJ2YWwoSU5UVlNbMF0pXG5cbiAgICBpbnR2cy5wdXNoKHByZXYpXG4gICAgaW50dnMgPSBpbnR2cy5tYXAoaW50diA9PiB7XG4gICAgICBjb25zdCBzdWIgPSBpbnR2LnN1YihwcmV2KVxuICAgICAgcHJldiA9IGludHZcblxuICAgICAgcmV0dXJuIHN1YlxuICAgIH0pXG5cbiAgICBpbnR2cy5zaGlmdCgpXG4gICAgcmV0dXJuIG5ldyBNb2RlLlNjYWxlKHJvb3QsIGludHZzKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1JPT1QgID0gbmV3IE5vdGUoTk9URVNbMF0pXG5leHBvcnQgY29uc3QgREVGQVVMVF9JTlRWUyA9IGFycjJpdGVtcyhJbnRlcnZhbCwgSU5UVlMpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVIZWxwZXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvTW9kZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVycy9JdGVtJ1xuaW1wb3J0IHsgTk9URVMgfSBmcm9tICcuL2hlbHBlcnMvc3ltYm9scydcbmltcG9ydCB7IE5PVEUyU0VNSSwgc2VtaTJub3RlIH0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuXG5jbGFzcyBOb3RlIGV4dGVuZHMgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGFyZyA9IE5PVEVTWzBdKSB7XG4gICAgc3VwZXIoYXJnKVxuICB9XG59XG5cbk5vdGUuaGVscGVyID0gbmV3IEhlbHBlcihOb3RlLCBOT1RFUywgTk9URTJTRU1JLCBzZW1pMm5vdGUpXG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL05vdGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGFyZykge1xuICAgIGxldCBuYW1lXG4gICAgbGV0IGJhc2VcbiAgICBsZXQgYWNjc1xuICAgIGxldCBzZW1pXG5cbiAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICh7IG5hbWUsIGJhc2UsIGFjY3MsIHNlbWkgfSA9IHRoaXMuY29uc3RydWN0b3IuaGVscGVyLnBhcnNlKGFyZykpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgICAgKHsgbmFtZSwgYmFzZSwgYWNjcywgc2VtaSB9ID0gdGhpcy5jb25zdHJ1Y3Rvci5oZWxwZXIuZnJvbVNlbWkoYXJnKSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfUBjb25zdHJ1Y3RvcjogYFxuICAgICAgKyBgYXJnIG11c3QgYmUgc3RyaW5nIG9yIG51bWJlciwgZ290OmBcbiAgICAgICwgYXJnXG4gICAgICApXG4gICAgICB0aHJvdyAnJ1xuICAgIH1cblxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmJhc2UgPSBiYXNlXG4gICAgdGhpcy5hY2NzID0gYWNjc1xuICAgIHRoaXMuc2VtaSA9IHNlbWlcbiAgfVxuXG4gIHRlc3QoKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKClcbiAgfVxuXG4gIGFkZChpdGVtKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMuc2VtaSArIGl0ZW0uc2VtaSlcbiAgfVxuXG4gIHN1YihpdGVtKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMuc2VtaSAtIGl0ZW0uc2VtaSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLm5hbWUpXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5jbG9uZSgpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSU5UVlMsIE5PVEVTIH0gZnJvbSAnLi9zeW1ib2xzJ1xuaW1wb3J0IHsgU0VNSTJJTlRWLCBmYWN0b3JzLCBhcnIyaXRlbXMgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE5vdGUgZnJvbSAnLi4vTm90ZSdcbmltcG9ydCBJbnRlcnZhbCBmcm9tICcuLi9JbnRlcnZhbCdcblxuY2xhc3MgU2NhbGVIZWxwZXIge1xuICBzdGF0aWMgbm90ZXMobW9kZXMpIHtcbiAgICByZXR1cm4gTm90ZS5jbG9uZShtb2Rlc1swXS5ub3RlcylcbiAgfVxuXG4gIHN0YXRpYyBtb2Rlcyhyb290LCBpbnR2cykge1xuICAgIHJvb3QgICAgICAgICAgID0gcm9vdC5jbG9uZSgpXG4gICAgaW50dnMgICAgICAgICAgPSBJbnRlcnZhbC5jbG9uZShpbnR2cylcbiAgICBjb25zdCBzeW1tZXRyeSA9IFNjYWxlSGVscGVyLnN5bW1ldHJ5KGludHZzKVxuICAgIGxldCBtb2RlcyAgICAgID0gW1NjYWxlSGVscGVyLm1vZGUocm9vdCwgaW50dnMpXVxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzeW1tZXRyeTsgKytpKSB7XG4gICAgICBpbnR2cy5wdXNoKGludHZzLnNoaWZ0KCkpXG4gICAgICBtb2Rlcy5wdXNoKFxuICAgICAgICBTY2FsZUhlbHBlci5tb2RlKFxuICAgICAgICAgIHJvb3QuYWRkKG1vZGVzWzBdLm5vdGVzW2ldKVxuICAgICAgICAsIGludHZzKVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBtb2Rlc1xuICB9XG5cbiAgc3RhdGljIG1vZGUocm9vdCwgaW50dnMpIHtcbiAgICByb290ICAgICA9IHJvb3QuY2xvbmUoKVxuICAgIGludHZzICAgID0gSW50ZXJ2YWwuY2xvbmUoaW50dnMpXG4gICAgbGV0IHByZXYgPSBuZXcgSW50ZXJ2YWwoSU5UVlNbMF0pXG5cbiAgICBpbnR2cy51bnNoaWZ0KHByZXYpXG4gICAgaW50dnMgPSBpbnR2cy5tYXAoaW50diA9PiB7XG4gICAgICBjb25zdCBhZGQgPSBpbnR2LmFkZChwcmV2KVxuICAgICAgcHJldiA9IGFkZFxuXG4gICAgICByZXR1cm4gYWRkXG4gICAgfSlcblxuICAgIGludHZzLnBvcCgpXG4gICAgcmV0dXJuIG5ldyBTY2FsZUhlbHBlci5Nb2RlKHJvb3QsIGludHZzKVxuICB9XG5cbiAgc3RhdGljIHN5bW1ldHJ5KGludHZzKSB7XG4gICAgY29uc3QgbCAgICAgPSBpbnR2cy5sZW5ndGhcbiAgICBjb25zdCBzZW1pcyA9IGludHZzLm1hcChpbnR2ID0+IGludHYuc2VtaSlcbiAgICBjb25zdCBmY3RycyA9IGZhY3RvcnMobClcblxuICAgIGZvciAobGV0IGZhY3RvciBvZiBmY3Rycykge1xuICAgICAgY29uc3QgcGF0dGVybiA9IHNlbWlzLnNsaWNlKDAsIGZhY3RvcilcbiAgICAgIGNvbnN0IHRlc3QgICAgPSBBcnJheS5wcm90b3R5cGVcbiAgICAgICAgLmNvbmNhdC5hcHBseShbXSwgQXJyYXkobCAvIGZhY3RvcikuZmlsbChwYXR0ZXJuKSlcblxuICAgICAgaWYgKHNlbWlzLmpvaW4oJyAnKSA9PT0gdGVzdC5qb2luKCcgJykpXG4gICAgICAgIHJldHVybiBmYWN0b3JcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUk9PVCAgPSBuZXcgTm90ZShOT1RFU1swXSlcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOVFZTID0gYXJyMml0ZW1zKEludGVydmFsLCBbXG4gICAgU0VNSTJJTlRWWzJdXG4gICwgU0VNSTJJTlRWWzJdXG4gICwgU0VNSTJJTlRWWzFdXG4gICwgU0VNSTJJTlRWWzJdXG4gICwgU0VNSTJJTlRWWzJdXG4gICwgU0VNSTJJTlRWWzJdXG4gICwgU0VNSTJJTlRWWzFdXG4gIF1cbilcblxuZXhwb3J0IGRlZmF1bHQgU2NhbGVIZWxwZXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvU2NhbGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wibmFtZVwiOlwiU3VzcGVuZGVkXCIsXCJpbnRlcnZhbHNcIjpcIjIgNCA0XCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJzdXMyXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiA1XCJ9LHtcIm5hbWVcIjpcInN1czRcIixcImludGVydmFsc1wiOlwiMSA0IDVcIn1dfSx7XCJuYW1lXCI6XCLCsFwiLFwiaW50ZXJ2YWxzXCI6XCLima0zIOKZrTMg4pmvNFwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiwrBcIixcImludGVydmFsc1wiOlwiMSDima0zIOKZrTVcIn1dfSx7XCJuYW1lXCI6XCItXCIsXCJpbnRlcnZhbHNcIjpcIuKZrTMgMyA0XCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCItXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyA1XCJ9XX0se1wibmFtZVwiOlwizpRcIixcImludGVydmFsc1wiOlwiMyDima0zIDRcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIs6UXCIsXCJpbnRlcnZhbHNcIjpcIjEgMyA1XCJ9XX0se1wibmFtZVwiOlwiK1wiLFwiaW50ZXJ2YWxzXCI6XCIzIDMg4pmtNFwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiK1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDMg4pmvNVwifV19LHtcIm5hbWVcIjpcIsKwN1wiLFwiaW50ZXJ2YWxzXCI6XCLima0zIOKZrTMg4pmtMyDima0zXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCLCsDdcIixcImludGVydmFsc1wiOlwiMSDima0zIOKZrTUg4pmt4pmtN1wifV19LHtcIm5hbWVcIjpcIsO4XCIsXCJpbnRlcnZhbHNcIjpcIuKZrTMg4pmtMyAzIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIsO4XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyDima01IOKZrTdcIn0se1wibmFtZVwiOlwiLTZcIixcImludGVydmFsc1wiOlwiMSDima0zIDUgNlwifV19LHtcIm5hbWVcIjpcIi03XCIsXCJpbnRlcnZhbHNcIjpcIuKZrTMgMyDima0zIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIi03XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyA1IOKZrTdcIn0se1wibmFtZVwiOlwizpQ2XCIsXCJpbnRlcnZhbHNcIjpcIjEgMyA1IDZcIn1dfSx7XCJuYW1lXCI6XCItzpQ3XCIsXCJpbnRlcnZhbHNcIjpcIuKZrTMgMyAzIOKZrTJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIi3OlDdcIixcImludGVydmFsc1wiOlwiMSDima0zIDUgN1wifV19LHtcIm5hbWVcIjpcIjfima01XCIsXCJpbnRlcnZhbHNcIjpcIjMgMiAzIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIjfima01XCIsXCJpbnRlcnZhbHNcIjpcIjEgMyDima01IOKZrTdcIn1dfSx7XCJuYW1lXCI6XCI3XCIsXCJpbnRlcnZhbHNcIjpcIjMg4pmtMyDima0zIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIjdcIixcImludGVydmFsc1wiOlwiMSAzIDUg4pmtN1wifV19LHtcIm5hbWVcIjpcIjfima81XCIsXCJpbnRlcnZhbHNcIjpcIjMgMyAyIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIjfima81XCIsXCJpbnRlcnZhbHNcIjpcIjEgMyDima81IOKZrTdcIn1dfSx7XCJuYW1lXCI6XCLOlDdcIixcImludGVydmFsc1wiOlwiMyDima0zIDMg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwizpQ3XCIsXCJpbnRlcnZhbHNcIjpcIjEgMyA1IDdcIn1dfV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaWN0L2Nob3Jkcy55bWxcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wibmFtZVwiOlwiUGVudGF0b25pYyAoRGlhdG9uaWMpXCIsXCJpbnRlcnZhbHNcIjpcIjIgMiDima0zIDIg4pmtM1wiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiUGVudGF0b25pYyBNYWpvclwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgMyA1IDZcIn0se1wibmFtZVwiOlwiUGVudGF0b25pYyBuwrAyIC8gRG9yaWFuKG5vMywxMylcIixcImludGVydmFsc1wiOlwiMSAyIDQgNSDima03XCJ9LHtcIm5hbWVcIjpcIlBlbnRhdG9uaWMgbsKwMyAvIFBocnlnaWFuKG5vNSw5KVwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTMgNCDima02IOKZrTdcIn0se1wibmFtZVwiOlwiUGVudGF0b25pYyBuwrA0IC8gTWl4b2x5ZGlhbihubzMsNylcIixcImludGVydmFsc1wiOlwiMSAyIDQgNSA2XCJ9LHtcIm5hbWVcIjpcIlBlbnRhdG9uaWMgTWlub3JcIixcImludGVydmFsc1wiOlwiMSDima0zIDQgNSDima03XCJ9XX0se1wibmFtZVwiOlwiV2hvbGUgVG9uZVwiLFwiaW50ZXJ2YWxzXCI6XCIyIDIgMiAyIDIgMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiV2hvbGUgVG9uZSAoNylcIixcImludGVydmFsc1wiOlwiMSAyIDMg4pmtNSDima81IOKZrTdcIn1dfSx7XCJuYW1lXCI6XCJEaWF0b25pY1wiLFwiaW50ZXJ2YWxzXCI6XCIyIDIg4pmtMiAyIDIgMiDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJJb25pYW5cIixcImludGVydmFsc1wiOlwiMSAyIDMgNCA1IDYgN1wifSx7XCJuYW1lXCI6XCJEb3JpYW5cIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMgNCA1IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJQaHJ5Z2lhblwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmtMyA0IDUg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhblwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgMyDima80IDUgNiA3XCJ9LHtcIm5hbWVcIjpcIk1peG9seWRpYW5cIixcImludGVydmFsc1wiOlwiMSAyIDMgNCA1IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJBZW9saWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQgNSDima02IOKZrTdcIn0se1wibmFtZVwiOlwiTG9jcmlhblwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmtMyA0IOKZrTUg4pmtNiDima03XCJ9XX0se1wibmFtZVwiOlwiRG91YmxlIEhhcm1vbmljIE1ham9yXCIsXCJpbnRlcnZhbHNcIjpcIjIg4pmtMyAyIDIg4pmtMiDima0zIOKZrTJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIkRvdWJsZSBIYXJtb25pYyBNYWpvciAvIElvbmlhbiDima05IOKZrTEzXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiAzIDQgNSDima02IDdcIn0se1wibmFtZVwiOlwiTHlkaWFuIOKZrzkg4pmvMTNcIixcImludGVydmFsc1wiOlwiMSDima8yIDMg4pmvNCA1IOKZrzYgN1wifSx7XCJuYW1lXCI6XCJEb3VibGUgSGFybW9uaWMgTWFqb3IgbsKwM1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmvMiAzIDUg4pmtNiDima3ima03XCJ9LHtcIm5hbWVcIjpcIkh1bmdhcmlhbiBNaW5vclwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIgMyDima80IDUg4pmtNiA3XCJ9LHtcIm5hbWVcIjpcIk9yaWVudGFsIC8gTWl4b2x5ZGlhbiDima01IOKZrTlcIixcImludGVydmFsc1wiOlwiMSDima0yIDMgNCDima01IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJJb25pYW4g4pmvNSDima85XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmvMiAzIDQg4pmvNSA2IDdcIn0se1wibmFtZVwiOlwiTG9jcmlhbiDima3ima0zIOKZreKZrTdcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZreKZrTMgNCDima01IOKZrTYg4pmt4pmtN1wifV19LHtcIm5hbWVcIjpcIkhhcm1vbmljIE1ham9yXCIsXCJpbnRlcnZhbHNcIjpcIjIgMiDima0yIDIg4pmtMiDima0zIOKZrTJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIkhhcm1vbmljIE1ham9yIC8gSW9uaWFuIOKZrTEzXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIDQgNSDima02IDdcIn0se1wibmFtZVwiOlwiRG9yaWFuIOKZrTVcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMgNCDima01IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJIYXJtb25pYyBNYWpvciBuwrAzXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima8yIDMgNSDima02IOKZrTdcIn0se1wibmFtZVwiOlwiTHlkaWFuIOKZrTNcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMg4pmvNCA1IDYgN1wifSx7XCJuYW1lXCI6XCJNaXhvbHlkaWFuIOKZrTlcIixcImludGVydmFsc1wiOlwiMSDima0yIDMgNCA1IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJMeWRpYW4g4pmvNSDima85XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmvMiAzIOKZrzQg4pmvNSA2IDdcIn0se1wibmFtZVwiOlwiTG9jcmlhbiDima3ima03XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima0zIDQg4pmtNSDima02IOKZreKZrTdcIn1dfSx7XCJuYW1lXCI6XCJIYXJtb25pYyBNaW5vclwiLFwiaW50ZXJ2YWxzXCI6XCIyIOKZrTIgMiAyIOKZrTIg4pmtMyDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJIYXJtb25pYyBNaW5vciAvIEFlb2xpYW4g4pmuN1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyA0IDUg4pmtNiA3XCJ9LHtcIm5hbWVcIjpcIkxvY3JpYW4g4pmuMTNcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrTMgNCDima01IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJJb25pYW4g4pmvNVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgMyA0IOKZrzUgNiA3XCJ9LHtcIm5hbWVcIjpcIkRvcmlhbiDima8xMVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyDima80IDUgNiDima03XCJ9LHtcIm5hbWVcIjpcIlBocnlnaWFuIERvbWluYW50XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiAzIDQgNSDima02IOKZrTdcIn0se1wibmFtZVwiOlwiTHlkaWFuIOKZrzlcIixcImludGVydmFsc1wiOlwiMSDima8yIDMg4pmvNCA1IDYgN1wifSx7XCJuYW1lXCI6XCJTdXBlckxvY3JpYW4gRGltaW5pc2hlZFwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmvMiAzIOKZrTUg4pmvNSDima3ima03XCJ9XX0se1wibmFtZVwiOlwiTWVsb2RpYyBNaW5vclwiLFwiaW50ZXJ2YWxzXCI6XCIyIOKZrTIgMiAyIDIgMiDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJNZWxvZGljIE1pbm9yIC8gRG9yaWFuIOKZrjdcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMgNCA1IDYgN1wifSx7XCJuYW1lXCI6XCJQaHJ5Z2lhbiDima4xMyAvIERvcmlhbiDima0yXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima0zIDQgNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiTHlkaWFuIOKZrzVcIixcImludGVydmFsc1wiOlwiMSAyIDMg4pmvNCDima81IDYgN1wifSx7XCJuYW1lXCI6XCJMeWRpYW4gRG9tbWluYW50IC8gTWl4b2x5ZGlhbiDima8xMVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgMyDima80IDUgNiDima03XCJ9LHtcIm5hbWVcIjpcIk1peG9seWRpYW4g4pmtMTMgLyBBZW9saWFuIOKZrjNcIixcImludGVydmFsc1wiOlwiMSAyIDMgNCA1IOKZrTYg4pmtN1wifSx7XCJuYW1lXCI6XCJBZW9saWFuIOKZrTUgLyBMb2NyaWFuIOKZrjlcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMgNCDima01IOKZrTYg4pmtN1wifSx7XCJuYW1lXCI6XCJBbHRlcmVkIC8gU3VwZXJMb2NyaWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima8yIDMg4pmtNSDima81IOKZrTdcIn1dfSx7XCJuYW1lXCI6XCJEb3VibGUgRGltaW5pc2hlZFwiLFwiaW50ZXJ2YWxzXCI6XCIyIOKZrTIgMiDima0yIDIg4pmtMiAyIOKZrTJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIldob2xlIEhhbGYgKMKwKVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyA0IOKZrTUg4pmvNSDima3ima03IDdcIn0se1wibmFtZVwiOlwiSGFsZiBXaG9sZSAoNylcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrzIgMyDima01IDUgNiDima03XCJ9XX1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGljdC9zY2FsZXMueW1sXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBoZWxwZXIsIHsgREVGQVVMVF9ST09ULCBERUZBVUxUX0lOVFZTIH0gZnJvbSAnLi9oZWxwZXJzL01vZGUnXG5pbXBvcnQgU2NhbGVIZWxwZXIgZnJvbSAnLi9oZWxwZXJzL1NjYWxlJ1xuXG5jbGFzcyBNb2RlIHtcbiAgY29uc3RydWN0b3Iocm9vdCA9IERFRkFVTFRfUk9PVCwgaW50dnMgPSBERUZBVUxUX0lOVFZTKSB7XG4gICAgdGhpcy5yb290ICA9IHJvb3RcbiAgICB0aGlzLmludHZzID0gaW50dnNcbiAgICB0aGlzLm5vdGVzID0gaGVscGVyLm5vdGVzKHRoaXMucm9vdCwgdGhpcy5pbnR2cylcbiAgfVxuXG4gIHNjYWxlKCkge1xuICAgIHJldHVybiBoZWxwZXIuc2NhbGUodGhpcy5yb290LCB0aGlzLmludHZzKVxuICB9XG5cbiAgZG9lc0luY2x1ZGUobW9kZSkge1xuICAgIGlmICh0aGlzLmludHZzLmxlbmd0aCA8PSBtb2RlLmludHZzLmxlbmd0aCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgc2VtaXMgPSB0aGlzLmludHZzLm1hcChpbnR2ID0+IGludHYuc2VtaSlcblxuICAgIGZvciAobGV0IGludHYgb2YgbW9kZS5pbnR2cykge1xuICAgICAgaWYoIXNlbWlzLmluY2x1ZGVzKGludHYuc2VtaSkpIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICB0b1N0cmluZyhzZW1pID0gZmFsc2UpIHtcbiAgICByZXR1cm4gdGhpcy5pbnR2c1xuICAgICAgLm1hcChpbnR2ID0+IHNlbWkgPyBpbnR2LnNlbWkgOiBpbnR2Lm5hbWUpXG4gICAgICAuam9pbignICcpXG4gIH1cbn1cblxuU2NhbGVIZWxwZXIuTW9kZSA9IE1vZGVcblxuZXhwb3J0IGRlZmF1bHQgTW9kZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTW9kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGhlbHBlciwgeyBERUZBVUxUX1JPT1QsIERFRkFVTFRfSU5UVlMgfSBmcm9tICcuL2hlbHBlcnMvU2NhbGUnXG5pbXBvcnQgTW9kZUhlbHBlciBmcm9tICcuL2hlbHBlcnMvTW9kZSdcblxuY2xhc3MgU2NhbGUge1xuICBjb25zdHJ1Y3Rvcihyb290ID0gREVGQVVMVF9ST09ULCBpbnR2cyA9IERFRkFVTFRfSU5UVlMpIHtcbiAgICB0aGlzLnJvb3QgID0gcm9vdFxuICAgIHRoaXMuaW50dnMgPSBpbnR2c1xuICAgIHRoaXMubW9kZXMgPSBoZWxwZXIubW9kZXModGhpcy5yb290LCB0aGlzLmludHZzKVxuICAgIHRoaXMubm90ZXMgPSBoZWxwZXIubm90ZXModGhpcy5tb2RlcylcbiAgfVxufVxuXG5Nb2RlSGVscGVyLlNjYWxlID0gU2NhbGVcblxuZXhwb3J0IGRlZmF1bHQgU2NhbGVcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1NjYWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgc3ltYm9scyBmcm9tICcuL2hlbHBlcnMvc3ltYm9scydcbmltcG9ydCB1dGlscyBmcm9tICcuL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgSXRlbUhlbHBlciBmcm9tICcuL2hlbHBlcnMvSXRlbSdcbmltcG9ydCBNb2RlSGVscGVyIGZyb20gJy4vaGVscGVycy9Nb2RlJ1xuaW1wb3J0IFNjYWxlSGVscGVyIGZyb20gJy4vaGVscGVycy9TY2FsZSdcbmltcG9ydCBjaG9yZHMgZnJvbSAnLi9kaWN0L2Nob3Jkcy55bWwnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4vZGljdC9zY2FsZXMueW1sJ1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJ1xuaW1wb3J0IEludGVydmFsIGZyb20gJy4vSW50ZXJ2YWwnXG5pbXBvcnQgTm90ZSBmcm9tICcuL05vdGUnXG5pbXBvcnQgTW9kZSBmcm9tICcuL01vZGUnXG5pbXBvcnQgU2NhbGUgZnJvbSAnLi9TY2FsZSdcbmltcG9ydCBEaWN0IGZyb20gJy4vRGljdCdcblxuY29uc3QgTXVKUyA9IHtcbiAgc3ltYm9sczogc3ltYm9sc1xuLCB1dGlsczogdXRpbHNcbiwgSXRlbUhlbHBlcjogSXRlbUhlbHBlclxuLCBNb2RlSGVscGVyOiBNb2RlSGVscGVyXG4sIFNjYWxlSGVscGVyOiBTY2FsZUhlbHBlclxuLCBjaG9yZHM6IGNob3Jkc1xuLCBzY2FsZXM6IHNjYWxlc1xuLCBJdGVtOiBJdGVtXG4sIEludGVydmFsOiBJbnRlcnZhbFxuLCBOb3RlOiBOb3RlXG4sIE1vZGU6IE1vZGVcbiwgU2NhbGU6IFNjYWxlXG4sIERpY3Q6IERpY3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVqU1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEludGVydmFsIGZyb20gJy4vSW50ZXJ2YWwnXG5pbXBvcnQgU2NhbGUgZnJvbSAnLi9TY2FsZSdcbmltcG9ydCBNb2RlIGZyb20gJy4vTW9kZSdcbmltcG9ydCB7IHN0cjJpdGVtcyB9IGZyb20gJy4vaGVscGVycy91dGlscydcbmltcG9ydCBTQ0FMRVMgZnJvbSAnLi9kaWN0L3NjYWxlcy55bWwnXG5pbXBvcnQgQ0hPUkRTIGZyb20gJy4vZGljdC9jaG9yZHMueW1sJ1xuXG5sZXQgRElDVCAgPSBbXVxubGV0IE1PREVTID0gW11cbmxldCBFUVVBTFMgID0ge31cbmxldCBTSU1JTEFSID0ge31cblxuY2xhc3MgRGljdCB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIERpY3QuX2luaXRTY2FsZXMoKVxuICAgIERpY3QuX21hdGNoSW5jbHVzaW9ucygpXG5cbiAgICByZXR1cm4gRGljdFxuICB9XG5cbiAgc3RhdGljIHNjYWxlcygpIHtcbiAgICByZXR1cm4gRElDVFxuICB9XG5cbiAgc3RhdGljIGdldChtb2RlKSB7XG4gICAgbGV0IGkgPSBFUVVBTFNbbW9kZS50b1N0cmluZygpXVxuICAgIGlmIChpKVxuICAgICAgcmV0dXJuIE1PREVTW2ldXG4gIH1cblxuICBzdGF0aWMgc2ltaWxhcihtb2RlKSB7XG4gICAgbGV0IGVxdWFscyA9IERpY3QuZ2V0KG1vZGUpXG4gICAgaWYgKGVxdWFscylcbiAgICAgIHJldHVybiBlcXVhbHNcblxuICAgIGxldCBpID0gU0lNSUxBUlttb2RlLnRvU3RyaW5nKHRydWUpXVxuICAgIGlmIChpKVxuICAgICAgcmV0dXJuIE1PREVTW2ldXG4gIH1cblxuICBzdGF0aWMgX2luaXRTY2FsZXMoKSB7XG4gICAgRElDVCA9XG4gICAgICBTQ0FMRVNcbiAgICAgICAgLm1hcChzY2FsZSA9PiBPYmplY3QuYXNzaWduKHNjYWxlLCB7IHR5cGU6ICdtb2RlJyB9KSlcbiAgICAgIC5jb25jYXQoXG4gICAgICAgIENIT1JEU1xuICAgICAgICAgIC5tYXAoY2hvcmQgPT4gT2JqZWN0LmFzc2lnbihjaG9yZCwgeyB0eXBlOiAnY2hvcmQnIH0pKVxuICAgICAgKVxuICAgICAgLm1hcChzY2FsZSA9PiB7XG4gICAgICAgIGxldCBuYW1lICA9IHNjYWxlLm5hbWVcbiAgICAgICAgbGV0IHR5cGUgID0gc2NhbGUudHlwZVxuICAgICAgICBsZXQgbW9kZXMgPSBzY2FsZS5tb2Rlc1xuXG4gICAgICAgIHNjYWxlICAgICAgPSBuZXcgU2NhbGUodW5kZWZpbmVkLCBzdHIyaXRlbXMoSW50ZXJ2YWwsIHNjYWxlLmludGVydmFscykpXG4gICAgICAgIHNjYWxlLm5hbWUgPSBuYW1lXG4gICAgICAgIHNjYWxlLnR5cGUgPSB0eXBlXG4gICAgICAgIERJQ1QucHVzaChzY2FsZSlcblxuICAgICAgICBzY2FsZS5tb2RlcyA9IG1vZGVzLm1hcChtb2RlID0+IHtcbiAgICAgICAgICBsZXQgbmFtZSA9IG1vZGUubmFtZVxuXG4gICAgICAgICAgbW9kZSAgICAgICA9IG5ldyBNb2RlKHVuZGVmaW5lZCwgc3RyMml0ZW1zKEludGVydmFsLCBtb2RlLmludGVydmFscykpXG4gICAgICAgICAgbW9kZS5uYW1lICA9IG5hbWVcbiAgICAgICAgICBtb2RlLnR5cGUgID0gdHlwZVxuICAgICAgICAgIG1vZGUuaW5jbHVkZXMgPSBbXVxuICAgICAgICAgIG1vZGUuaW5jbHVkZWQgPSBbXVxuICAgICAgICAgIDsoKG1vZGUsIHNjYWxlKSA9PiBtb2RlLnNjYWxlID0gKCkgPT4gc2NhbGUpKG1vZGUsIHNjYWxlKVxuICAgICAgICAgIE1PREVTLnB1c2gobW9kZSlcblxuICAgICAgICAgIHJldHVybiBtb2RlXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHNjYWxlXG4gICAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9tYXRjaEluY2x1c2lvbnMoKSB7XG4gICAgbGV0IGZvdW5kID0gW11cblxuICAgIE1PREVTLmZvckVhY2goKG1vZGUxLCBpKSA9PiB7XG4gICAgICBmb3VuZFtpXSA9IGZvdW5kW2ldIHx8IFtdXG5cbiAgICAgIEVRVUFMUyBbbW9kZTEudG9TdHJpbmcoKSAgICBdID0gaVxuICAgICAgU0lNSUxBUlttb2RlMS50b1N0cmluZyh0cnVlKV0gPSBpXG5cbiAgICAgIE1PREVTLmZvckVhY2goKG1vZGUyLCBqKSA9PiB7XG4gICAgICAgIGlmIChpID09PSBqKSByZXR1cm5cblxuICAgICAgICBmb3VuZFtqXSA9IGZvdW5kW2pdIHx8IFtdXG4gICAgICAgIGlmIChmb3VuZFtqXS5pbmNsdWRlcyhpKSkgcmV0dXJuXG5cbiAgICAgICAgaWYgKG1vZGUxLmRvZXNJbmNsdWRlKG1vZGUyKSkge1xuICAgICAgICAgIGZvdW5kW2ldLnB1c2goailcblxuICAgICAgICAgIG1vZGUxLmluY2x1ZGVzLnB1c2gobW9kZTIpXG4gICAgICAgICAgbW9kZTIuaW5jbHVkZWQucHVzaChtb2RlMSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbkRpY3QuaW5pdCgpXG5cbmV4cG9ydCBkZWZhdWx0IERpY3RcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0RpY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=