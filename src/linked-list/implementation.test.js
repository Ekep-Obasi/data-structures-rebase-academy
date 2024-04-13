const LinkedList = require('./implementation')

describe('LinkedList', () => {
  let linkedList

  beforeEach(() => {
    linkedList = new LinkedList(1)
  })

  test('insert() should insert a new item at the tail of the linked list', () => {
    linkedList.insert(2)
    linkedList.insert(3)

    expect(linkedList.head.value).toBe(1)
    expect(linkedList.head.next.value).toBe(2)
    expect(linkedList.head.next.next.value).toBe(3)
    expect(linkedList.tail.value).toBe(3)
  })

  test('remove() should remove the head of the linked list and update head pointer', () => {
    linkedList.insert(2)
    linkedList.insert(3)
    linkedList.remove()

    expect(linkedList.head.value).toBe(2)
    expect(linkedList.head.next.value).toBe(3)
  })

  test('removeTail() should remove the tail of the linked list and update tail pointer', () => {
    linkedList.insert(2)
    linkedList.insert(3)
    linkedList.removeTail()

    expect(linkedList.head.value).toBe(1)
    expect(linkedList.head.next.value).toBe(2)
    expect(linkedList.tail.value).toBe(2)
  })

  test('contains() should return true if the value is present in the linked list', () => {
    linkedList.insert(2)
    linkedList.insert(3)

    expect(linkedList.contains(2)).toBe(true)
  })

  test('contains() should return false if the value is not present in the linked list', () => {
    linkedList.insert(2)
    linkedList.insert(3)

    expect(linkedList.contains(4)).toBe(false)
  })
})
