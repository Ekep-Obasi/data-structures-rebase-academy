/**
 * Represents a queue data structure.
 * @class
 */
class Queue {
    /**
     * Creates a new Queue instance.
     * @constructor
     * @param {number} maxSize - The maximum size limit of the queue.
     */
    constructor(maxSize) {
      /** @private */
      this.maxSize = maxSize;
      /** @private */
      this.storage = {};
      /** @private */
      this.head = 0;
      /** @private */
      this.tail = -1;
    }
  
    /**
     * Adds a new item to the back of the queue, if the storage length is less than the maximum size.
     * @param {*} item - The item to be added to the queue.
     */
    enQueue(item) {
      // Implementation goes here
    }
  
    /**
     * Removes and returns the front item from the queue, if the queue is not empty.
     * @returns {*} The front item of the queue.
     */
    deQueue() {
      // Implementation goes here
    }
  
    /**
     * Checks if the queue is empty.
     * @returns {boolean} Returns true if the queue is empty, false otherwise.
     */
    isEmpty() {
      // Implementation goes here
    }
  
    /**
     * Checks if the queue is full.
     * @returns {boolean} Returns true if the queue is full, false otherwise.
     */
    isFull() {
      // Implementation goes here
    }
  
    /**
     * Returns the item at the front of the queue without removing it.
     * @returns {*} The front item of the queue.
     */
    peek() {
      // Implementation goes here
    }

      
    /**
     * Calculates the length of the queue at a particular time point.
     * @returns {number} The length of the queue.
     */
    size() {
        // Implementation goes here
    }
}

module.exports = Queue
 