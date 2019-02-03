function debounce(func, timeout) {
  let isCooldown = false

  return function() {
    if (isCooldown) return

    func.apply(this, arguments)
    isCooldown = true
    setTimeout(() => (isCooldown = false), timeout)
  }
}

module.exports = debounce
