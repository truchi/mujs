export const modulo = (number, modulo) => ((number % modulo) + modulo) % modulo

__cache = {}
export class Cache {
  static get(key) {
    return __cache[key]
  }

  static set(key, value) {
    __cache[key] = value
  }

  static has(key) {
    return __chache.hasOwnProperty(key)
  }

  static remember(key, fn) {
    if (Cache.has(key))
      return Cache.get(key)

    const value = fn()
    Cache.set(key, value)

    return value
  }
}
