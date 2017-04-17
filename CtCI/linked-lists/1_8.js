// Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C
// Output: C

// extra source for understanding this algorithm: http://umairsaeed.com/blog/2011/06/23/finding-the-start-of-a-loop-in-a-circular-linked-list/
exports.loopDetector = function(linkedList) {
  let startNode = linkedList.head ? linkedList.head.next : null,
      fastNode  = linkedList.head && linkedList.head.next ? linkedList.head.next.next : null;

  while (startNode !== fastNode && fastNode) {
    startNode = startNode.next;
    fastNode  = fastNode.next && fastNode.next.next ? fastNode.next.next : null;
  }

  // No loop since fast node hit a null
  if (fastNode === null)
    return null;

  // Otherwise startNode === fastNode
  // at some point x nodes from the loop

  // move startNode back to head
  // increment both fastNode and startNode 1 node at a time
  // and should meet at the start of the loop
  startNode = linkedList.head;

  while (startNode !== fastNode) {
    startNode = startNode.next;
    fastNode  = fastNode.next;
  }

  return startNode;
};
