// Remove Dups: Write code to remove duplicates from an unsorted linked list.
exports.removeDups = function(linkedList) {
  let storedData = {},
      curr       = linkedList.head,
      prev;


  while (curr != null) {
    // If data already exists
    // then prev's next bypasses this node
    if (storedData[curr.data]) {
      prev.next = curr.next;
    } else {
      storedData[curr.data] = true;
      prev                  = curr;
    }

    curr = curr.next;
  }

  return linkedList;
}

// Analysis: O(n)
// Must traverse entire linked list, with storage equal to O(n)