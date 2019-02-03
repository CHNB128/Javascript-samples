function spy(func) {
  let wrapper = (...args) => {
    wrapper.calls.push(args)
    return func.apply(this, arguments)
  }
  wrapper.calls = []
  return wrapper
}

module.exports = spy
