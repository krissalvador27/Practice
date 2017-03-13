const LinkedList = require('./linked-list');
const Node       = require('./node');

module.exports = function Stack() {

  this.linkedList = new LinkedList();
  this.head       = this.linkedList.head;

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

  this.pop = () => {
    if (this.head === null)
      return null;

    let curr = this.head,
        prev;

    while (curr.next != null) {
      prev = curr;
      curr = curr.next;
    }

    if (prev)
      prev.next = null;
    else
      this.head = null;

    return curr;
  }

  this.peek = () => {
    if (this.head === null)
      return null;

    let curr = this.head;

    while (curr.next != null)
      curr = curr.next;

    return curr;
  }

  this.push = (data) => {
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


