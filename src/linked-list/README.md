# Linked List Basics

A linked list is a fundamental data structure in computer science that consists of a sequence of elements, where each element points to the next element in the sequence. Linked List is the structure where all elements are arranged in linear order, which is determined by pointer stored in each element.

Linked lists use `pointers` to connnect the pieces of structure to together


**Pointers** hold the memory address of variable -
the other words, pointer is a variable that through it you can modify/read another variable.


## Essential Actions

### 1. Insert — Adding to the List

- **What It Does:** Adds a new node to the beginning of the linked list.
- **Example:**
```javascript
  linkedList.insert(5); // Add the number 5 to the beginning of the linked list
```

### 2. Remove — Removing from the List

- **What It Does:** Removes a node from the linked list.
- **Example:**
```javascript
  linkedList.remove(5); // Removes the node with value 5 from the linked list
```

### 3. Contains — Finding an Node

- **What It Does:** Searches for a node in the linked list.
- **Example:**
```javascript
  linkedList.contains(5); // Returns the node containing the value 5 if found, otherwise returns null
```

### 4. IsEmpty — Checking if the List is Empty

- **What It Does:** Checks if the linked list is empty.
- **Example:**
```javascript
  linkedList.isEmpty(); // Returns true if the linked list is empty, false otherwise
```

### 5. Size — Returns the Length of the List

- **What It Does:** Returns the number of nodes in the linked list.
- **Example:**
```javascript
  linkedList.size(); // Returns the length of the linked list
```

### 6. Get Head — Returns the First Node

- **What It Does:** Returns the first node of the linked list.
- **Example:**
```javascript
  linkedList.getHead(); // Returns the first node of the linked list
```

### 7. Get Tail — Returns the Last Node

- **What It Does:** Returns the last node of the linked list.
- **Example:**
```javascript
  linkedList.getTail(); // Returns the last node of the linked list
```

### 8. IsHead - Checks if a Node is at the Head

- **What It Does:** 
- **Example:**
```javascript
  linkedList.isHead(); // Returns the first node of the linked list
```

### 9. IsTail - Checks if a Node is at the Tail

- **What It Does:** 
- **Example:**
```javascript
  linkedList.isHead(); // Returns the last node of the linked list
```