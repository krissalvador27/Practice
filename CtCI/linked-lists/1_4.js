// Partition: Write code to partition a linked list around a value x, such that
// all nodes less than x come before all nodes greater than or equal to x. lf x
// is contained within the list, the values of x only need to be after the elements
// less than x (see below).The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.
// EXAMPLE
// Input:  3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5)
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

const LinkedList = require('../../lib/linked-list');

exports.partition = function(linkedList, partition) {
  const lessThan         = new LinkedList(),
        greaterOrEqualTo = new LinkedList();

  let curr = linkedList.head;

  // Iterate through linked list
  // find those less than and greater than
  while (curr != null) {
    if (curr.data < partition)
      lessThan.add(curr.data);
    else
      greaterOrEqualTo.add(curr.data);

    curr = curr.next;
  }

  // merge the linked lists
  let lastNodeInLessThan = lessThan.tail(),
      result;

  if (lastNodeInLessThan) {
    lastNodeInLessThan.next = greaterOrEqualTo.head;
    result                  = lessThan;
  } else {
    result = greaterOrEqualTo;
  }

  return result;
};

// Analysis:
// Storage and run time are both O(n). An optimization (storage wise) is to use
// the original linkedList to store the less ones, moving those greater than
// x to another linkedlist