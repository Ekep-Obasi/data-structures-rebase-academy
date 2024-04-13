/**
 * Represents a linkedlList data structure.
 * @class
 */
class LinkedList {
  /**
   * Creates a new LinkedList instance.
   * @constructor
   * @param {*} value - The first node of the linkedList.
   */
  constructor(value) {
    /** @private */
    this.head = { value: value, next: null }
    /** @private */
    this.tail = this.head
  }

  /**
   * Inserts a new item the tail of the linkedList
   * @param {*} item - The item to insert.
   */
  insert(item) {
    // Implementation goes here
  }

  /**
   * Removes the node from the linked list
   * @returns {*} value - the deleted node's value
   */
  remove() {
    // Implementation goes here
  }

  /**
   * Removes the node at the tail of the list
   * @returns {*} - the removed node's value
   */
  removeTail() {
    // Implementation goes here
  }

  /**
   * Searches for a node in the linked list.
   * @param {*} value - the value
   * @returns {*} - returns the containing the searched value
   */
  contains(value) {
    // Implementation goes here
  }
}

module.exports = LinkedList
