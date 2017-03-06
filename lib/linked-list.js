module.exports = function LinkedList() {

  class Node {

    constructor(data) {
      this.data = data;
      this.next = null;
    }
  };

  this.head   = null;
  this.length = 0;


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

  this.toArray = () => {
    let arr  = [],
        curr = this.head;

    while (curr != null) {
      arr.push(curr.data);
      curr = curr.next;
    }

    return arr;
  }

  this.toString = () => {
    return this.toArray().join(',');
  }

};



