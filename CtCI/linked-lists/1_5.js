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
  while (bDigit.data !== '(') {
    bDigit = bDigit.next;
  }

  // Currently at (
  // Go next for second number's first digit
  bDigit = bDigit.next;

  let sumOfDigits;

  while (bDigit.data !== ')' || aDigit.data !== ')') {
    if (aDigit.data === ')') {
      sumOfDigits = 0 + bDigit.data + carryOver;
      bDigit = bDigit.next;
    } else if (bDigit.data === ')') {
      sumOfDigits = 0 + aDigit.data + carryOver;
      aDigit = aDigit.next;
    } else {
      sumOfDigits = bDigit.data + aDigit.data + carryOver;
      bDigit = bDigit.next;
      aDigit = aDigit.next;
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
//