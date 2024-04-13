# Queue Basics

A queue is a fundamental data structure in computer science that follows the `First In, First Out` (FIFO) principle. 

>We define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list are made at the other end.

## Essential Actions

### 1. Enqueue — Adding to the Queue

- **What It Does:** Adds a new item to the back of the queue.
- **Example:**
```javascript
  queue.enqueue(5); // Add the number 5 to the back of the queue
```

### 2. Dequeue — Removing from the Queue

- **What It Does:** Removes and element from the from of the queue.
- **Example:**
```javascript
  queue.dequeue(); // Removes the front item from the queue
```

### 3. Peek — Looking at the Top Item

- **What It Does:** Allows you to see the item at the front of the queue without removing it.
- **Example:**
```javascript
  queue.isEmpty(); // // Returns the front item without removing it or undefined if the queue is empty
```

### 4. IsEmpty — Checking if the Queue is Empty

- **What It Does:** Checks if the queue is empty
- **Example:**
```javascript
  queue.isEmpty(); // Returns true if the queue is empty, false otherwise
```

### 5. IsFull — Checking if the Queue is Full

- **What It Does:** Checks if the queue is full
- **Example:**
```javascript
  queue.isFull(); // Returns true if the queue is full, false otherwise
```

### 6. Size — Returns the length of the queue

- **What It Does:** Checks if the queue is full
- **Example:**
```javascript
  queue.size(); // Returns the length of the queue
```