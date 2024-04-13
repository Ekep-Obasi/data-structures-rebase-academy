const Queue = require('./implementation');

describe('Queue', () => {
  it('should create a new queue with a maximum size', () => {
    const maxSize = 5;
    const queue = new Queue(maxSize);
    expect(queue).toBeInstanceOf(Queue);
    expect(queue.maxSize).toBe(maxSize);
  });

  it('should enqueue items to the queue', () => {
    const queue = new Queue(5);
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);
    expect(queue.size()).toBe(3);
  });

  it('should dequeue items from the queue', () => {
    const queue = new Queue(5);
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);
    const dequeuedItem = queue.deQueue();
    expect(dequeuedItem).toBe(1);
    expect(queue.size()).toBe(2);
  });

  it('should return the front item of the queue without removing it', () => {
    const queue = new Queue(5);
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);
    const frontItem = queue.peek();
    expect(frontItem).toBe(1);
    expect(queue.size()).toBe(3);
  });

  it('should check if the queue is empty', () => {
    const queue = new Queue(5);
    expect(queue.isEmpty()).toBe(true);
    queue.enQueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  it('should check if the queue is full', () => {
    const queue = new Queue(3);
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);
    expect(queue.isFull()).toBe(true);
  });

  it('should calculate the length of the queue', () => {
    const queue = new Queue(5);
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);
    expect(queue.size()).toBe(3);
    queue.deQueue();
    expect(queue.size()).toBe(2);
  });
});
