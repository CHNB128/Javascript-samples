const spy = require('./spy')

test('common', () => {
  let work = (a, b) => {
    // work is an arbitrary function or method
    a + b
  }

  work = spy(work)

  work(1, 2) // 3
  work(4, 5) // 9

  expect(work.calls).toEqual([[1, 2], [4, 5]])
})
