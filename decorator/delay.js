function delay(func, timeout) {
  return function() {
    setTimeout(() => {
      func.apply(this, arguments)
    }, timeout)
  }
}

module.exports = delay
