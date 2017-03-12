// Return Kth to Last: Implement an algorithm to find the kth to last
// element of a singly linked list
exports.returnKthToLast = function(linkedList, k) {
  if (k < 0)
    return null;
  else if (k === 0)
    return linkedList.head;

  let tempNode = linkedList.head,
      result   = linkedList.head,
      counter  = 0;

  // Set tempNode k spots ahead of result
  while (tempNode.next !== null && counter < k) {
    tempNode = tempNode.next;
    counter++;
  }

  // If counter < k then k > linkedList
  if (counter < k)
    return null;

  while (tempNode !== null) {
    tempNode = tempNode.next;
    result   = result.next;
  }

  return result;
};

// Analysis:
// O(n)