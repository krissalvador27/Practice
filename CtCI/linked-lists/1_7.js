// Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node.
// Note that the intersection is defined based on reference, not value. That is, if the kth node of the
// first linked list is the exact same node (by reference) as the jth node of the second linked list,
// then they are intersecting.
// example:
// ( 1 ) - ( 2 ) - ( 3 ) \
// ( 4 ) - ( 5 ) --------- ( 6 ) - ( 7 )
// linked list a : 1 -> 2 -> 3 -> 6 -> 7
// linked list b : 4 -> 5 -> 6 -> 7

exports.getIntersection = function(linkedListA, linkedListB) {
  let lengthA    = linkedListA.getLength(),
      lengthB    = linkedListB.getLength(),
      difference = Math.abs(lengthA - lengthB),
      travelerA  = linkedListA.head,
      travelerB  = linkedListB.head;

  // Different lengths, move forward
  if (difference) {

    if (lengthA > lengthB) {
      while (difference && travelerA) {
        travelerA = travelerA.next;
        difference -= 1;
      }
    } else {
      while (difference && travelerB) {
        travelerB = travelerA.next;
        difference -= 1;
      }
    }

  }

  while (travelerA !== travelerB && travelerA && travelerB) {
    travelerA = travelerA.next;
    travelerB = travelerB.next;
  }

  if (travelerA === travelerB)
    return travelerA;
  else
    return null;
};