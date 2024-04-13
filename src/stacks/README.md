# Stack Basics

A stack is a fundamental data structure in computer science that follows the `Last In, First Out` (LIFO) and the `First In Last Out` principle. In JavaScript, stacks are commonly used for managing function calls, undo operations, and evaluating expressions.

## Essential Actions

### 1. Push — Adding to the Stack

- **What It Does:** Adds a new item to the top of the stack.
- **Example:**
  ```javascript
  stack.push(5); // Add the number 5 to the stack
  ```

### 2. Pop — Removing from the Stack

- **What It Does:** Removes the item at the top of the stack.
- **Example:**
  ```javascript
  stack.pop(); // Removes the top item from the stack
  ```

### 3. Peak — Looking at the Top Item

- **What It Does:** Allows you to see the top item of the stack without removing it.
- **Example:**
  ```javascript
  stack.peek(); // Returns the top item without removing it or underflow if the stack is empty
  ```

### 4. IsEmpty — Checking if the Stack is Empty

- **What It Does:** Allows you to see the top item of the stack without removing it.
- **Example:**
```javascript
 stack.isEmpty(); // Returns true if the stack is empty, false otherwise
  ```

### 5. Size — Checking if the Stack is Empty

- **What It Does:** Provides the number of items in the stack.
- **Example:**
```javascript
 stack.size(); // Returns the number of items in the stack
  ```