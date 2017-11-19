(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MuJS"] = factory();
	else
		root["MuJS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

module.exports = [{"name":"sus","intervals":"2 4 4","modes":[{"name":"sus2","intervals":"1 2 5"},{"name":"sus4","intervals":"1 4 5"}]},{"name":"°","intervals":"♭3 ♭3 ♯4","modes":[{"name":"°","intervals":"1 ♭3 ♭5"}]},{"name":"-","intervals":"♭3 3 4","modes":[{"name":"-","intervals":"1 ♭3 5"}]},{"name":"Δ","intervals":"3 ♭3 4","modes":[{"name":"Δ","intervals":"1 3 5"}]},{"name":"+","intervals":"3 3 ♭4","modes":[{"name":"+","intervals":"1 3 ♯5"}]},{"name":"°7","intervals":"♭3 ♭3 ♭3 ♭3","modes":[{"name":"°7","intervals":"1 ♭3 ♭5 ♭♭7"}]},{"name":"ø","intervals":"♭3 ♭3 3 2","modes":[{"name":"ø","intervals":"1 ♭3 ♭5 ♭7"},{"name":"-6","intervals":"1 ♭3 5 6"}]},{"name":"-7","intervals":"♭3 3 ♭3 2","modes":[{"name":"-7","intervals":"1 ♭3 5 ♭7"},{"name":"Δ6","intervals":"1 3 5 6"}]},{"name":"-Δ7","intervals":"♭3 3 3 ♭2","modes":[{"name":"-Δ7","intervals":"1 ♭3 5 7"}]},{"name":"7♭5","intervals":"3 2 3 2","modes":[{"name":"7♭5","intervals":"1 3 ♭5 ♭7"}]},{"name":"7","intervals":"3 ♭3 ♭3 2","modes":[{"name":"7","intervals":"1 3 5 ♭7"}]},{"name":"7♯5","intervals":"3 3 2 2","modes":[{"name":"7♯5","intervals":"1 3 ♯5 ♭7"}]},{"name":"Δ7","intervals":"3 ♭3 3 ♭2","modes":[{"name":"Δ7","intervals":"1 3 5 7"}]}]

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

  getDegree(intv) {
    for(let i of this.intvs) {
      if (i.semi === intv.semi) return i.clone()
    }

    return null
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

/* harmony default export */ __webpack_exports__["default"] = (MuJS);


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
      __WEBPACK_IMPORTED_MODULE_5__dict_chords_yml___default.a
        .map(chord => Object.assign(chord, { type: 'chord' }))
      .concat(
        __WEBPACK_IMPORTED_MODULE_4__dict_scales_yml___default.a
          .map(scale => Object.assign(scale, { type: 'mode' }))
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiOTg4ZmI4MTRiMWU0ZjljODY4ZCIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9zeW1ib2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9JdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL01vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpY3QvY2hvcmRzLnltbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGljdC9zY2FsZXMueW1sIiwid2VicGFjazovLy8uL3NyYy9Nb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9TY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGljdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ29CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEO0FBQ0E7QUFDQSw4Q0FBOEMsZUFBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6Im11anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNdUpTXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk11SlNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI5ODhmYjgxNGIxZTRmOWM4NjhkIiwiZXhwb3J0IGNvbnN0IEFDQ1MgPSB7XG4gIGZsYXQgICA6ICfima0nXG4sIG5hdHVyYWw6ICfima4nXG4sIHNoYXJwICA6ICfima8nXG59XG5cbmV4cG9ydCBjb25zdCBJTlRWUyA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNyddXG5leHBvcnQgY29uc3QgTk9URVMgPSBbJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdBJywgJ0InXVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEFDQ1MgOiBBQ0NTXG4sIElOVFZTOiBJTlRWU1xuLCBOT1RFUzogTk9URVNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvc3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBQ0NTLCBJTlRWUywgTk9URVMgfSBmcm9tICcuL3N5bWJvbHMnXG5cbmNvbnN0IHppcCA9IChrZXlzLCB2YWxzKSA9PiB7XG4gIGxldCByZXQgPSB7fVxuXG4gIGZvciAobGV0IGkgaW4ga2V5cylcbiAgICByZXRba2V5c1tpXV0gPSB2YWxzW2ldXG5cbiAgcmV0dXJuIHJldFxufVxuXG5leHBvcnQgY29uc3QgbW9kID0gKGksIGopID0+ICgoaSAlIGopICsgaikgJSBqXG5cbmV4cG9ydCBjb25zdCBmYWN0b3JzID0gKG51bSkgPT4ge1xuICBsZXQgZmFjdG9ycyA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5hYnMobnVtLzIpOyArK2kpIHtcbiAgICBpZiAobnVtICUgaSA9PT0gMCkgZmFjdG9ycy5wdXNoKGkpXG4gIH1cblxuICBmYWN0b3JzLnB1c2gobnVtKVxuICByZXR1cm4gZmFjdG9yc1xufVxuXG5leHBvcnQgY29uc3QgYWNjczJzZW1pID0gKGFjY3MpID0+IHtcbiAgYWNjcyA9IGFjY3MucmVwbGFjZShBQ0NTLm5hdHVyYWwsICcnKVxuICBsZXQgaSA9IGFjY3MubGVuZ3RoXG4gICAgLSAyICogKGFjY3MubWF0Y2gobmV3IFJlZ0V4cChgJHtBQ0NTLmZsYXR9YCwgJ2cnKSkgfHwgW10pLmxlbmd0aFxuXG4gIHJldHVybiBpXG59XG5cbmV4cG9ydCBjb25zdCBhcnIyaXRlbXMgPSAoQ3RyLCBhcnIpID0+IGFyci5tYXAoZSA9PiBuZXcgQ3RyKGUpKVxuZXhwb3J0IGNvbnN0IHN0cjJpdGVtcyA9IChDdHIsIHN0cikgPT4gYXJyMml0ZW1zKEN0ciwgc3RyLnNwbGl0KCcgJykpXG5cbmV4cG9ydCBjb25zdCBJTlRWMlNFTUkgPSB6aXAoSU5UVlMsIFswLCAyLCA0LCA1LCA3LCA5LCAxMV0pXG5leHBvcnQgY29uc3QgTk9URTJTRU1JID0gemlwKE5PVEVTLCBbMCwgMiwgNCwgNSwgNywgOSwgMTFdKVxuXG5leHBvcnQgY29uc3QgU0VNSTJJTlRWID0gW1xuICAgICAgICAgICAgICBgJHtJTlRWU1swXX1gXG4sIGAke0FDQ1MuZmxhdH0ke0lOVFZTWzFdfWBcbiwgICAgICAgICAgICAgYCR7SU5UVlNbMV19YFxuLCBgJHtBQ0NTLmZsYXR9JHtJTlRWU1syXX1gXG4sICAgICAgICAgICAgIGAke0lOVFZTWzJdfWBcbiwgICAgICAgICAgICAgYCR7SU5UVlNbM119YFxuLCBgJHtBQ0NTLmZsYXR9JHtJTlRWU1s0XX1gXG4sICAgICAgICAgICAgIGAke0lOVFZTWzRdfWBcbiwgYCR7QUNDUy5mbGF0fSR7SU5UVlNbNV19YFxuLCAgICAgICAgICAgICBgJHtJTlRWU1s1XX1gXG4sIGAke0FDQ1MuZmxhdH0ke0lOVFZTWzZdfWBcbiwgICAgICAgICAgICAgYCR7SU5UVlNbNl19YFxuXVxuXG5leHBvcnQgY29uc3QgU0VNSTJOT1RFID0gW1xuICBgJHtOT1RFU1swXX1gXG4sIGAke05PVEVTWzBdfSR7QUNDUy5zaGFycH1gXG4sIGAke05PVEVTWzFdfWBcbiwgYCR7Tk9URVNbMV19JHtBQ0NTLnNoYXJwfWBcbiwgYCR7Tk9URVNbMl19YFxuLCBgJHtOT1RFU1szXX1gXG4sIGAke05PVEVTWzNdfSR7QUNDUy5zaGFycH1gXG4sIGAke05PVEVTWzRdfWBcbiwgYCR7Tk9URVNbNF19JHtBQ0NTLnNoYXJwfWBcbiwgYCR7Tk9URVNbNV19YFxuLCBgJHtOT1RFU1s1XX0ke0FDQ1Muc2hhcnB9YFxuLCBgJHtOT1RFU1s2XX1gXG5dXG5cbmV4cG9ydCBjb25zdCBzZW1pMmludHYgPSAoaW50KSA9PiBTRU1JMklOVFZbbW9kKGludCwgMTIpXVxuZXhwb3J0IGNvbnN0IHNlbWkybm90ZSA9IChpbnQpID0+IFNFTUkyTk9URVttb2QoaW50LCAxMildXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbW9kICAgICAgOiBtb2RcbiwgZmFjdG9ycyAgOiBmYWN0b3JzXG4sIGFjY3Myc2VtaTogYWNjczJzZW1pXG4sIGFycjJpdGVtczogYXJyMml0ZW1zXG4sIHN0cjJpdGVtczogc3RyMml0ZW1zXG4sIElOVFYyU0VNSTogSU5UVjJTRU1JXG4sIE5PVEUyU0VNSTogTk9URTJTRU1JXG4sIFNFTUkySU5UVjogU0VNSTJJTlRWXG4sIFNFTUkyTk9URTogU0VNSTJOT1RFXG4sIHNlbWkyaW50djogc2VtaTJpbnR2XG4sIHNlbWkybm90ZTogc2VtaTJub3RlXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWxwZXJzL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXJzL0l0ZW0nXG5pbXBvcnQgeyBJTlRWUyB9IGZyb20gJy4vaGVscGVycy9zeW1ib2xzJ1xuaW1wb3J0IHsgSU5UVjJTRU1JLCBzZW1pMmludHYgfSBmcm9tICcuL2hlbHBlcnMvdXRpbHMnXG5cbmNsYXNzIEludGVydmFsIGV4dGVuZHMgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGFyZyA9IElOVFZTWzBdKSB7XG4gICAgc3VwZXIoYXJnKVxuICB9XG59XG5cbkludGVydmFsLmhlbHBlciA9IG5ldyBIZWxwZXIoSW50ZXJ2YWwsIElOVFZTLCBJTlRWMlNFTUksIHNlbWkyaW50dilcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJ2YWxcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ludGVydmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IG1vZCwgYWNjczJzZW1pIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IEFDQ1MgfSBmcm9tICcuL3N5bWJvbHMnXG5cbmNsYXNzIEl0ZW1IZWxwZXIge1xuICBjb25zdHJ1Y3RvcihDdHIsIG5hbWVzLCBuYW1lMnNlbWksIHNlbWkybmFtZSkge1xuICAgIHRoaXMuQ3RyICAgICAgID0gQ3RyXG4gICAgdGhpcy5uYW1lcyAgICAgPSBuYW1lc1xuICAgIHRoaXMubmFtZTJzZW1pID0gbmFtZTJzZW1pXG4gICAgdGhpcy5zZW1pMm5hbWUgPSBzZW1pMm5hbWVcbiAgfVxuXG4gIHBhcnNlKHN0cikge1xuICAgIGxldCBuYW1lXG4gICAgbGV0IGFjY3NcbiAgICBsZXQgYmFzZVxuXG4gICAgaWYgKHRoaXMuQ3RyLm5hbWUgPT09ICdJbnRlcnZhbCcpIHtcbiAgICAgIFtuYW1lLCBhY2NzLCBiYXNlXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgIGAoWyR7QUNDUy5mbGF0fXwke0FDQ1MubmF0dXJhbH18JHtBQ0NTLnNoYXJwfV0qKShcXFxcZCopYFxuICAgICAgKS5leGVjKHN0cilcblxuICAgICAgYmFzZSA9ICcnICsgKG1vZCgrYmFzZSAtIDEsIDcpICsgMSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuQ3RyLm5hbWUgPT09ICdOb3RlJykge1xuICAgICAgW25hbWUsIGJhc2UsIGFjY3NdID0gbmV3IFJlZ0V4cChcbiAgICAgICAgYCgke3RoaXMubmFtZXMuam9pbignfCcpfSkoWyR7QUNDUy5mbGF0fXwke0FDQ1MubmF0dXJhbH18JHtBQ0NTLnNoYXJwfV0qKWBcbiAgICAgICkuZXhlYyhzdHIpXG4gICAgfVxuXG4gICAgYWNjcyAgICAgPSBhY2NzMnNlbWkoYWNjcylcbiAgICBsZXQgc2VtaSA9IG1vZCh0aGlzLm5hbWUyc2VtaVtiYXNlXSArIGFjY3MsIDEyKVxuXG4gICAgcmV0dXJuIHsgbmFtZSwgYmFzZSwgYWNjcywgc2VtaSB9XG4gIH1cblxuICBmcm9tU2VtaShzZW1pKSB7XG4gICAgbGV0IGludHYgPSBuZXcgdGhpcy5DdHIodGhpcy5zZW1pMm5hbWUoc2VtaSkpXG4gICAgbGV0IG5hbWUgPSBTdHJpbmcoaW50di5uYW1lKVxuICAgIGxldCBiYXNlID0gU3RyaW5nKGludHYuYmFzZSlcbiAgICBsZXQgYWNjcyA9IE51bWJlcihpbnR2LmFjY3MpXG4gICAgICAgIHNlbWkgPSBOdW1iZXIoaW50di5zZW1pKVxuXG4gICAgcmV0dXJuIHsgbmFtZSwgYmFzZSwgYWNjcywgc2VtaSB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbUhlbHBlclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVscGVycy9JdGVtLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElOVFZTLCBOT1RFUyB9IGZyb20gJy4vc3ltYm9scydcbmltcG9ydCB7IGFycjJpdGVtcyB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTm90ZSBmcm9tICcuLi9Ob3RlJ1xuaW1wb3J0IEludGVydmFsIGZyb20gJy4uL0ludGVydmFsJ1xuXG5jbGFzcyBNb2RlSGVscGVyIHtcbiAgc3RhdGljIG5vdGVzKHJvb3QsIGludHZzKSB7XG4gICAgcmV0dXJuIGludHZzLm1hcChpbnR2ID0+IHJvb3QuYWRkKGludHYpKVxuICB9XG5cbiAgc3RhdGljIHNjYWxlKHJvb3QsIGludHZzKSB7XG4gICAgcm9vdCAgICAgID0gcm9vdC5jbG9uZSgpXG4gICAgaW50dnMgICAgID0gSW50ZXJ2YWwuY2xvbmUoaW50dnMpXG4gICAgbGV0IHByZXYgID0gbmV3IEludGVydmFsKElOVFZTWzBdKVxuXG4gICAgaW50dnMucHVzaChwcmV2KVxuICAgIGludHZzID0gaW50dnMubWFwKGludHYgPT4ge1xuICAgICAgY29uc3Qgc3ViID0gaW50di5zdWIocHJldilcbiAgICAgIHByZXYgPSBpbnR2XG5cbiAgICAgIHJldHVybiBzdWJcbiAgICB9KVxuXG4gICAgaW50dnMuc2hpZnQoKVxuICAgIHJldHVybiBuZXcgTW9kZS5TY2FsZShyb290LCBpbnR2cylcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9ST09UICA9IG5ldyBOb3RlKE5PVEVTWzBdKVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5UVlMgPSBhcnIyaXRlbXMoSW50ZXJ2YWwsIElOVFZTKVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlSGVscGVyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWxwZXJzL01vZGUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcnMvSXRlbSdcbmltcG9ydCB7IE5PVEVTIH0gZnJvbSAnLi9oZWxwZXJzL3N5bWJvbHMnXG5pbXBvcnQgeyBOT1RFMlNFTUksIHNlbWkybm90ZSB9IGZyb20gJy4vaGVscGVycy91dGlscydcblxuY2xhc3MgTm90ZSBleHRlbmRzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihhcmcgPSBOT1RFU1swXSkge1xuICAgIHN1cGVyKGFyZylcbiAgfVxufVxuXG5Ob3RlLmhlbHBlciA9IG5ldyBIZWxwZXIoTm90ZSwgTk9URVMsIE5PVEUyU0VNSSwgc2VtaTJub3RlKVxuXG5leHBvcnQgZGVmYXVsdCBOb3RlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Ob3RlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihhcmcpIHtcbiAgICBsZXQgbmFtZVxuICAgIGxldCBiYXNlXG4gICAgbGV0IGFjY3NcbiAgICBsZXQgc2VtaVxuXG4gICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAoeyBuYW1lLCBiYXNlLCBhY2NzLCBzZW1pIH0gPSB0aGlzLmNvbnN0cnVjdG9yLmhlbHBlci5wYXJzZShhcmcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICh7IG5hbWUsIGJhc2UsIGFjY3MsIHNlbWkgfSA9IHRoaXMuY29uc3RydWN0b3IuaGVscGVyLmZyb21TZW1pKGFyZykpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGAke3RoaXMuY29uc3RydWN0b3IubmFtZX1AY29uc3RydWN0b3I6IGBcbiAgICAgICsgYGFyZyBtdXN0IGJlIHN0cmluZyBvciBudW1iZXIsIGdvdDpgXG4gICAgICAsIGFyZ1xuICAgICAgKVxuICAgICAgdGhyb3cgJydcbiAgICB9XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5iYXNlID0gYmFzZVxuICAgIHRoaXMuYWNjcyA9IGFjY3NcbiAgICB0aGlzLnNlbWkgPSBzZW1pXG4gIH1cblxuICBhZGQoaXRlbSkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLnNlbWkgKyBpdGVtLnNlbWkpXG4gIH1cblxuICBzdWIoaXRlbSkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLnNlbWkgLSBpdGVtLnNlbWkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5uYW1lKVxuICB9XG5cbiAgc3RhdGljIGNsb25lKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+IGl0ZW0uY2xvbmUoKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9JdGVtLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElOVFZTLCBOT1RFUyB9IGZyb20gJy4vc3ltYm9scydcbmltcG9ydCB7IFNFTUkySU5UViwgZmFjdG9ycywgYXJyMml0ZW1zIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCBOb3RlIGZyb20gJy4uL05vdGUnXG5pbXBvcnQgSW50ZXJ2YWwgZnJvbSAnLi4vSW50ZXJ2YWwnXG5cbmNsYXNzIFNjYWxlSGVscGVyIHtcbiAgc3RhdGljIG5vdGVzKG1vZGVzKSB7XG4gICAgcmV0dXJuIE5vdGUuY2xvbmUobW9kZXNbMF0ubm90ZXMpXG4gIH1cblxuICBzdGF0aWMgbW9kZXMocm9vdCwgaW50dnMpIHtcbiAgICByb290ICAgICAgICAgICA9IHJvb3QuY2xvbmUoKVxuICAgIGludHZzICAgICAgICAgID0gSW50ZXJ2YWwuY2xvbmUoaW50dnMpXG4gICAgY29uc3Qgc3ltbWV0cnkgPSBTY2FsZUhlbHBlci5zeW1tZXRyeShpbnR2cylcbiAgICBsZXQgbW9kZXMgICAgICA9IFtTY2FsZUhlbHBlci5tb2RlKHJvb3QsIGludHZzKV1cblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3ltbWV0cnk7ICsraSkge1xuICAgICAgaW50dnMucHVzaChpbnR2cy5zaGlmdCgpKVxuICAgICAgbW9kZXMucHVzaChcbiAgICAgICAgU2NhbGVIZWxwZXIubW9kZShcbiAgICAgICAgICByb290LmFkZChtb2Rlc1swXS5ub3Rlc1tpXSlcbiAgICAgICAgLCBpbnR2cylcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kZXNcbiAgfVxuXG4gIHN0YXRpYyBtb2RlKHJvb3QsIGludHZzKSB7XG4gICAgcm9vdCAgICAgPSByb290LmNsb25lKClcbiAgICBpbnR2cyAgICA9IEludGVydmFsLmNsb25lKGludHZzKVxuICAgIGxldCBwcmV2ID0gbmV3IEludGVydmFsKElOVFZTWzBdKVxuXG4gICAgaW50dnMudW5zaGlmdChwcmV2KVxuICAgIGludHZzID0gaW50dnMubWFwKGludHYgPT4ge1xuICAgICAgY29uc3QgYWRkID0gaW50di5hZGQocHJldilcbiAgICAgIHByZXYgPSBhZGRcblxuICAgICAgcmV0dXJuIGFkZFxuICAgIH0pXG5cbiAgICBpbnR2cy5wb3AoKVxuICAgIHJldHVybiBuZXcgU2NhbGVIZWxwZXIuTW9kZShyb290LCBpbnR2cylcbiAgfVxuXG4gIHN0YXRpYyBzeW1tZXRyeShpbnR2cykge1xuICAgIGNvbnN0IGwgICAgID0gaW50dnMubGVuZ3RoXG4gICAgY29uc3Qgc2VtaXMgPSBpbnR2cy5tYXAoaW50diA9PiBpbnR2LnNlbWkpXG4gICAgY29uc3QgZmN0cnMgPSBmYWN0b3JzKGwpXG5cbiAgICBmb3IgKGxldCBmYWN0b3Igb2YgZmN0cnMpIHtcbiAgICAgIGNvbnN0IHBhdHRlcm4gPSBzZW1pcy5zbGljZSgwLCBmYWN0b3IpXG4gICAgICBjb25zdCB0ZXN0ICAgID0gQXJyYXkucHJvdG90eXBlXG4gICAgICAgIC5jb25jYXQuYXBwbHkoW10sIEFycmF5KGwgLyBmYWN0b3IpLmZpbGwocGF0dGVybikpXG5cbiAgICAgIGlmIChzZW1pcy5qb2luKCcgJykgPT09IHRlc3Quam9pbignICcpKVxuICAgICAgICByZXR1cm4gZmFjdG9yXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1JPT1QgID0gbmV3IE5vdGUoTk9URVNbMF0pXG5leHBvcnQgY29uc3QgREVGQVVMVF9JTlRWUyA9IGFycjJpdGVtcyhJbnRlcnZhbCwgW1xuICAgIFNFTUkySU5UVlsyXVxuICAsIFNFTUkySU5UVlsyXVxuICAsIFNFTUkySU5UVlsxXVxuICAsIFNFTUkySU5UVlsyXVxuICAsIFNFTUkySU5UVlsyXVxuICAsIFNFTUkySU5UVlsyXVxuICAsIFNFTUkySU5UVlsxXVxuICBdXG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNjYWxlSGVscGVyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWxwZXJzL1NjYWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW3tcIm5hbWVcIjpcInN1c1wiLFwiaW50ZXJ2YWxzXCI6XCIyIDQgNFwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwic3VzMlwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgNVwifSx7XCJuYW1lXCI6XCJzdXM0XCIsXCJpbnRlcnZhbHNcIjpcIjEgNCA1XCJ9XX0se1wibmFtZVwiOlwiwrBcIixcImludGVydmFsc1wiOlwi4pmtMyDima0zIOKZrzRcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIsKwXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyDima01XCJ9XX0se1wibmFtZVwiOlwiLVwiLFwiaW50ZXJ2YWxzXCI6XCLima0zIDMgNFwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiLVwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTMgNVwifV19LHtcIm5hbWVcIjpcIs6UXCIsXCJpbnRlcnZhbHNcIjpcIjMg4pmtMyA0XCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCLOlFwiLFwiaW50ZXJ2YWxzXCI6XCIxIDMgNVwifV19LHtcIm5hbWVcIjpcIitcIixcImludGVydmFsc1wiOlwiMyAzIOKZrTRcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIitcIixcImludGVydmFsc1wiOlwiMSAzIOKZrzVcIn1dfSx7XCJuYW1lXCI6XCLCsDdcIixcImludGVydmFsc1wiOlwi4pmtMyDima0zIOKZrTMg4pmtM1wiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiwrA3XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyDima01IOKZreKZrTdcIn1dfSx7XCJuYW1lXCI6XCLDuFwiLFwiaW50ZXJ2YWxzXCI6XCLima0zIOKZrTMgMyAyXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCLDuFwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTMg4pmtNSDima03XCJ9LHtcIm5hbWVcIjpcIi02XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyA1IDZcIn1dfSx7XCJuYW1lXCI6XCItN1wiLFwiaW50ZXJ2YWxzXCI6XCLima0zIDMg4pmtMyAyXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCItN1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTMgNSDima03XCJ9LHtcIm5hbWVcIjpcIs6UNlwiLFwiaW50ZXJ2YWxzXCI6XCIxIDMgNSA2XCJ9XX0se1wibmFtZVwiOlwiLc6UN1wiLFwiaW50ZXJ2YWxzXCI6XCLima0zIDMgMyDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCItzpQ3XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyA1IDdcIn1dfSx7XCJuYW1lXCI6XCI34pmtNVwiLFwiaW50ZXJ2YWxzXCI6XCIzIDIgMyAyXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCI34pmtNVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDMg4pmtNSDima03XCJ9XX0se1wibmFtZVwiOlwiN1wiLFwiaW50ZXJ2YWxzXCI6XCIzIOKZrTMg4pmtMyAyXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCI3XCIsXCJpbnRlcnZhbHNcIjpcIjEgMyA1IOKZrTdcIn1dfSx7XCJuYW1lXCI6XCI34pmvNVwiLFwiaW50ZXJ2YWxzXCI6XCIzIDMgMiAyXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCI34pmvNVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDMg4pmvNSDima03XCJ9XX0se1wibmFtZVwiOlwizpQ3XCIsXCJpbnRlcnZhbHNcIjpcIjMg4pmtMyAzIOKZrTJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIs6UN1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDMgNSA3XCJ9XX1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGljdC9jaG9yZHMueW1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gW3tcIm5hbWVcIjpcIlBlbnRhdG9uaWMgKERpYXRvbmljKVwiLFwiaW50ZXJ2YWxzXCI6XCIyIDIg4pmtMyAyIOKZrTNcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIlBlbnRhdG9uaWMgTWFqb3JcIixcImludGVydmFsc1wiOlwiMSAyIDMgNSA2XCJ9LHtcIm5hbWVcIjpcIlBlbnRhdG9uaWMgbsKwMiAvIERvcmlhbihubzMsMTMpXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiA0IDUg4pmtN1wifSx7XCJuYW1lXCI6XCJQZW50YXRvbmljIG7CsDMgLyBQaHJ5Z2lhbihubzUsOSlcIixcImludGVydmFsc1wiOlwiMSDima0zIDQg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIlBlbnRhdG9uaWMgbsKwNCAvIE1peG9seWRpYW4obm8zLDcpXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiA0IDUgNlwifSx7XCJuYW1lXCI6XCJQZW50YXRvbmljIE1pbm9yXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyA0IDUg4pmtN1wifV19LHtcIm5hbWVcIjpcIldob2xlIFRvbmVcIixcImludGVydmFsc1wiOlwiMiAyIDIgMiAyIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIldob2xlIFRvbmUgKDcpXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIOKZrTUg4pmvNSDima03XCJ9XX0se1wibmFtZVwiOlwiRGlhdG9uaWNcIixcImludGVydmFsc1wiOlwiMiAyIOKZrTIgMiAyIDIg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiSW9uaWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIDQgNSA2IDdcIn0se1wibmFtZVwiOlwiRG9yaWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQgNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiUGhyeWdpYW5cIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrTMgNCA1IOKZrTYg4pmtN1wifSx7XCJuYW1lXCI6XCJMeWRpYW5cIixcImludGVydmFsc1wiOlwiMSAyIDMg4pmvNCA1IDYgN1wifSx7XCJuYW1lXCI6XCJNaXhvbHlkaWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIDQgNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiQWVvbGlhblwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyA0IDUg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIkxvY3JpYW5cIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrTMgNCDima01IOKZrTYg4pmtN1wifV19LHtcIm5hbWVcIjpcIkRvdWJsZSBIYXJtb25pYyBNYWpvclwiLFwiaW50ZXJ2YWxzXCI6XCIyIOKZrTMgMiAyIOKZrTIg4pmtMyDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJEb3VibGUgSGFybW9uaWMgTWFqb3IgLyBJb25pYW4g4pmtOSDima0xM1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIgMyA0IDUg4pmtNiA3XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiDima85IOKZrzEzXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmvMiAzIOKZrzQgNSDima82IDdcIn0se1wibmFtZVwiOlwiRG91YmxlIEhhcm1vbmljIE1ham9yIG7CsDNcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrzIgMyA1IOKZrTYg4pmt4pmtN1wifSx7XCJuYW1lXCI6XCJIdW5nYXJpYW4gTWlub3JcIixcImludGVydmFsc1wiOlwiMSDima0yIDMg4pmvNCA1IOKZrTYgN1wifSx7XCJuYW1lXCI6XCJPcmllbnRhbCAvIE1peG9seWRpYW4g4pmtNSDima05XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiAzIDQg4pmtNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiSW9uaWFuIOKZrzUg4pmvOVwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrzIgMyA0IOKZrzUgNiA3XCJ9LHtcIm5hbWVcIjpcIkxvY3JpYW4g4pmt4pmtMyDima3ima03XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima3ima0zIDQg4pmtNSDima02IOKZreKZrTdcIn1dfSx7XCJuYW1lXCI6XCJIYXJtb25pYyBNYWpvclwiLFwiaW50ZXJ2YWxzXCI6XCIyIDIg4pmtMiAyIOKZrTIg4pmtMyDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJIYXJtb25pYyBNYWpvciAvIElvbmlhbiDima0xM1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgMyA0IDUg4pmtNiA3XCJ9LHtcIm5hbWVcIjpcIkRvcmlhbiDima01XCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQg4pmtNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiSGFybW9uaWMgTWFqb3IgbsKwM1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmvMiAzIDUg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiDima0zXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIOKZrzQgNSA2IDdcIn0se1wibmFtZVwiOlwiTWl4b2x5ZGlhbiDima05XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiAzIDQgNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiTHlkaWFuIOKZrzUg4pmvOVwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrzIgMyDima80IOKZrzUgNiA3XCJ9LHtcIm5hbWVcIjpcIkxvY3JpYW4g4pmt4pmtN1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmtMyA0IOKZrTUg4pmtNiDima3ima03XCJ9XX0se1wibmFtZVwiOlwiSGFybW9uaWMgTWlub3JcIixcImludGVydmFsc1wiOlwiMiDima0yIDIgMiDima0yIOKZrTMg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiSGFybW9uaWMgTWlub3IgLyBBZW9saWFuIOKZrjdcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMgNCA1IOKZrTYgN1wifSx7XCJuYW1lXCI6XCJMb2NyaWFuIOKZrjEzXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima0zIDQg4pmtNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiSW9uaWFuIOKZrzVcIixcImludGVydmFsc1wiOlwiMSAyIDMgNCDima81IDYgN1wifSx7XCJuYW1lXCI6XCJEb3JpYW4g4pmvMTFcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMg4pmvNCA1IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJQaHJ5Z2lhbiBEb21pbmFudFwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIgMyA0IDUg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiDima85XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmvMiAzIOKZrzQgNSA2IDdcIn0se1wibmFtZVwiOlwiU3VwZXJMb2NyaWFuIERpbWluaXNoZWRcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrzIgMyDima01IOKZrzUg4pmt4pmtN1wifV19LHtcIm5hbWVcIjpcIk1lbG9kaWMgTWlub3JcIixcImludGVydmFsc1wiOlwiMiDima0yIDIgMiAyIDIg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiTWVsb2RpYyBNaW5vciAvIERvcmlhbiDima43XCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQgNSA2IDdcIn0se1wibmFtZVwiOlwiUGhyeWdpYW4g4pmuMTMgLyBEb3JpYW4g4pmtMlwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmtMyA0IDUgNiDima03XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiDima81XCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIOKZrzQg4pmvNSA2IDdcIn0se1wibmFtZVwiOlwiTHlkaWFuIERvbW1pbmFudCAvIE1peG9seWRpYW4g4pmvMTFcIixcImludGVydmFsc1wiOlwiMSAyIDMg4pmvNCA1IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJNaXhvbHlkaWFuIOKZrTEzIC8gQWVvbGlhbiDima4zXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIDQgNSDima02IOKZrTdcIn0se1wibmFtZVwiOlwiQWVvbGlhbiDima01IC8gTG9jcmlhbiDima45XCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQg4pmtNSDima02IOKZrTdcIn0se1wibmFtZVwiOlwiQWx0ZXJlZCAvIFN1cGVyTG9jcmlhblwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmvMiAzIOKZrTUg4pmvNSDima03XCJ9XX0se1wibmFtZVwiOlwiRG91YmxlIERpbWluaXNoZWRcIixcImludGVydmFsc1wiOlwiMiDima0yIDIg4pmtMiAyIOKZrTIgMiDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJXaG9sZSBIYWxmICjCsClcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMgNCDima01IOKZrzUg4pmt4pmtNyA3XCJ9LHtcIm5hbWVcIjpcIkhhbGYgV2hvbGUgKDcpXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima8yIDMg4pmtNSA1IDYg4pmtN1wifV19XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RpY3Qvc2NhbGVzLnltbFxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaGVscGVyLCB7IERFRkFVTFRfUk9PVCwgREVGQVVMVF9JTlRWUyB9IGZyb20gJy4vaGVscGVycy9Nb2RlJ1xuaW1wb3J0IFNjYWxlSGVscGVyIGZyb20gJy4vaGVscGVycy9TY2FsZSdcblxuY2xhc3MgTW9kZSB7XG4gIGNvbnN0cnVjdG9yKHJvb3QgPSBERUZBVUxUX1JPT1QsIGludHZzID0gREVGQVVMVF9JTlRWUykge1xuICAgIHRoaXMucm9vdCAgPSByb290XG4gICAgdGhpcy5pbnR2cyA9IGludHZzXG4gICAgdGhpcy5ub3RlcyA9IGhlbHBlci5ub3Rlcyh0aGlzLnJvb3QsIHRoaXMuaW50dnMpXG4gIH1cblxuICBzY2FsZSgpIHtcbiAgICByZXR1cm4gaGVscGVyLnNjYWxlKHRoaXMucm9vdCwgdGhpcy5pbnR2cylcbiAgfVxuXG4gIGdldERlZ3JlZShpbnR2KSB7XG4gICAgZm9yKGxldCBpIG9mIHRoaXMuaW50dnMpIHtcbiAgICAgIGlmIChpLnNlbWkgPT09IGludHYuc2VtaSkgcmV0dXJuIGkuY2xvbmUoKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBkb2VzSW5jbHVkZShtb2RlKSB7XG4gICAgaWYgKHRoaXMuaW50dnMubGVuZ3RoIDw9IG1vZGUuaW50dnMubGVuZ3RoKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCBzZW1pcyA9IHRoaXMuaW50dnMubWFwKGludHYgPT4gaW50di5zZW1pKVxuXG4gICAgZm9yIChsZXQgaW50diBvZiBtb2RlLmludHZzKSB7XG4gICAgICBpZighc2VtaXMuaW5jbHVkZXMoaW50di5zZW1pKSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHRvU3RyaW5nKHNlbWkgPSBmYWxzZSkge1xuICAgIHJldHVybiB0aGlzLmludHZzXG4gICAgICAubWFwKGludHYgPT4gc2VtaSA/IGludHYuc2VtaSA6IGludHYubmFtZSlcbiAgICAgIC5qb2luKCcgJylcbiAgfVxufVxuXG5TY2FsZUhlbHBlci5Nb2RlID0gTW9kZVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9Nb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaGVscGVyLCB7IERFRkFVTFRfUk9PVCwgREVGQVVMVF9JTlRWUyB9IGZyb20gJy4vaGVscGVycy9TY2FsZSdcbmltcG9ydCBNb2RlSGVscGVyIGZyb20gJy4vaGVscGVycy9Nb2RlJ1xuXG5jbGFzcyBTY2FsZSB7XG4gIGNvbnN0cnVjdG9yKHJvb3QgPSBERUZBVUxUX1JPT1QsIGludHZzID0gREVGQVVMVF9JTlRWUykge1xuICAgIHRoaXMucm9vdCAgPSByb290XG4gICAgdGhpcy5pbnR2cyA9IGludHZzXG4gICAgdGhpcy5tb2RlcyA9IGhlbHBlci5tb2Rlcyh0aGlzLnJvb3QsIHRoaXMuaW50dnMpXG4gICAgdGhpcy5ub3RlcyA9IGhlbHBlci5ub3Rlcyh0aGlzLm1vZGVzKVxuICB9XG59XG5cbk1vZGVIZWxwZXIuU2NhbGUgPSBTY2FsZVxuXG5leHBvcnQgZGVmYXVsdCBTY2FsZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2NhbGUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBzeW1ib2xzIGZyb20gJy4vaGVscGVycy9zeW1ib2xzJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vaGVscGVycy91dGlscydcbmltcG9ydCBJdGVtSGVscGVyIGZyb20gJy4vaGVscGVycy9JdGVtJ1xuaW1wb3J0IE1vZGVIZWxwZXIgZnJvbSAnLi9oZWxwZXJzL01vZGUnXG5pbXBvcnQgU2NhbGVIZWxwZXIgZnJvbSAnLi9oZWxwZXJzL1NjYWxlJ1xuaW1wb3J0IGNob3JkcyBmcm9tICcuL2RpY3QvY2hvcmRzLnltbCdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi9kaWN0L3NjYWxlcy55bWwnXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nXG5pbXBvcnQgSW50ZXJ2YWwgZnJvbSAnLi9JbnRlcnZhbCdcbmltcG9ydCBOb3RlIGZyb20gJy4vTm90ZSdcbmltcG9ydCBNb2RlIGZyb20gJy4vTW9kZSdcbmltcG9ydCBTY2FsZSBmcm9tICcuL1NjYWxlJ1xuaW1wb3J0IERpY3QgZnJvbSAnLi9EaWN0J1xuXG5jb25zdCBNdUpTID0ge1xuICBzeW1ib2xzOiBzeW1ib2xzXG4sIHV0aWxzOiB1dGlsc1xuLCBJdGVtSGVscGVyOiBJdGVtSGVscGVyXG4sIE1vZGVIZWxwZXI6IE1vZGVIZWxwZXJcbiwgU2NhbGVIZWxwZXI6IFNjYWxlSGVscGVyXG4sIGNob3JkczogY2hvcmRzXG4sIHNjYWxlczogc2NhbGVzXG4sIEl0ZW06IEl0ZW1cbiwgSW50ZXJ2YWw6IEludGVydmFsXG4sIE5vdGU6IE5vdGVcbiwgTW9kZTogTW9kZVxuLCBTY2FsZTogU2NhbGVcbiwgRGljdDogRGljdFxufVxuXG5leHBvcnQgZGVmYXVsdCBNdUpTXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSW50ZXJ2YWwgZnJvbSAnLi9JbnRlcnZhbCdcbmltcG9ydCBTY2FsZSBmcm9tICcuL1NjYWxlJ1xuaW1wb3J0IE1vZGUgZnJvbSAnLi9Nb2RlJ1xuaW1wb3J0IHsgc3RyMml0ZW1zIH0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IFNDQUxFUyBmcm9tICcuL2RpY3Qvc2NhbGVzLnltbCdcbmltcG9ydCBDSE9SRFMgZnJvbSAnLi9kaWN0L2Nob3Jkcy55bWwnXG5cbmxldCBESUNUICA9IFtdXG5sZXQgTU9ERVMgPSBbXVxubGV0IEVRVUFMUyAgPSB7fVxubGV0IFNJTUlMQVIgPSB7fVxuXG5jbGFzcyBEaWN0IHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgRGljdC5faW5pdFNjYWxlcygpXG4gICAgRGljdC5fbWF0Y2hJbmNsdXNpb25zKClcblxuICAgIHJldHVybiBEaWN0XG4gIH1cblxuICBzdGF0aWMgc2NhbGVzKCkge1xuICAgIHJldHVybiBESUNUXG4gIH1cblxuICBzdGF0aWMgZ2V0KG1vZGUpIHtcbiAgICBsZXQgaSA9IEVRVUFMU1ttb2RlLnRvU3RyaW5nKCldXG4gICAgaWYgKGkpXG4gICAgICByZXR1cm4gTU9ERVNbaV1cbiAgfVxuXG4gIHN0YXRpYyBzaW1pbGFyKG1vZGUpIHtcbiAgICBsZXQgZXF1YWxzID0gRGljdC5nZXQobW9kZSlcbiAgICBpZiAoZXF1YWxzKVxuICAgICAgcmV0dXJuIGVxdWFsc1xuXG4gICAgbGV0IGkgPSBTSU1JTEFSW21vZGUudG9TdHJpbmcodHJ1ZSldXG4gICAgaWYgKGkpXG4gICAgICByZXR1cm4gTU9ERVNbaV1cbiAgfVxuXG4gIHN0YXRpYyBfaW5pdFNjYWxlcygpIHtcbiAgICBESUNUID1cbiAgICAgIENIT1JEU1xuICAgICAgICAubWFwKGNob3JkID0+IE9iamVjdC5hc3NpZ24oY2hvcmQsIHsgdHlwZTogJ2Nob3JkJyB9KSlcbiAgICAgIC5jb25jYXQoXG4gICAgICAgIFNDQUxFU1xuICAgICAgICAgIC5tYXAoc2NhbGUgPT4gT2JqZWN0LmFzc2lnbihzY2FsZSwgeyB0eXBlOiAnbW9kZScgfSkpXG4gICAgICApXG4gICAgICAubWFwKHNjYWxlID0+IHtcbiAgICAgICAgbGV0IG5hbWUgID0gc2NhbGUubmFtZVxuICAgICAgICBsZXQgdHlwZSAgPSBzY2FsZS50eXBlXG4gICAgICAgIGxldCBtb2RlcyA9IHNjYWxlLm1vZGVzXG5cbiAgICAgICAgc2NhbGUgICAgICA9IG5ldyBTY2FsZSh1bmRlZmluZWQsIHN0cjJpdGVtcyhJbnRlcnZhbCwgc2NhbGUuaW50ZXJ2YWxzKSlcbiAgICAgICAgc2NhbGUubmFtZSA9IG5hbWVcbiAgICAgICAgc2NhbGUudHlwZSA9IHR5cGVcbiAgICAgICAgRElDVC5wdXNoKHNjYWxlKVxuXG4gICAgICAgIHNjYWxlLm1vZGVzID0gbW9kZXMubWFwKG1vZGUgPT4ge1xuICAgICAgICAgIGxldCBuYW1lID0gbW9kZS5uYW1lXG5cbiAgICAgICAgICBtb2RlICAgICAgID0gbmV3IE1vZGUodW5kZWZpbmVkLCBzdHIyaXRlbXMoSW50ZXJ2YWwsIG1vZGUuaW50ZXJ2YWxzKSlcbiAgICAgICAgICBtb2RlLm5hbWUgID0gbmFtZVxuICAgICAgICAgIG1vZGUudHlwZSAgPSB0eXBlXG4gICAgICAgICAgbW9kZS5pbmNsdWRlcyA9IFtdXG4gICAgICAgICAgbW9kZS5pbmNsdWRlZCA9IFtdXG4gICAgICAgICAgOygobW9kZSwgc2NhbGUpID0+IG1vZGUuc2NhbGUgPSAoKSA9PiBzY2FsZSkobW9kZSwgc2NhbGUpXG4gICAgICAgICAgTU9ERVMucHVzaChtb2RlKVxuXG4gICAgICAgICAgcmV0dXJuIG1vZGVcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gc2NhbGVcbiAgICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX21hdGNoSW5jbHVzaW9ucygpIHtcbiAgICBsZXQgZm91bmQgPSBbXVxuXG4gICAgTU9ERVMuZm9yRWFjaCgobW9kZTEsIGkpID0+IHtcbiAgICAgIGZvdW5kW2ldID0gZm91bmRbaV0gfHwgW11cblxuICAgICAgRVFVQUxTIFttb2RlMS50b1N0cmluZygpICAgIF0gPSBpXG4gICAgICBTSU1JTEFSW21vZGUxLnRvU3RyaW5nKHRydWUpXSA9IGlcblxuICAgICAgTU9ERVMuZm9yRWFjaCgobW9kZTIsIGopID0+IHtcbiAgICAgICAgaWYgKGkgPT09IGopIHJldHVyblxuXG4gICAgICAgIGZvdW5kW2pdID0gZm91bmRbal0gfHwgW11cbiAgICAgICAgaWYgKGZvdW5kW2pdLmluY2x1ZGVzKGkpKSByZXR1cm5cblxuICAgICAgICBpZiAobW9kZTEuZG9lc0luY2x1ZGUobW9kZTIpKSB7XG4gICAgICAgICAgZm91bmRbaV0ucHVzaChqKVxuXG4gICAgICAgICAgbW9kZTEuaW5jbHVkZXMucHVzaChtb2RlMilcbiAgICAgICAgICBtb2RlMi5pbmNsdWRlZC5wdXNoKG1vZGUxKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxuRGljdC5pbml0KClcblxuZXhwb3J0IGRlZmF1bHQgRGljdFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvRGljdC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==