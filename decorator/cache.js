function cache(func, hash) {
  let cache = new Map()
  return function() {
    let key = hash(arguments)
    if (cache.has(key)) {
      return cache.get(key)
    }

    let result = func.apply(this, arguments)

    cache.set(key, result)
    return result
  }
}

module.exports = cahce
