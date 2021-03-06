const Node = require('./node');

module.exports = function LinkedList() {

  this.head = null;

  this.getLength = () => {
    let curr   = this.head,
        length = 0;

    if (curr === null)
      return length;

    while (curr.next !== null) {
      curr = curr.next;
      length++;
    }

    return length;
  }

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
      return nodeToAdd;
    }

    // loop until we find the end
    while (nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }

    // once were at the end of the list
    nodeToCheck.next = nodeToAdd;
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


