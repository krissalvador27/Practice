// Delete Middle Node: Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.
// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a - >b- >d - >e- >f
exports.deleteMiddleNode = function(node) {
  let curr          = node,
      loopCondition = true,
      tempVal;

  while (loopCondition) {
    tempVal   = curr.next.data;
    curr.data = tempVal;

    // 2nd to last node check
    if (curr.next && curr.next.next) {
      curr = curr.next;
    } else {
      // All values moved over one step to the left
      // remove pointer to last node (remove from linked list)
      curr.next = null;
      loopCondition = false;
    }
  }
};

// Analysis:
// O(n) .. at worst we're looking at O(n - 1) values and transferring them over
// one step to the left (effectively removing the value at the middle node we're given)
