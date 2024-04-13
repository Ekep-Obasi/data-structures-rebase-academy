const Stack = require('./implementation')

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test('push method', () => {
    stack.push(5)
    expect(stack.peek()).toBe(5)
  })

  test('pop method', () => {
    stack.push(1)
    stack.push(2)
    stack.pop()
    expect(stack.peek()).toBe(1)
  })

  test('peek method', () => {
    stack.push(10)
    stack.push(20)
    expect(stack.peek()).toBe(20)
    stack.pop()
    stack.pop()
    expect(stack.peek()).toBe('Underflow')
  })

  test('isEmpty method', () => {
    expect(stack.isEmpty()).toBe(true)
    stack.push(5)
    expect(stack.isEmpty()).toBe(false)
  })

  test('size method', () => {
    expect(stack.size()).toBe(0)
    stack.push(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
    stack.pop()
    expect(stack.size()).toBe(1)
  })
})
