// Sum Lists: You have two numbers represented by a linked list, where each
// node contains a single digit. The digits are stored in reverse order,
// such that the 1's digit is at the head of the list. Write a function
// that adds the two numbers and returns the sum as a linked list.

const LinkedList = require('../../lib/linked-list');

exports.sumLists = function(linkedList) {
  // Assume first head is ( character
  // and zero is given as ( -> 0 -> )
  let aDigit    = linkedList.head.next,
      carryOver = 0,
      result    = new LinkedList(),
      bDigit    = aDigit;

  // Find first bDigit
  while (bDigit.data !== '(')
    bDigit = bDigit.next;

  // Currently at (
  // Go next for second number's first digit
  bDigit = bDigit.next;

  let sumOfDigits;

  while (bDigit.data !== ')' || aDigit.data !== ')') {
    if (aDigit.data === ')') {
      // If first linked list is at end ) character
      sumOfDigits = 0 + bDigit.data + carryOver;
      bDigit      = bDigit.next;
    } else if (bDigit.data === ')') {
      // If second linked list is at end ) character
      sumOfDigits = 0 + aDigit.data + carryOver;
      aDigit      = aDigit.next;
    } else {
      // Both not at end
      sumOfDigits = bDigit.data + aDigit.data + carryOver;
      bDigit      = bDigit.next;
      aDigit      = aDigit.next;
    }

    // Check for carryover
    if (sumOfDigits > 9) {
      carryOver = 1;
      sumOfDigits -= 10;
    } else {
      carryOver = 0;
    }

    result.add(sumOfDigits);
  }

  if (carryOver)
    result.add(carryOver);

  return result;
};

// Analysis:
// O(n) iterating through entire linkedlist

const Stack = require('../../lib/stack');

exports.sumListsForward = function(linkedList) {
  // ========================================
  // Cut into two linked lists for simplicity
  let aLinkedList = new LinkedList(),
      bLinkedList = new LinkedList(),
      // Assuming head of linked list is ( character
      curr        = linkedList.head.next;

  // Grab first number
  while (curr.data !== ')') {
    aLinkedList.add(curr.data);
    curr = curr.next
  }

  // ) character, + character and ( character
  curr = curr.next.next.next;

  while (curr.data !== ')') {
    bLinkedList.add(curr.data);
    curr = curr.next;
  }

  // ========================================
  // Determine size and add padding if needed
  let sizeOfA = aLinkedList.getLength(),
      sizeOfB = bLinkedList.getLength(),
      diff    = Math.abs(sizeOfA - sizeOfB);

  // If different lengths
  if (diff) {
    let padding = new LinkedList();

    // Pad with zeros
    while (diff) {
      padding.add(0);
      diff--;
    }

    if (sizeOfA > sizeOfB) {
      padding.tail().next = bLinkedList.head;
      bLinkedList = padding;
    } else {
      padding.tail().next = aLinkedList.head;
      aLinkedList = padding;
    }
  }

  // ========================================
  // Create stack (implemented with LinkedList)
  let aStack = new Stack(),
      bStack = new Stack();

  // Fill stacks
  temp = aLinkedList.head;
  while (temp !== null) {
    aStack.push(temp.data);
    temp = temp.next
  }

  temp = bLinkedList.head;
  while (temp !== null) {
    bStack.push(temp.data);
    temp = temp.next
  }

  // ========================================
  // Sum utilizing stack
  let carryOver = 0,
      result    = new LinkedList(),
      sumVal,
      aDigit,
      bDigit;

  while (aStack.peek() && bStack.peek()) {
    aDigit = aStack.pop().data;
    bDigit = bStack.pop().data;

    sumVal = aDigit + bDigit + carryOver;

    if (sumVal > 9) {
      carryOver = 1;
      sumVal -= 10;
    } else {
      carryOver = 0;
    }

    result.add(sumVal);
  }

  if (carryOver)
    result.add(carryOver);

  let reversedResult = new LinkedList();

  result.toArray().reverse().forEach((data) => {
    reversedResult.add(data);
  });

  return reversedResult;
};
