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
    return new ModeHelper.Scale(root, intvs)
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

module.exports = [{"name":"sus","intervals":"4 2 4","modes":[{"name":"sus4","intervals":"1 4 5"},{"name":"sus2","intervals":"1 2 5"}]},{"name":"°","intervals":"♭3 ♭3 ♯4","modes":[{"name":"°","intervals":"1 ♭3 ♭5"}]},{"name":"-","intervals":"♭3 3 4","modes":[{"name":"-","intervals":"1 ♭3 5"}]},{"name":"Δ","intervals":"3 ♭3 4","modes":[{"name":"Δ","intervals":"1 3 5"}]},{"name":"+","intervals":"3 3 ♭4","modes":[{"name":"+","intervals":"1 3 ♯5"}]},{"name":"°7","intervals":"♭3 ♭3 ♭3 ♭3","modes":[{"name":"°7","intervals":"1 ♭3 ♭5 ♭♭7"}]},{"name":"ø","intervals":"♭3 ♭3 3 2","modes":[{"name":"ø","intervals":"1 ♭3 ♭5 ♭7"},{"name":"-6","intervals":"1 ♭3 5 6"}]},{"name":"-7","intervals":"♭3 3 ♭3 2","modes":[{"name":"-7","intervals":"1 ♭3 5 ♭7"},{"name":"Δ6","intervals":"1 3 5 6"}]},{"name":"-Δ7","intervals":"♭3 3 3 ♭2","modes":[{"name":"-Δ7","intervals":"1 ♭3 5 7"}]},{"name":"7♭5","intervals":"3 2 3 2","modes":[{"name":"7♭5","intervals":"1 3 ♭5 ♭7"}]},{"name":"7","intervals":"3 ♭3 ♭3 2","modes":[{"name":"7","intervals":"1 3 5 ♭7"}]},{"name":"7♯5","intervals":"3 3 2 2","modes":[{"name":"7♯5","intervals":"1 3 ♯5 ♭7"}]},{"name":"Δ7","intervals":"3 ♭3 3 ♭2","modes":[{"name":"Δ7","intervals":"1 3 5 7"}]}]

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = [{"name":"Pentatonic (Diatonic)","intervals":"2 2 ♭3 2 ♭3","modes":[{"name":"Pentatonic Major","intervals":"1 2 3 5 6"},null,null,null,{"name":"Pentatonic Minor","intervals":"1 ♭3 4 5 ♭7"}]},{"name":"Whole Tone","intervals":"2 2 2 2 2 2","modes":[{"name":"Whole Tone (7)","intervals":"1 2 3 ♭5 ♯5 ♭7"}]},{"name":"Diatonic","intervals":"2 2 ♭2 2 2 2 ♭2","modes":[{"name":"Ionian","intervals":"1 2 3 4 5 6 7"},{"name":"Dorian","intervals":"1 2 ♭3 4 5 6 ♭7"},{"name":"Phrygian","intervals":"1 ♭2 ♭3 4 5 ♭6 ♭7"},{"name":"Lydian","intervals":"1 2 3 ♯4 5 6 7"},{"name":"Mixolydian","intervals":"1 2 3 4 5 6 ♭7"},{"name":"Aeolian","intervals":"1 2 ♭3 4 5 ♭6 ♭7"},{"name":"Locrian","intervals":"1 ♭2 ♭3 4 ♭5 ♭6 ♭7"}]},{"name":"Double Harmonic Major","intervals":"♭2 ♭3 ♭2 2 ♭2 ♭3 ♭2","modes":[{"name":"Ionian ♭9 ♭13","intervals":"1 ♭2 3 4 5 ♭6 7"},{"name":"Lydian ♯9 ♯13","intervals":"1 ♯2 3 ♯4 5 ♯6 7"},{"name":"Double Harmonic Major n°3","intervals":"1 ♭2 ♯2 3 5 ♭6 ♭♭7"},{"name":"Hungarian Minor","intervals":"1 2 ♭3 ♯4 5 ♭6 7"},{"name":"Oriental / Mixolydian ♭5 ♭9","intervals":"1 ♭2 3 4 ♭5 6 ♭7"},{"name":"Ionian ♯5 ♯9","intervals":"1 ♯2 3 4 ♯5 6 7"},{"name":"Locrian ♭♭3 ♭♭7","intervals":"1 ♭2 ♭♭3 4 ♭5 ♭6 ♭♭7"}]},{"name":"Harmonic Major","intervals":"2 2 ♭2 2 ♭2 ♭3 ♭2","modes":[{"name":"Ionian ♭13","intervals":"1 2 3 4 5 ♭6 7"},{"name":"Dorian ♭5","intervals":"1 2 ♭3 4 ♭5 6 ♭7"},{"name":"Harmonic Major n°3","intervals":"1 ♭2 ♯2 3 5 ♭6 ♭7"},{"name":"Lydian ♭3","intervals":"1 2 ♭3 ♯4 5 6 7"},{"name":"Mixolydian ♭9","intervals":"1 ♭2 3 4 5 6 ♭7"},{"name":"Lydian ♯5 ♯9","intervals":"1 ♯2 3 ♯4 ♯5 6 7"},{"name":"Locrian ♭♭7","intervals":"1 ♭2 ♭3 4 ♭5 ♭6 ♭♭7"}]},{"name":"Harmonic Minor","intervals":"2 ♭2 2 2 ♭2 ♭3 ♭2","modes":[{"name":"Aeolian ♮7","intervals":"1 2 ♭3 4 5 ♭6 7"},{"name":"Locrian ♮13","intervals":"1 ♭2 ♭3 4 ♭5 6 ♭7"},{"name":"Ionian ♯5","intervals":"1 2 3 4 ♯5 6 7"},{"name":"Dorian ♯11","intervals":"1 2 ♭3 ♯4 5 6 ♭7"},{"name":"Phrygian Dominant","intervals":"1 ♭2 3 4 5 ♭6 ♭7"},{"name":"Lydian ♯9","intervals":"1 ♯2 3 ♯4 5 6 7"},{"name":"SuperLocrian Diminished","intervals":"1 ♭2 ♯2 3 ♭5 ♯5 ♭♭7"}]},{"name":"Melodic Minor","intervals":"2 ♭2 2 2 2 2 ♭2","modes":[{"name":"Dorian ♮7","intervals":"1 2 ♭3 4 5 6 7"},{"name":"Phrygian ♮13 / Dorian ♭2","intervals":"1 ♭2 ♭3 4 5 6 ♭7"},{"name":"Lydian ♯5","intervals":"1 2 3 ♯4 ♯5 6 7"},{"name":"Lydian Domminant / Mixolydian ♯11","intervals":"1 2 3 ♯4 5 6 ♭7"},{"name":"Mixolydian ♭13 / Aeolian ♮3","intervals":"1 2 3 4 5 ♭6 ♭7"},{"name":"Aeolian ♭5 / Locrian ♮9","intervals":"1 2 ♭3 4 ♭5 ♭6 ♭7"},{"name":"Altered / SuperLocrian","intervals":"1 ♭2 ♯2 3 ♭5 ♯5 ♭7"}]},{"name":"Double Diminished","intervals":"2 ♭2 2 ♭2 2 ♭2 2 ♭2","modes":[{"name":"Whole Half (°)","intervals":"1 2 ♭3 4 ♭5 ♯5 ♭♭7 7"},{"name":"Half Whole (7)","intervals":"1 ♭2 ♯2 3 ♭5 5 6 ♭7"}]}]

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_Mode__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_Scale__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Interval__ = __webpack_require__(2);




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

  clone() {
    return new Mode(this.root.clone(), __WEBPACK_IMPORTED_MODULE_2__Interval__["a" /* default */].clone(this.intvs))
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Interval__ = __webpack_require__(2);




class Scale {
  constructor(root = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["b" /* DEFAULT_ROOT */], intvs = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["a" /* DEFAULT_INTVS */]) {
    this.root  = root
    this.intvs = intvs
    this.modes = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["c" /* default */].modes(this.root, this.intvs)
    this.notes = __WEBPACK_IMPORTED_MODULE_0__helpers_Scale__["c" /* default */].notes(this.modes)
  }

  clone() {
    return new Scale(this.root.clone(), __WEBPACK_IMPORTED_MODULE_2__Interval__["a" /* default */].clone(this.intvs))
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







let DICT     = []
let MODES    = []
let EQUALS   = {}
let SIMILARS = {}

class Dict {
  static init() {
    Dict._initScales()
    Dict._matchInclusions()

    return Dict
  }

  static scales() {
    return DICT
  }

  static modes() {
    return MODES
  }

  static get(mode) {
    mode = mode.clone()

    const i = EQUALS[mode.toString()]
    if (typeof i !== 'undefined') {
      return MODES[i]

    } else {
      const j = SIMILARS[mode.toString(true)]
      if (typeof j !== 'undefined') {
        const similar = MODES[j]
        const intvs   = mode.intvs

        mode       = similar.clone()
        mode.name  = `~ ${similar.name}`
        mode.intvs = intvs

        return mode

      } else {
        return Dict._safen(mode)
      }
    }
  }

  static _safen(mode) {
    mode.name     = ''
    mode.type     = mode.intvs.length > 4 ? 'mode' : 'chord'
    mode.includes = MODES.filter(_mode =>  mode.doesInclude(_mode))
    mode.included = MODES.filter(_mode => _mode.doesInclude( mode))

    return mode
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

        scale.modes = scale.modes.map((m, i) => {
          let mode = modes[i]

          if (!mode) {
            mode      = m
            mode.name = `${scale.name} n°${i + 1}`
          } else {
            let name  = mode.name
            mode      = new __WEBPACK_IMPORTED_MODULE_2__Mode__["a" /* default */](undefined, Object(__WEBPACK_IMPORTED_MODULE_3__helpers_utils__["k" /* str2items */])(__WEBPACK_IMPORTED_MODULE_0__Interval__["a" /* default */], mode.intervals))
            mode.name = name
          }

          mode.type     = type
          mode.includes = []
          mode.included = []

          mode.scale = Dict._scale(scale, i)
          mode.clone = Dict._modeClone(mode, mode.clone)
          MODES.push(mode)

          return mode
        })

        scale.clone = Dict._scaleClone(scale, scale.clone)

        return scale
      })
  }

  static _matchInclusions() {
    let found = []

    MODES.forEach((mode1, i) => {
      found[i] = found[i] || []

      const id = mode1.toString()
      if (EQUALS[id]) {
        console.warn('Found equal modes:', EQUALS[id], mode1)
      }
      EQUALS[id] = i
      SIMILARS[mode1.toString(true)] = i

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

  static _scale(scale, i) {
    return () => {
      const modes    = scale.modes.map(mode => mode)

      let newScale   = scale.clone()
      newScale.modes = modes.slice(i).concat(modes.slice(0, i))

      return newScale
    }
  }

  static _modeClone(mode, originalClone) {
    return () => {
      const name     = mode.name
      const type     = mode.type
      const includes = mode.includes
      const included = mode.included
      const scale    = mode.scale
      const clone    = mode.clone

      let newMode      = originalClone.bind(mode)()
      newMode.name     = name
      newMode.type     = type
      newMode.includes = includes
      newMode.included = included
      newMode.scale    = scale
      newMode.clone    = clone

      return newMode
    }
  }

  static _scaleClone(scale, originalClone) {
    return () => {
      const name  = scale.name
      const type  = scale.type
      const modes = scale.modes
      const clone = scale.clone

      let newScale   = originalClone.bind(scale)()
      newScale.name  = name
      newScale.type  = type
      newScale.modes = modes
      newScale.clone = clone

      return newScale
    }
  }
}

Dict.init()

/* harmony default export */ __webpack_exports__["a"] = (Dict);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5N2ZhOGVkZWI3ODMyMGE1ZmI5YyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9zeW1ib2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9JdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL01vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpY3QvY2hvcmRzLnltbCIsIndlYnBhY2s6Ly8vLi9zcmMvZGljdC9zY2FsZXMueW1sIiwid2VicGFjazovLy8uL3NyYy9Nb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9TY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGljdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJtdWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTXVKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNdUpTXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5N2ZhOGVkZWI3ODMyMGE1ZmI5YyIsImV4cG9ydCBjb25zdCBBQ0NTID0ge1xuICBmbGF0ICAgOiAn4pmtJ1xuLCBuYXR1cmFsOiAn4pmuJ1xuLCBzaGFycCAgOiAn4pmvJ1xufVxuXG5leHBvcnQgY29uc3QgSU5UVlMgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnXVxuZXhwb3J0IGNvbnN0IE5PVEVTID0gWydDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnQScsICdCJ11cblxuZXhwb3J0IGRlZmF1bHQge1xuICBBQ0NTIDogQUNDU1xuLCBJTlRWUzogSU5UVlNcbiwgTk9URVM6IE5PVEVTXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZWxwZXJzL3N5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQUNDUywgSU5UVlMsIE5PVEVTIH0gZnJvbSAnLi9zeW1ib2xzJ1xuXG5jb25zdCB6aXAgPSAoa2V5cywgdmFscykgPT4ge1xuICBsZXQgcmV0ID0ge31cblxuICBmb3IgKGxldCBpIGluIGtleXMpXG4gICAgcmV0W2tleXNbaV1dID0gdmFsc1tpXVxuXG4gIHJldHVybiByZXRcbn1cblxuZXhwb3J0IGNvbnN0IG1vZCA9IChpLCBqKSA9PiAoKGkgJSBqKSArIGopICUgalxuXG5leHBvcnQgY29uc3QgZmFjdG9ycyA9IChudW0pID0+IHtcbiAgbGV0IGZhY3RvcnMgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguYWJzKG51bS8yKTsgKytpKSB7XG4gICAgaWYgKG51bSAlIGkgPT09IDApIGZhY3RvcnMucHVzaChpKVxuICB9XG5cbiAgZmFjdG9ycy5wdXNoKG51bSlcbiAgcmV0dXJuIGZhY3RvcnNcbn1cblxuZXhwb3J0IGNvbnN0IGFjY3Myc2VtaSA9IChhY2NzKSA9PiB7XG4gIGFjY3MgPSBhY2NzLnJlcGxhY2UoQUNDUy5uYXR1cmFsLCAnJylcbiAgbGV0IGkgPSBhY2NzLmxlbmd0aFxuICAgIC0gMiAqIChhY2NzLm1hdGNoKG5ldyBSZWdFeHAoYCR7QUNDUy5mbGF0fWAsICdnJykpIHx8IFtdKS5sZW5ndGhcblxuICByZXR1cm4gaVxufVxuXG5leHBvcnQgY29uc3QgYXJyMml0ZW1zID0gKEN0ciwgYXJyKSA9PiBhcnIubWFwKGUgPT4gbmV3IEN0cihlKSlcbmV4cG9ydCBjb25zdCBzdHIyaXRlbXMgPSAoQ3RyLCBzdHIpID0+IGFycjJpdGVtcyhDdHIsIHN0ci5zcGxpdCgnICcpKVxuXG5leHBvcnQgY29uc3QgSU5UVjJTRU1JID0gemlwKElOVFZTLCBbMCwgMiwgNCwgNSwgNywgOSwgMTFdKVxuZXhwb3J0IGNvbnN0IE5PVEUyU0VNSSA9IHppcChOT1RFUywgWzAsIDIsIDQsIDUsIDcsIDksIDExXSlcblxuZXhwb3J0IGNvbnN0IFNFTUkySU5UViA9IFtcbiAgICAgICAgICAgICAgYCR7SU5UVlNbMF19YFxuLCBgJHtBQ0NTLmZsYXR9JHtJTlRWU1sxXX1gXG4sICAgICAgICAgICAgIGAke0lOVFZTWzFdfWBcbiwgYCR7QUNDUy5mbGF0fSR7SU5UVlNbMl19YFxuLCAgICAgICAgICAgICBgJHtJTlRWU1syXX1gXG4sICAgICAgICAgICAgIGAke0lOVFZTWzNdfWBcbiwgYCR7QUNDUy5mbGF0fSR7SU5UVlNbNF19YFxuLCAgICAgICAgICAgICBgJHtJTlRWU1s0XX1gXG4sIGAke0FDQ1MuZmxhdH0ke0lOVFZTWzVdfWBcbiwgICAgICAgICAgICAgYCR7SU5UVlNbNV19YFxuLCBgJHtBQ0NTLmZsYXR9JHtJTlRWU1s2XX1gXG4sICAgICAgICAgICAgIGAke0lOVFZTWzZdfWBcbl1cblxuZXhwb3J0IGNvbnN0IFNFTUkyTk9URSA9IFtcbiAgYCR7Tk9URVNbMF19YFxuLCBgJHtOT1RFU1swXX0ke0FDQ1Muc2hhcnB9YFxuLCBgJHtOT1RFU1sxXX1gXG4sIGAke05PVEVTWzFdfSR7QUNDUy5zaGFycH1gXG4sIGAke05PVEVTWzJdfWBcbiwgYCR7Tk9URVNbM119YFxuLCBgJHtOT1RFU1szXX0ke0FDQ1Muc2hhcnB9YFxuLCBgJHtOT1RFU1s0XX1gXG4sIGAke05PVEVTWzRdfSR7QUNDUy5zaGFycH1gXG4sIGAke05PVEVTWzVdfWBcbiwgYCR7Tk9URVNbNV19JHtBQ0NTLnNoYXJwfWBcbiwgYCR7Tk9URVNbNl19YFxuXVxuXG5leHBvcnQgY29uc3Qgc2VtaTJpbnR2ID0gKGludCkgPT4gU0VNSTJJTlRWW21vZChpbnQsIDEyKV1cbmV4cG9ydCBjb25zdCBzZW1pMm5vdGUgPSAoaW50KSA9PiBTRU1JMk5PVEVbbW9kKGludCwgMTIpXVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1vZCAgICAgIDogbW9kXG4sIGZhY3RvcnMgIDogZmFjdG9yc1xuLCBhY2NzMnNlbWk6IGFjY3Myc2VtaVxuLCBhcnIyaXRlbXM6IGFycjJpdGVtc1xuLCBzdHIyaXRlbXM6IHN0cjJpdGVtc1xuLCBJTlRWMlNFTUk6IElOVFYyU0VNSVxuLCBOT1RFMlNFTUk6IE5PVEUyU0VNSVxuLCBTRU1JMklOVFY6IFNFTUkySU5UVlxuLCBTRU1JMk5PVEU6IFNFTUkyTk9URVxuLCBzZW1pMmludHY6IHNlbWkyaW50dlxuLCBzZW1pMm5vdGU6IHNlbWkybm90ZVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVscGVycy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVycy9JdGVtJ1xuaW1wb3J0IHsgSU5UVlMgfSBmcm9tICcuL2hlbHBlcnMvc3ltYm9scydcbmltcG9ydCB7IElOVFYyU0VNSSwgc2VtaTJpbnR2IH0gZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuXG5jbGFzcyBJbnRlcnZhbCBleHRlbmRzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihhcmcgPSBJTlRWU1swXSkge1xuICAgIHN1cGVyKGFyZylcbiAgfVxufVxuXG5JbnRlcnZhbC5oZWxwZXIgPSBuZXcgSGVscGVyKEludGVydmFsLCBJTlRWUywgSU5UVjJTRU1JLCBzZW1pMmludHYpXG5cbmV4cG9ydCBkZWZhdWx0IEludGVydmFsXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9JbnRlcnZhbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBtb2QsIGFjY3Myc2VtaSB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBBQ0NTIH0gZnJvbSAnLi9zeW1ib2xzJ1xuXG5jbGFzcyBJdGVtSGVscGVyIHtcbiAgY29uc3RydWN0b3IoQ3RyLCBuYW1lcywgbmFtZTJzZW1pLCBzZW1pMm5hbWUpIHtcbiAgICB0aGlzLkN0ciAgICAgICA9IEN0clxuICAgIHRoaXMubmFtZXMgICAgID0gbmFtZXNcbiAgICB0aGlzLm5hbWUyc2VtaSA9IG5hbWUyc2VtaVxuICAgIHRoaXMuc2VtaTJuYW1lID0gc2VtaTJuYW1lXG4gIH1cblxuICBwYXJzZShzdHIpIHtcbiAgICBsZXQgbmFtZVxuICAgIGxldCBhY2NzXG4gICAgbGV0IGJhc2VcblxuICAgIGlmICh0aGlzLkN0ci5uYW1lID09PSAnSW50ZXJ2YWwnKSB7XG4gICAgICBbbmFtZSwgYWNjcywgYmFzZV0gPSBuZXcgUmVnRXhwKFxuICAgICAgICBgKFske0FDQ1MuZmxhdH18JHtBQ0NTLm5hdHVyYWx9fCR7QUNDUy5zaGFycH1dKikoXFxcXGQqKWBcbiAgICAgICkuZXhlYyhzdHIpXG5cbiAgICAgIGJhc2UgPSAnJyArIChtb2QoK2Jhc2UgLSAxLCA3KSArIDEpXG4gICAgfSBlbHNlIGlmICh0aGlzLkN0ci5uYW1lID09PSAnTm90ZScpIHtcbiAgICAgIFtuYW1lLCBiYXNlLCBhY2NzXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgIGAoJHt0aGlzLm5hbWVzLmpvaW4oJ3wnKX0pKFske0FDQ1MuZmxhdH18JHtBQ0NTLm5hdHVyYWx9fCR7QUNDUy5zaGFycH1dKilgXG4gICAgICApLmV4ZWMoc3RyKVxuICAgIH1cblxuICAgIGFjY3MgICAgID0gYWNjczJzZW1pKGFjY3MpXG4gICAgbGV0IHNlbWkgPSBtb2QodGhpcy5uYW1lMnNlbWlbYmFzZV0gKyBhY2NzLCAxMilcblxuICAgIHJldHVybiB7IG5hbWUsIGJhc2UsIGFjY3MsIHNlbWkgfVxuICB9XG5cbiAgZnJvbVNlbWkoc2VtaSkge1xuICAgIGxldCBpbnR2ID0gbmV3IHRoaXMuQ3RyKHRoaXMuc2VtaTJuYW1lKHNlbWkpKVxuICAgIGxldCBuYW1lID0gU3RyaW5nKGludHYubmFtZSlcbiAgICBsZXQgYmFzZSA9IFN0cmluZyhpbnR2LmJhc2UpXG4gICAgbGV0IGFjY3MgPSBOdW1iZXIoaW50di5hY2NzKVxuICAgICAgICBzZW1pID0gTnVtYmVyKGludHYuc2VtaSlcblxuICAgIHJldHVybiB7IG5hbWUsIGJhc2UsIGFjY3MsIHNlbWkgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1IZWxwZXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlbHBlcnMvSXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJTlRWUywgTk9URVMgfSBmcm9tICcuL3N5bWJvbHMnXG5pbXBvcnQgeyBhcnIyaXRlbXMgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IE5vdGUgZnJvbSAnLi4vTm90ZSdcbmltcG9ydCBJbnRlcnZhbCBmcm9tICcuLi9JbnRlcnZhbCdcblxuY2xhc3MgTW9kZUhlbHBlciB7XG4gIHN0YXRpYyBub3Rlcyhyb290LCBpbnR2cykge1xuICAgIHJldHVybiBpbnR2cy5tYXAoaW50diA9PiByb290LmFkZChpbnR2KSlcbiAgfVxuXG4gIHN0YXRpYyBzY2FsZShyb290LCBpbnR2cykge1xuICAgIHJvb3QgICAgICA9IHJvb3QuY2xvbmUoKVxuICAgIGludHZzICAgICA9IEludGVydmFsLmNsb25lKGludHZzKVxuICAgIGxldCBwcmV2ICA9IG5ldyBJbnRlcnZhbChJTlRWU1swXSlcblxuICAgIGludHZzLnB1c2gocHJldilcbiAgICBpbnR2cyA9IGludHZzLm1hcChpbnR2ID0+IHtcbiAgICAgIGNvbnN0IHN1YiA9IGludHYuc3ViKHByZXYpXG4gICAgICBwcmV2ID0gaW50dlxuXG4gICAgICByZXR1cm4gc3ViXG4gICAgfSlcblxuICAgIGludHZzLnNoaWZ0KClcbiAgICByZXR1cm4gbmV3IE1vZGVIZWxwZXIuU2NhbGUocm9vdCwgaW50dnMpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUk9PVCAgPSBuZXcgTm90ZShOT1RFU1swXSlcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOVFZTID0gYXJyMml0ZW1zKEludGVydmFsLCBJTlRWUylcblxuZXhwb3J0IGRlZmF1bHQgTW9kZUhlbHBlclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVscGVycy9Nb2RlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXJzL0l0ZW0nXG5pbXBvcnQgeyBOT1RFUyB9IGZyb20gJy4vaGVscGVycy9zeW1ib2xzJ1xuaW1wb3J0IHsgTk9URTJTRU1JLCBzZW1pMm5vdGUgfSBmcm9tICcuL2hlbHBlcnMvdXRpbHMnXG5cbmNsYXNzIE5vdGUgZXh0ZW5kcyBJdGVtIHtcbiAgY29uc3RydWN0b3IoYXJnID0gTk9URVNbMF0pIHtcbiAgICBzdXBlcihhcmcpXG4gIH1cbn1cblxuTm90ZS5oZWxwZXIgPSBuZXcgSGVscGVyKE5vdGUsIE5PVEVTLCBOT1RFMlNFTUksIHNlbWkybm90ZSlcblxuZXhwb3J0IGRlZmF1bHQgTm90ZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTm90ZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBJdGVtIHtcbiAgY29uc3RydWN0b3IoYXJnKSB7XG4gICAgbGV0IG5hbWVcbiAgICBsZXQgYmFzZVxuICAgIGxldCBhY2NzXG4gICAgbGV0IHNlbWlcblxuICAgIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgICAgKHsgbmFtZSwgYmFzZSwgYWNjcywgc2VtaSB9ID0gdGhpcy5jb25zdHJ1Y3Rvci5oZWxwZXIucGFyc2UoYXJnKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgICAoeyBuYW1lLCBiYXNlLCBhY2NzLCBzZW1pIH0gPSB0aGlzLmNvbnN0cnVjdG9yLmhlbHBlci5mcm9tU2VtaShhcmcpKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9QGNvbnN0cnVjdG9yOiBgXG4gICAgICArIGBhcmcgbXVzdCBiZSBzdHJpbmcgb3IgbnVtYmVyLCBnb3Q6YFxuICAgICAgLCBhcmdcbiAgICAgIClcbiAgICAgIHRocm93ICcnXG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMuYmFzZSA9IGJhc2VcbiAgICB0aGlzLmFjY3MgPSBhY2NzXG4gICAgdGhpcy5zZW1pID0gc2VtaVxuICB9XG5cbiAgYWRkKGl0ZW0pIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5zZW1pICsgaXRlbS5zZW1pKVxuICB9XG5cbiAgc3ViKGl0ZW0pIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5zZW1pIC0gaXRlbS5zZW1pKVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMubmFtZSlcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmNsb25lKCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvSXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJTlRWUywgTk9URVMgfSBmcm9tICcuL3N5bWJvbHMnXG5pbXBvcnQgeyBTRU1JMklOVFYsIGZhY3RvcnMsIGFycjJpdGVtcyB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgTm90ZSBmcm9tICcuLi9Ob3RlJ1xuaW1wb3J0IEludGVydmFsIGZyb20gJy4uL0ludGVydmFsJ1xuXG5jbGFzcyBTY2FsZUhlbHBlciB7XG4gIHN0YXRpYyBub3Rlcyhtb2Rlcykge1xuICAgIHJldHVybiBOb3RlLmNsb25lKG1vZGVzWzBdLm5vdGVzKVxuICB9XG5cbiAgc3RhdGljIG1vZGVzKHJvb3QsIGludHZzKSB7XG4gICAgcm9vdCAgICAgICAgICAgPSByb290LmNsb25lKClcbiAgICBpbnR2cyAgICAgICAgICA9IEludGVydmFsLmNsb25lKGludHZzKVxuICAgIGNvbnN0IHN5bW1ldHJ5ID0gU2NhbGVIZWxwZXIuc3ltbWV0cnkoaW50dnMpXG4gICAgbGV0IG1vZGVzICAgICAgPSBbU2NhbGVIZWxwZXIubW9kZShyb290LCBpbnR2cyldXG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN5bW1ldHJ5OyArK2kpIHtcbiAgICAgIGludHZzLnB1c2goaW50dnMuc2hpZnQoKSlcbiAgICAgIG1vZGVzLnB1c2goXG4gICAgICAgIFNjYWxlSGVscGVyLm1vZGUoXG4gICAgICAgICAgcm9vdC5hZGQobW9kZXNbMF0ubm90ZXNbaV0pXG4gICAgICAgICwgaW50dnMpXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGVzXG4gIH1cblxuICBzdGF0aWMgbW9kZShyb290LCBpbnR2cykge1xuICAgIHJvb3QgICAgID0gcm9vdC5jbG9uZSgpXG4gICAgaW50dnMgICAgPSBJbnRlcnZhbC5jbG9uZShpbnR2cylcbiAgICBsZXQgcHJldiA9IG5ldyBJbnRlcnZhbChJTlRWU1swXSlcblxuICAgIGludHZzLnVuc2hpZnQocHJldilcbiAgICBpbnR2cyA9IGludHZzLm1hcChpbnR2ID0+IHtcbiAgICAgIGNvbnN0IGFkZCA9IGludHYuYWRkKHByZXYpXG4gICAgICBwcmV2ID0gYWRkXG5cbiAgICAgIHJldHVybiBhZGRcbiAgICB9KVxuXG4gICAgaW50dnMucG9wKClcbiAgICByZXR1cm4gbmV3IFNjYWxlSGVscGVyLk1vZGUocm9vdCwgaW50dnMpXG4gIH1cblxuICBzdGF0aWMgc3ltbWV0cnkoaW50dnMpIHtcbiAgICBjb25zdCBsICAgICA9IGludHZzLmxlbmd0aFxuICAgIGNvbnN0IHNlbWlzID0gaW50dnMubWFwKGludHYgPT4gaW50di5zZW1pKVxuICAgIGNvbnN0IGZjdHJzID0gZmFjdG9ycyhsKVxuXG4gICAgZm9yIChsZXQgZmFjdG9yIG9mIGZjdHJzKSB7XG4gICAgICBjb25zdCBwYXR0ZXJuID0gc2VtaXMuc2xpY2UoMCwgZmFjdG9yKVxuICAgICAgY29uc3QgdGVzdCAgICA9IEFycmF5LnByb3RvdHlwZVxuICAgICAgICAuY29uY2F0LmFwcGx5KFtdLCBBcnJheShsIC8gZmFjdG9yKS5maWxsKHBhdHRlcm4pKVxuXG4gICAgICBpZiAoc2VtaXMuam9pbignICcpID09PSB0ZXN0LmpvaW4oJyAnKSlcbiAgICAgICAgcmV0dXJuIGZhY3RvclxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9ST09UICA9IG5ldyBOb3RlKE5PVEVTWzBdKVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5UVlMgPSBhcnIyaXRlbXMoSW50ZXJ2YWwsIFtcbiAgICBTRU1JMklOVFZbMl1cbiAgLCBTRU1JMklOVFZbMl1cbiAgLCBTRU1JMklOVFZbMV1cbiAgLCBTRU1JMklOVFZbMl1cbiAgLCBTRU1JMklOVFZbMl1cbiAgLCBTRU1JMklOVFZbMl1cbiAgLCBTRU1JMklOVFZbMV1cbiAgXVxuKVxuXG5leHBvcnQgZGVmYXVsdCBTY2FsZUhlbHBlclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVscGVycy9TY2FsZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJuYW1lXCI6XCJzdXNcIixcImludGVydmFsc1wiOlwiNCAyIDRcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcInN1czRcIixcImludGVydmFsc1wiOlwiMSA0IDVcIn0se1wibmFtZVwiOlwic3VzMlwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgNVwifV19LHtcIm5hbWVcIjpcIsKwXCIsXCJpbnRlcnZhbHNcIjpcIuKZrTMg4pmtMyDima80XCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCLCsFwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTMg4pmtNVwifV19LHtcIm5hbWVcIjpcIi1cIixcImludGVydmFsc1wiOlwi4pmtMyAzIDRcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIi1cIixcImludGVydmFsc1wiOlwiMSDima0zIDVcIn1dfSx7XCJuYW1lXCI6XCLOlFwiLFwiaW50ZXJ2YWxzXCI6XCIzIOKZrTMgNFwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwizpRcIixcImludGVydmFsc1wiOlwiMSAzIDVcIn1dfSx7XCJuYW1lXCI6XCIrXCIsXCJpbnRlcnZhbHNcIjpcIjMgMyDima00XCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCIrXCIsXCJpbnRlcnZhbHNcIjpcIjEgMyDima81XCJ9XX0se1wibmFtZVwiOlwiwrA3XCIsXCJpbnRlcnZhbHNcIjpcIuKZrTMg4pmtMyDima0zIOKZrTNcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIsKwN1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTMg4pmtNSDima3ima03XCJ9XX0se1wibmFtZVwiOlwiw7hcIixcImludGVydmFsc1wiOlwi4pmtMyDima0zIDMgMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiw7hcIixcImludGVydmFsc1wiOlwiMSDima0zIOKZrTUg4pmtN1wifSx7XCJuYW1lXCI6XCItNlwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTMgNSA2XCJ9XX0se1wibmFtZVwiOlwiLTdcIixcImludGVydmFsc1wiOlwi4pmtMyAzIOKZrTMgMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiLTdcIixcImludGVydmFsc1wiOlwiMSDima0zIDUg4pmtN1wifSx7XCJuYW1lXCI6XCLOlDZcIixcImludGVydmFsc1wiOlwiMSAzIDUgNlwifV19LHtcIm5hbWVcIjpcIi3OlDdcIixcImludGVydmFsc1wiOlwi4pmtMyAzIDMg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiLc6UN1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTMgNSA3XCJ9XX0se1wibmFtZVwiOlwiN+KZrTVcIixcImludGVydmFsc1wiOlwiMyAyIDMgMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiN+KZrTVcIixcImludGVydmFsc1wiOlwiMSAzIOKZrTUg4pmtN1wifV19LHtcIm5hbWVcIjpcIjdcIixcImludGVydmFsc1wiOlwiMyDima0zIOKZrTMgMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiN1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDMgNSDima03XCJ9XX0se1wibmFtZVwiOlwiN+KZrzVcIixcImludGVydmFsc1wiOlwiMyAzIDIgMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiN+KZrzVcIixcImludGVydmFsc1wiOlwiMSAzIOKZrzUg4pmtN1wifV19LHtcIm5hbWVcIjpcIs6UN1wiLFwiaW50ZXJ2YWxzXCI6XCIzIOKZrTMgMyDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCLOlDdcIixcImludGVydmFsc1wiOlwiMSAzIDUgN1wifV19XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RpY3QvY2hvcmRzLnltbFxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJuYW1lXCI6XCJQZW50YXRvbmljIChEaWF0b25pYylcIixcImludGVydmFsc1wiOlwiMiAyIOKZrTMgMiDima0zXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJQZW50YXRvbmljIE1ham9yXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIDUgNlwifSxudWxsLG51bGwsbnVsbCx7XCJuYW1lXCI6XCJQZW50YXRvbmljIE1pbm9yXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMyA0IDUg4pmtN1wifV19LHtcIm5hbWVcIjpcIldob2xlIFRvbmVcIixcImludGVydmFsc1wiOlwiMiAyIDIgMiAyIDJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIldob2xlIFRvbmUgKDcpXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIOKZrTUg4pmvNSDima03XCJ9XX0se1wibmFtZVwiOlwiRGlhdG9uaWNcIixcImludGVydmFsc1wiOlwiMiAyIOKZrTIgMiAyIDIg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiSW9uaWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIDQgNSA2IDdcIn0se1wibmFtZVwiOlwiRG9yaWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQgNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiUGhyeWdpYW5cIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrTMgNCA1IOKZrTYg4pmtN1wifSx7XCJuYW1lXCI6XCJMeWRpYW5cIixcImludGVydmFsc1wiOlwiMSAyIDMg4pmvNCA1IDYgN1wifSx7XCJuYW1lXCI6XCJNaXhvbHlkaWFuXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIDQgNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiQWVvbGlhblwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyA0IDUg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIkxvY3JpYW5cIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrTMgNCDima01IOKZrTYg4pmtN1wifV19LHtcIm5hbWVcIjpcIkRvdWJsZSBIYXJtb25pYyBNYWpvclwiLFwiaW50ZXJ2YWxzXCI6XCLima0yIOKZrTMg4pmtMiAyIOKZrTIg4pmtMyDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJJb25pYW4g4pmtOSDima0xM1wiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIgMyA0IDUg4pmtNiA3XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiDima85IOKZrzEzXCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmvMiAzIOKZrzQgNSDima82IDdcIn0se1wibmFtZVwiOlwiRG91YmxlIEhhcm1vbmljIE1ham9yIG7CsDNcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrzIgMyA1IOKZrTYg4pmt4pmtN1wifSx7XCJuYW1lXCI6XCJIdW5nYXJpYW4gTWlub3JcIixcImludGVydmFsc1wiOlwiMSAyIOKZrTMg4pmvNCA1IOKZrTYgN1wifSx7XCJuYW1lXCI6XCJPcmllbnRhbCAvIE1peG9seWRpYW4g4pmtNSDima05XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiAzIDQg4pmtNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiSW9uaWFuIOKZrzUg4pmvOVwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrzIgMyA0IOKZrzUgNiA3XCJ9LHtcIm5hbWVcIjpcIkxvY3JpYW4g4pmt4pmtMyDima3ima03XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiDima3ima0zIDQg4pmtNSDima02IOKZreKZrTdcIn1dfSx7XCJuYW1lXCI6XCJIYXJtb25pYyBNYWpvclwiLFwiaW50ZXJ2YWxzXCI6XCIyIDIg4pmtMiAyIOKZrTIg4pmtMyDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJJb25pYW4g4pmtMTNcIixcImludGVydmFsc1wiOlwiMSAyIDMgNCA1IOKZrTYgN1wifSx7XCJuYW1lXCI6XCJEb3JpYW4g4pmtNVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyA0IOKZrTUgNiDima03XCJ9LHtcIm5hbWVcIjpcIkhhcm1vbmljIE1ham9yIG7CsDNcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrzIgMyA1IOKZrTYg4pmtN1wifSx7XCJuYW1lXCI6XCJMeWRpYW4g4pmtM1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyDima80IDUgNiA3XCJ9LHtcIm5hbWVcIjpcIk1peG9seWRpYW4g4pmtOVwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIgMyA0IDUgNiDima03XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiDima81IOKZrzlcIixcImludGVydmFsc1wiOlwiMSDima8yIDMg4pmvNCDima81IDYgN1wifSx7XCJuYW1lXCI6XCJMb2NyaWFuIOKZreKZrTdcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrTMgNCDima01IOKZrTYg4pmt4pmtN1wifV19LHtcIm5hbWVcIjpcIkhhcm1vbmljIE1pbm9yXCIsXCJpbnRlcnZhbHNcIjpcIjIg4pmtMiAyIDIg4pmtMiDima0zIOKZrTJcIixcIm1vZGVzXCI6W3tcIm5hbWVcIjpcIkFlb2xpYW4g4pmuN1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyA0IDUg4pmtNiA3XCJ9LHtcIm5hbWVcIjpcIkxvY3JpYW4g4pmuMTNcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrTMgNCDima01IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJJb25pYW4g4pmvNVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgMyA0IOKZrzUgNiA3XCJ9LHtcIm5hbWVcIjpcIkRvcmlhbiDima8xMVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyDima80IDUgNiDima03XCJ9LHtcIm5hbWVcIjpcIlBocnlnaWFuIERvbWluYW50XCIsXCJpbnRlcnZhbHNcIjpcIjEg4pmtMiAzIDQgNSDima02IOKZrTdcIn0se1wibmFtZVwiOlwiTHlkaWFuIOKZrzlcIixcImludGVydmFsc1wiOlwiMSDima8yIDMg4pmvNCA1IDYgN1wifSx7XCJuYW1lXCI6XCJTdXBlckxvY3JpYW4gRGltaW5pc2hlZFwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmvMiAzIOKZrTUg4pmvNSDima3ima03XCJ9XX0se1wibmFtZVwiOlwiTWVsb2RpYyBNaW5vclwiLFwiaW50ZXJ2YWxzXCI6XCIyIOKZrTIgMiAyIDIgMiDima0yXCIsXCJtb2Rlc1wiOlt7XCJuYW1lXCI6XCJEb3JpYW4g4pmuN1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyA0IDUgNiA3XCJ9LHtcIm5hbWVcIjpcIlBocnlnaWFuIOKZrjEzIC8gRG9yaWFuIOKZrTJcIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrTMgNCA1IDYg4pmtN1wifSx7XCJuYW1lXCI6XCJMeWRpYW4g4pmvNVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgMyDima80IOKZrzUgNiA3XCJ9LHtcIm5hbWVcIjpcIkx5ZGlhbiBEb21taW5hbnQgLyBNaXhvbHlkaWFuIOKZrzExXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiAzIOKZrzQgNSA2IOKZrTdcIn0se1wibmFtZVwiOlwiTWl4b2x5ZGlhbiDima0xMyAvIEFlb2xpYW4g4pmuM1wiLFwiaW50ZXJ2YWxzXCI6XCIxIDIgMyA0IDUg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIkFlb2xpYW4g4pmtNSAvIExvY3JpYW4g4pmuOVwiLFwiaW50ZXJ2YWxzXCI6XCIxIDIg4pmtMyA0IOKZrTUg4pmtNiDima03XCJ9LHtcIm5hbWVcIjpcIkFsdGVyZWQgLyBTdXBlckxvY3JpYW5cIixcImludGVydmFsc1wiOlwiMSDima0yIOKZrzIgMyDima01IOKZrzUg4pmtN1wifV19LHtcIm5hbWVcIjpcIkRvdWJsZSBEaW1pbmlzaGVkXCIsXCJpbnRlcnZhbHNcIjpcIjIg4pmtMiAyIOKZrTIgMiDima0yIDIg4pmtMlwiLFwibW9kZXNcIjpbe1wibmFtZVwiOlwiV2hvbGUgSGFsZiAowrApXCIsXCJpbnRlcnZhbHNcIjpcIjEgMiDima0zIDQg4pmtNSDima81IOKZreKZrTcgN1wifSx7XCJuYW1lXCI6XCJIYWxmIFdob2xlICg3KVwiLFwiaW50ZXJ2YWxzXCI6XCIxIOKZrTIg4pmvMiAzIOKZrTUgNSA2IOKZrTdcIn1dfV1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kaWN0L3NjYWxlcy55bWxcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGhlbHBlciwgeyBERUZBVUxUX1JPT1QsIERFRkFVTFRfSU5UVlMgfSBmcm9tICcuL2hlbHBlcnMvTW9kZSdcbmltcG9ydCBTY2FsZUhlbHBlciBmcm9tICcuL2hlbHBlcnMvU2NhbGUnXG5pbXBvcnQgSW50ZXJ2YWwgZnJvbSAnLi9JbnRlcnZhbCdcblxuY2xhc3MgTW9kZSB7XG4gIGNvbnN0cnVjdG9yKHJvb3QgPSBERUZBVUxUX1JPT1QsIGludHZzID0gREVGQVVMVF9JTlRWUykge1xuICAgIHRoaXMucm9vdCAgPSByb290XG4gICAgdGhpcy5pbnR2cyA9IGludHZzXG4gICAgdGhpcy5ub3RlcyA9IGhlbHBlci5ub3Rlcyh0aGlzLnJvb3QsIHRoaXMuaW50dnMpXG4gIH1cblxuICBzY2FsZSgpIHtcbiAgICByZXR1cm4gaGVscGVyLnNjYWxlKHRoaXMucm9vdCwgdGhpcy5pbnR2cylcbiAgfVxuXG4gIGdldERlZ3JlZShpbnR2KSB7XG4gICAgZm9yKGxldCBpIG9mIHRoaXMuaW50dnMpIHtcbiAgICAgIGlmIChpLnNlbWkgPT09IGludHYuc2VtaSkgcmV0dXJuIGkuY2xvbmUoKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBkb2VzSW5jbHVkZShtb2RlKSB7XG4gICAgaWYgKHRoaXMuaW50dnMubGVuZ3RoIDw9IG1vZGUuaW50dnMubGVuZ3RoKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCBzZW1pcyA9IHRoaXMuaW50dnMubWFwKGludHYgPT4gaW50di5zZW1pKVxuXG4gICAgZm9yIChsZXQgaW50diBvZiBtb2RlLmludHZzKSB7XG4gICAgICBpZighc2VtaXMuaW5jbHVkZXMoaW50di5zZW1pKSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHRvU3RyaW5nKHNlbWkgPSBmYWxzZSkge1xuICAgIHJldHVybiB0aGlzLmludHZzXG4gICAgICAubWFwKGludHYgPT4gc2VtaSA/IGludHYuc2VtaSA6IGludHYubmFtZSlcbiAgICAgIC5qb2luKCcgJylcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgTW9kZSh0aGlzLnJvb3QuY2xvbmUoKSwgSW50ZXJ2YWwuY2xvbmUodGhpcy5pbnR2cykpXG4gIH1cbn1cblxuU2NhbGVIZWxwZXIuTW9kZSA9IE1vZGVcblxuZXhwb3J0IGRlZmF1bHQgTW9kZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTW9kZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGhlbHBlciwgeyBERUZBVUxUX1JPT1QsIERFRkFVTFRfSU5UVlMgfSBmcm9tICcuL2hlbHBlcnMvU2NhbGUnXG5pbXBvcnQgTW9kZUhlbHBlciBmcm9tICcuL2hlbHBlcnMvTW9kZSdcbmltcG9ydCBJbnRlcnZhbCBmcm9tICcuL0ludGVydmFsJ1xuXG5jbGFzcyBTY2FsZSB7XG4gIGNvbnN0cnVjdG9yKHJvb3QgPSBERUZBVUxUX1JPT1QsIGludHZzID0gREVGQVVMVF9JTlRWUykge1xuICAgIHRoaXMucm9vdCAgPSByb290XG4gICAgdGhpcy5pbnR2cyA9IGludHZzXG4gICAgdGhpcy5tb2RlcyA9IGhlbHBlci5tb2Rlcyh0aGlzLnJvb3QsIHRoaXMuaW50dnMpXG4gICAgdGhpcy5ub3RlcyA9IGhlbHBlci5ub3Rlcyh0aGlzLm1vZGVzKVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBTY2FsZSh0aGlzLnJvb3QuY2xvbmUoKSwgSW50ZXJ2YWwuY2xvbmUodGhpcy5pbnR2cykpXG4gIH1cbn1cblxuTW9kZUhlbHBlci5TY2FsZSA9IFNjYWxlXG5cbmV4cG9ydCBkZWZhdWx0IFNjYWxlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TY2FsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHN5bWJvbHMgZnJvbSAnLi9oZWxwZXJzL3N5bWJvbHMnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi9oZWxwZXJzL3V0aWxzJ1xuaW1wb3J0IEl0ZW1IZWxwZXIgZnJvbSAnLi9oZWxwZXJzL0l0ZW0nXG5pbXBvcnQgTW9kZUhlbHBlciBmcm9tICcuL2hlbHBlcnMvTW9kZSdcbmltcG9ydCBTY2FsZUhlbHBlciBmcm9tICcuL2hlbHBlcnMvU2NhbGUnXG5pbXBvcnQgY2hvcmRzIGZyb20gJy4vZGljdC9jaG9yZHMueW1sJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuL2RpY3Qvc2NhbGVzLnltbCdcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcbmltcG9ydCBJbnRlcnZhbCBmcm9tICcuL0ludGVydmFsJ1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9Ob3RlJ1xuaW1wb3J0IE1vZGUgZnJvbSAnLi9Nb2RlJ1xuaW1wb3J0IFNjYWxlIGZyb20gJy4vU2NhbGUnXG5pbXBvcnQgRGljdCBmcm9tICcuL0RpY3QnXG5cbmNvbnN0IE11SlMgPSB7XG4gIHN5bWJvbHM6IHN5bWJvbHNcbiwgdXRpbHM6IHV0aWxzXG4sIEl0ZW1IZWxwZXI6IEl0ZW1IZWxwZXJcbiwgTW9kZUhlbHBlcjogTW9kZUhlbHBlclxuLCBTY2FsZUhlbHBlcjogU2NhbGVIZWxwZXJcbiwgY2hvcmRzOiBjaG9yZHNcbiwgc2NhbGVzOiBzY2FsZXNcbiwgSXRlbTogSXRlbVxuLCBJbnRlcnZhbDogSW50ZXJ2YWxcbiwgTm90ZTogTm90ZVxuLCBNb2RlOiBNb2RlXG4sIFNjYWxlOiBTY2FsZVxuLCBEaWN0OiBEaWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11SlNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJbnRlcnZhbCBmcm9tICcuL0ludGVydmFsJ1xuaW1wb3J0IFNjYWxlIGZyb20gJy4vU2NhbGUnXG5pbXBvcnQgTW9kZSBmcm9tICcuL01vZGUnXG5pbXBvcnQgeyBzdHIyaXRlbXMgfSBmcm9tICcuL2hlbHBlcnMvdXRpbHMnXG5pbXBvcnQgU0NBTEVTIGZyb20gJy4vZGljdC9zY2FsZXMueW1sJ1xuaW1wb3J0IENIT1JEUyBmcm9tICcuL2RpY3QvY2hvcmRzLnltbCdcblxubGV0IERJQ1QgICAgID0gW11cbmxldCBNT0RFUyAgICA9IFtdXG5sZXQgRVFVQUxTICAgPSB7fVxubGV0IFNJTUlMQVJTID0ge31cblxuY2xhc3MgRGljdCB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIERpY3QuX2luaXRTY2FsZXMoKVxuICAgIERpY3QuX21hdGNoSW5jbHVzaW9ucygpXG5cbiAgICByZXR1cm4gRGljdFxuICB9XG5cbiAgc3RhdGljIHNjYWxlcygpIHtcbiAgICByZXR1cm4gRElDVFxuICB9XG5cbiAgc3RhdGljIG1vZGVzKCkge1xuICAgIHJldHVybiBNT0RFU1xuICB9XG5cbiAgc3RhdGljIGdldChtb2RlKSB7XG4gICAgbW9kZSA9IG1vZGUuY2xvbmUoKVxuXG4gICAgY29uc3QgaSA9IEVRVUFMU1ttb2RlLnRvU3RyaW5nKCldXG4gICAgaWYgKHR5cGVvZiBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIE1PREVTW2ldXG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaiA9IFNJTUlMQVJTW21vZGUudG9TdHJpbmcodHJ1ZSldXG4gICAgICBpZiAodHlwZW9mIGogIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IHNpbWlsYXIgPSBNT0RFU1tqXVxuICAgICAgICBjb25zdCBpbnR2cyAgID0gbW9kZS5pbnR2c1xuXG4gICAgICAgIG1vZGUgICAgICAgPSBzaW1pbGFyLmNsb25lKClcbiAgICAgICAgbW9kZS5uYW1lICA9IGB+ICR7c2ltaWxhci5uYW1lfWBcbiAgICAgICAgbW9kZS5pbnR2cyA9IGludHZzXG5cbiAgICAgICAgcmV0dXJuIG1vZGVcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIERpY3QuX3NhZmVuKG1vZGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9zYWZlbihtb2RlKSB7XG4gICAgbW9kZS5uYW1lICAgICA9ICcnXG4gICAgbW9kZS50eXBlICAgICA9IG1vZGUuaW50dnMubGVuZ3RoID4gNCA/ICdtb2RlJyA6ICdjaG9yZCdcbiAgICBtb2RlLmluY2x1ZGVzID0gTU9ERVMuZmlsdGVyKF9tb2RlID0+ICBtb2RlLmRvZXNJbmNsdWRlKF9tb2RlKSlcbiAgICBtb2RlLmluY2x1ZGVkID0gTU9ERVMuZmlsdGVyKF9tb2RlID0+IF9tb2RlLmRvZXNJbmNsdWRlKCBtb2RlKSlcblxuICAgIHJldHVybiBtb2RlXG4gIH1cblxuICBzdGF0aWMgX2luaXRTY2FsZXMoKSB7XG4gICAgRElDVCA9XG4gICAgICBDSE9SRFNcbiAgICAgICAgLm1hcChjaG9yZCA9PiBPYmplY3QuYXNzaWduKGNob3JkLCB7IHR5cGU6ICdjaG9yZCcgfSkpXG4gICAgICAuY29uY2F0KFxuICAgICAgICBTQ0FMRVNcbiAgICAgICAgICAubWFwKHNjYWxlID0+IE9iamVjdC5hc3NpZ24oc2NhbGUsIHsgdHlwZTogJ21vZGUnIH0pKVxuICAgICAgKVxuICAgICAgLm1hcChzY2FsZSA9PiB7XG4gICAgICAgIGxldCBuYW1lICA9IHNjYWxlLm5hbWVcbiAgICAgICAgbGV0IHR5cGUgID0gc2NhbGUudHlwZVxuICAgICAgICBsZXQgbW9kZXMgPSBzY2FsZS5tb2Rlc1xuXG4gICAgICAgIHNjYWxlICAgICAgPSBuZXcgU2NhbGUodW5kZWZpbmVkLCBzdHIyaXRlbXMoSW50ZXJ2YWwsIHNjYWxlLmludGVydmFscykpXG4gICAgICAgIHNjYWxlLm5hbWUgPSBuYW1lXG4gICAgICAgIHNjYWxlLnR5cGUgPSB0eXBlXG4gICAgICAgIERJQ1QucHVzaChzY2FsZSlcblxuICAgICAgICBzY2FsZS5tb2RlcyA9IHNjYWxlLm1vZGVzLm1hcCgobSwgaSkgPT4ge1xuICAgICAgICAgIGxldCBtb2RlID0gbW9kZXNbaV1cblxuICAgICAgICAgIGlmICghbW9kZSkge1xuICAgICAgICAgICAgbW9kZSAgICAgID0gbVxuICAgICAgICAgICAgbW9kZS5uYW1lID0gYCR7c2NhbGUubmFtZX0gbsKwJHtpICsgMX1gXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuYW1lICA9IG1vZGUubmFtZVxuICAgICAgICAgICAgbW9kZSAgICAgID0gbmV3IE1vZGUodW5kZWZpbmVkLCBzdHIyaXRlbXMoSW50ZXJ2YWwsIG1vZGUuaW50ZXJ2YWxzKSlcbiAgICAgICAgICAgIG1vZGUubmFtZSA9IG5hbWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtb2RlLnR5cGUgICAgID0gdHlwZVxuICAgICAgICAgIG1vZGUuaW5jbHVkZXMgPSBbXVxuICAgICAgICAgIG1vZGUuaW5jbHVkZWQgPSBbXVxuXG4gICAgICAgICAgbW9kZS5zY2FsZSA9IERpY3QuX3NjYWxlKHNjYWxlLCBpKVxuICAgICAgICAgIG1vZGUuY2xvbmUgPSBEaWN0Ll9tb2RlQ2xvbmUobW9kZSwgbW9kZS5jbG9uZSlcbiAgICAgICAgICBNT0RFUy5wdXNoKG1vZGUpXG5cbiAgICAgICAgICByZXR1cm4gbW9kZVxuICAgICAgICB9KVxuXG4gICAgICAgIHNjYWxlLmNsb25lID0gRGljdC5fc2NhbGVDbG9uZShzY2FsZSwgc2NhbGUuY2xvbmUpXG5cbiAgICAgICAgcmV0dXJuIHNjYWxlXG4gICAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9tYXRjaEluY2x1c2lvbnMoKSB7XG4gICAgbGV0IGZvdW5kID0gW11cblxuICAgIE1PREVTLmZvckVhY2goKG1vZGUxLCBpKSA9PiB7XG4gICAgICBmb3VuZFtpXSA9IGZvdW5kW2ldIHx8IFtdXG5cbiAgICAgIGNvbnN0IGlkID0gbW9kZTEudG9TdHJpbmcoKVxuICAgICAgaWYgKEVRVUFMU1tpZF0pIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdGb3VuZCBlcXVhbCBtb2RlczonLCBFUVVBTFNbaWRdLCBtb2RlMSlcbiAgICAgIH1cbiAgICAgIEVRVUFMU1tpZF0gPSBpXG4gICAgICBTSU1JTEFSU1ttb2RlMS50b1N0cmluZyh0cnVlKV0gPSBpXG5cbiAgICAgIE1PREVTLmZvckVhY2goKG1vZGUyLCBqKSA9PiB7XG4gICAgICAgIGlmIChpID09PSBqKSByZXR1cm5cblxuICAgICAgICBmb3VuZFtqXSA9IGZvdW5kW2pdIHx8IFtdXG4gICAgICAgIGlmIChmb3VuZFtqXS5pbmNsdWRlcyhpKSkgcmV0dXJuXG5cbiAgICAgICAgaWYgKG1vZGUxLmRvZXNJbmNsdWRlKG1vZGUyKSkge1xuICAgICAgICAgIGZvdW5kW2ldLnB1c2goailcblxuICAgICAgICAgIG1vZGUxLmluY2x1ZGVzLnB1c2gobW9kZTIpXG4gICAgICAgICAgbW9kZTIuaW5jbHVkZWQucHVzaChtb2RlMSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9zY2FsZShzY2FsZSwgaSkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBtb2RlcyAgICA9IHNjYWxlLm1vZGVzLm1hcChtb2RlID0+IG1vZGUpXG5cbiAgICAgIGxldCBuZXdTY2FsZSAgID0gc2NhbGUuY2xvbmUoKVxuICAgICAgbmV3U2NhbGUubW9kZXMgPSBtb2Rlcy5zbGljZShpKS5jb25jYXQobW9kZXMuc2xpY2UoMCwgaSkpXG5cbiAgICAgIHJldHVybiBuZXdTY2FsZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfbW9kZUNsb25lKG1vZGUsIG9yaWdpbmFsQ2xvbmUpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSAgICAgPSBtb2RlLm5hbWVcbiAgICAgIGNvbnN0IHR5cGUgICAgID0gbW9kZS50eXBlXG4gICAgICBjb25zdCBpbmNsdWRlcyA9IG1vZGUuaW5jbHVkZXNcbiAgICAgIGNvbnN0IGluY2x1ZGVkID0gbW9kZS5pbmNsdWRlZFxuICAgICAgY29uc3Qgc2NhbGUgICAgPSBtb2RlLnNjYWxlXG4gICAgICBjb25zdCBjbG9uZSAgICA9IG1vZGUuY2xvbmVcblxuICAgICAgbGV0IG5ld01vZGUgICAgICA9IG9yaWdpbmFsQ2xvbmUuYmluZChtb2RlKSgpXG4gICAgICBuZXdNb2RlLm5hbWUgICAgID0gbmFtZVxuICAgICAgbmV3TW9kZS50eXBlICAgICA9IHR5cGVcbiAgICAgIG5ld01vZGUuaW5jbHVkZXMgPSBpbmNsdWRlc1xuICAgICAgbmV3TW9kZS5pbmNsdWRlZCA9IGluY2x1ZGVkXG4gICAgICBuZXdNb2RlLnNjYWxlICAgID0gc2NhbGVcbiAgICAgIG5ld01vZGUuY2xvbmUgICAgPSBjbG9uZVxuXG4gICAgICByZXR1cm4gbmV3TW9kZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfc2NhbGVDbG9uZShzY2FsZSwgb3JpZ2luYWxDbG9uZSkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lICA9IHNjYWxlLm5hbWVcbiAgICAgIGNvbnN0IHR5cGUgID0gc2NhbGUudHlwZVxuICAgICAgY29uc3QgbW9kZXMgPSBzY2FsZS5tb2Rlc1xuICAgICAgY29uc3QgY2xvbmUgPSBzY2FsZS5jbG9uZVxuXG4gICAgICBsZXQgbmV3U2NhbGUgICA9IG9yaWdpbmFsQ2xvbmUuYmluZChzY2FsZSkoKVxuICAgICAgbmV3U2NhbGUubmFtZSAgPSBuYW1lXG4gICAgICBuZXdTY2FsZS50eXBlICA9IHR5cGVcbiAgICAgIG5ld1NjYWxlLm1vZGVzID0gbW9kZXNcbiAgICAgIG5ld1NjYWxlLmNsb25lID0gY2xvbmVcblxuICAgICAgcmV0dXJuIG5ld1NjYWxlXG4gICAgfVxuICB9XG59XG5cbkRpY3QuaW5pdCgpXG5cbmV4cG9ydCBkZWZhdWx0IERpY3RcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0RpY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=