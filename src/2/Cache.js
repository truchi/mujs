let __cache = {}
window.__cache = __cache // For DEV

export class Cache {
  static get(key) {
    return __cache[key]
  }

  static set(key, value) {
    __cache[key] = value
  }

  static has(key) {
    return __cache.hasOwnProperty(key)
  }

  static remember(key, fn) {
    if (Cache.has(key))
      return Cache.get(key)

    const value = fn()
    Cache.set(key, value)

    return value
  }
}

export default Cache
