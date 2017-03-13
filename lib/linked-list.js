module.exports = function LinkedList() {

  class Node {

    constructor(data) {
      this.data = data;
      this.next = null;
    }

  };

  this.head   = null;
  this.length = 0;

  this.tail = () => {
    let curr = this.head;

    if (curr === null)
      return null;

    while (curr.next !== null)
      curr = curr.next;

    return curr;
  }

  this.add = (data) => {
    let nodeToAdd   = new Node(data),
        nodeToCheck = this.head;

    // if the head is null
    if (!nodeToCheck) {
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }

    // loop until we find the end
    while (nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }

    // once were at the end of the list
    nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }

  this.getNode = (data) => {
    let node = this.head;

    while (node !== null && node.data !== data) {
      node = node.next;
    }

    if (node.data !== data)
      return null;

    return node;
  }

  this.toArray = () => {
    let arr  = [],
        curr = this.head;

    while (curr != null) {
      arr.push(curr.data);
      curr = curr.next;
    }

    return arr;
  }

  this.toString = (delimiter = ',') => {
    return this.toArray().join(delimiter);
  }

};


