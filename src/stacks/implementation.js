/**
 * Represents a stack data structure.
 * @class
 */
class Stack {
    /**
     * Creates a new Stack instance.
     * @constructor
     */
    constructor() {
      /** @private */
      this.storage = {};
      /** @private */
      this.length = 0;
    }
  
    /**
     * Adds a new element to the top of the stack.
     * @param {*} element - The element to be added to the stack.
     */
    push(element) {
      // Implementation goes here
    }
  
    /**
     * Removes and returns the top element from the stack.
     * @returns {*} The top element of the stack.
     */
    pop() {
      // Implementation goes here
    }
  
    /**
     * Returns the top element of the stack without removing it.
     * returns "Underflow" if stack is empty 
     * @returns {*} The top element of the stack.
     */
    peek() {
      // Implementation goes here
    }
  
    /**
     * Checks if the stack is empty.
     * @returns {boolean} Returns true if the stack is empty, false otherwise.
     */
    isEmpty() {
      // Implementation goes here
    }
  
    /**
     * Returns the number of elements in the stack.
     * @returns {number} The number of elements in the stack.
     */
    size() {
      // Implementation goes here
    }
}
  
module.exports = Stack;
