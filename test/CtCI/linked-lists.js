const functions = require('../../CtCI/linked-lists');
const question1 = functions.question1;
const question2 = functions.question2;
const question3 = functions.question3;
const question4 = functions.question4;
const question5 = functions.question5;
const question6 = functions.question6;
const question7 = functions.question7;
const question8 = functions.question8;

const expect     = require('chai').expect;
const LinkedList = require('../../lib/linked-list');

describe('Now testing linked-lists ...', function() {

  // Remove Dups: Write code to remove duplicates from an unsorted linked list.
  describe('Question 1: Remove Dups ...', function() {

    it('removeDups should succeed with duplicates', function() {
      let linkedList = new LinkedList();

      [1, 2, 3, 3, 4, 4].forEach((num) => {
        linkedList.add(num);
      });

      expect(question1.removeDups(linkedList).toString()).to.equal('1,2,3,4');

      linkedList = new LinkedList();

      [1, 1, 1, 1, 1].forEach((num) => {
        linkedList.add(num);
      });

      expect(question1.removeDups(linkedList).toString()).to.equal('1');
    });

    it('removeDups should succeed without duplicates', function() {
      let linkedList = new LinkedList();

      [1, 2, 3, 4].forEach((num) => {
        linkedList.add(num);
      });

      expect(question1.removeDups(linkedList).toString()).to.equal('1,2,3,4');

      linkedList = new LinkedList();

      [1].forEach((num) => {
        linkedList.add(num);
      });

      expect(question1.removeDups(linkedList).toString()).to.equal('1');
    });
  });

  // Return Kth to Last: Implement an algorithm to find the kth to last
  // element of a singly linked list
  describe('Question 2: Kth to last element ...', function() {

    it('kth to last element should succeed for normal k < linkedList values', function() {
      let linkedList = new LinkedList();

      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((num) => {
        linkedList.add(num);
      });

      expect(question2.returnKthToLast(linkedList, 2).data).to.equal(9);
      expect(question2.returnKthToLast(linkedList, 5).data).to.equal(6);
      expect(question2.returnKthToLast(linkedList, 0).data).to.equal(1);
    });

    it('kth to last element should succeed for abnormal k > linkedList values', function() {
      let linkedList = new LinkedList();

      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((num) => {
        linkedList.add(num);
      });

      expect(question2.returnKthToLast(linkedList, -1)).to.equal(null);
      expect(question2.returnKthToLast(linkedList, 11)).to.equal(null);
    });

  });

  // Delete Middle Node: Implement an algorithm to delete a node in the middle
  // (i.e., any node but the first and last node, not necessarily the exact middle)
  // of a singly linked list, given only access to that node.
  describe('Question 3: Delete middle node ...', function() {

    it('deleteMiddleNode should succeed for linked list a->b->c with param b', function() {
      let linkedList = new LinkedList();

      ['a', 'b', 'c'].forEach((char) => {
        linkedList.add(char);
      });

      question3.deleteMiddleNode(linkedList.getNode('b'))

      expect(linkedList.toString(' -> ')).to.equal('a -> c');
    });

    it('deleteMiddleNode should succeed for linked list a->b->c->d->e->f with param c', function() {
      let linkedList = new LinkedList();

      ['a', 'b', 'c', 'd', 'e', 'f'].forEach((char) => {
        linkedList.add(char);
      });

      question3.deleteMiddleNode(linkedList.getNode('c'))

      expect(linkedList.toString(' -> ')).to.equal('a -> b -> d -> e -> f');
    });

  });

  // Partition: Write code to partition a linked list around a value x, such that
  // all nodes less than x come before all nodes greater than or equal to x. lf x
  // is contained within the list, the values of x only need to be after the elements
  // less than x (see below).The partition element x can appear anywhere in the
  // "right partition"; it does not need to appear between the left and right partitions.
  describe('Question 4: Partition ...', function() {

    it('partition should succeed for linked list 3->5->7->5->10->1->2 with various partitions', function() {
      let linkedList = new LinkedList();

      [3, 5, 7, 5, 10, 1, 2].forEach((num) => {
        linkedList.add(num);
      });

      expect(question4.partition(linkedList, 5).toString(' -> ')).to.equal('3 -> 1 -> 2 -> 5 -> 7 -> 5 -> 10');
      expect(question4.partition(linkedList, 1).toString(' -> ')).to.equal('3 -> 5 -> 7 -> 5 -> 10 -> 1 -> 2');
      expect(question4.partition(linkedList, 2).toString(' -> ')).to.equal('1 -> 3 -> 5 -> 7 -> 5 -> 10 -> 2');
      expect(question4.partition(linkedList, 10).toString(' -> ')).to.equal('3 -> 5 -> 7 -> 5 -> 1 -> 2 -> 10');
    });

  });

  // Sum Lists: You have two numbers represented by a linked list, where each
  // node contains a single digit. The digits are stored in reverse order,
  // such that the 1's digit is at the head of the list. Write a function
  // that adds the two numbers and returns the sum as a linked list.
  describe('Question 5: Sum Lists ...', function() {

    // 617 + 295 = 912
    it('sumLists should succeed for (7 -> 1 -> 6) + (5 -> 9 -> 2) = 2 -> 1 -> 9', function() {
      let linkedList = new LinkedList();

      ['(', 7, 1, 6, ')', '+', '(', 5, 9, 2, ')'].forEach((item) => {
        linkedList.add(item);
      });

      expect(question5.sumLists(linkedList).toArray().reverse().join('')).to.equal('912');
      expect(question5.sumListsForward(linkedList).toArray().join('')).to.equal('1308');
    });

    // 1617 + 295 = 1912
    it('sumLists should succeed for (7 -> 1 -> 6 -> 1) + (5 -> 9 -> 2) = 2 -> 1 -> 9 -> 1', function() {
      let linkedList = new LinkedList();

      ['(', 7, 1, 6, 1, ')', '+', '(', 5, 9, 2, ')'].forEach((item) => {
        linkedList.add(item);
      });

      expect(question5.sumLists(linkedList).toArray().reverse().join('')).to.equal('1912');
      expect(question5.sumListsForward(linkedList).toArray().join('')).to.equal('7753');
    });

    // 617 + 1295 = 1912
    it('sumLists should succeed for (7 -> 1 -> 6 -> 1) + (5 -> 9 -> 2) = 2 -> 1 -> 9 -> 1', function() {
      let linkedList = new LinkedList();

      ['(', 7, 1, 6, ')', '+', '(', 5, 9, 2, 1, ')'].forEach((item) => {
        linkedList.add(item);
      });

      expect(question5.sumLists(linkedList).toArray().reverse().join('')).to.equal('1912');
      expect(question5.sumListsForward(linkedList).toArray().join('')).to.equal('6637');
    });

    // 1 + 1 = 2
    it('sumLists should succeed for (1) + (1) = 2', function() {
      let linkedList = new LinkedList();

      ['(', 1, ')', '+', '(', 1, ')'].forEach((item) => {
        linkedList.add(item);
      });

      expect(question5.sumLists(linkedList).toArray().reverse().join('')).to.equal('2');
      expect(question5.sumListsForward(linkedList).toArray().join('')).to.equal('2');
    });

    // 9 + 9 = 18
    it('sumLists should succeed for (9) + (9) = 8 -> 1', function() {
      let linkedList = new LinkedList();

      ['(', 9, ')', '+', '(', 9, ')'].forEach((item) => {
        linkedList.add(item);
      });

      expect(question5.sumLists(linkedList).toArray().reverse().join('')).to.equal('18');
      expect(question5.sumListsForward(linkedList).toArray().join('')).to.equal('18');
    });
  });

  // Palindrome: Implement a function to check if a linked list is a palindrome
  describe('Question 6: Palindrome ...', function() {

    it('isPalindrome should return false for linked list aabbcc', function() {
      let linkedList = new LinkedList();

      ['a', 'a', 'b', 'b', 'c', 'c'].forEach((letter) => {
        linkedList.add(letter);
      });

      expect(question6.isPalindrome(linkedList)).to.equal(false);
    });

    it('isPalindrome should return true for linked list aabbaa', function() {
      let linkedList = new LinkedList();

      ['a', 'a', 'b', 'b', 'a', 'a'].forEach((letter) => {
        linkedList.add(letter);
      });

      expect(question6.isPalindrome(linkedList)).to.equal(true);
    });

  });

  // Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node.
  // Note that the intersection is defined based on reference, not value. That is, if the kth node of the
  // first linked list is the exact same node (by reference) as the jth node of the second linked list,
  // then they are intersecting.
  // example:
  // ( 1 ) - ( 2 ) - ( 3 ) \
  // ( 4 ) - ( 5 ) --------- ( 6 ) - ( 7 )
  // linked list a : 1 -> 2 -> 3 -> 6 -> 7
  // linked list b : 4 -> 5 -> 6 -> 7
  describe('Question 7: Intersection ...', function() {

    it('getIntersection should return correct node for same length linkedlist a and b', function() {
      let linkedList  = new LinkedList(),
          linkedListA = new LinkedList(),
          linkedListB = new LinkedList();

      [8, 9, 10].forEach((num) => {
        linkedList.add(num);
      });

      [1, 2, 3].forEach((num) => {
        linkedListA.add(num)
      });

      [4, 5, 6].forEach((num) => {
        linkedListB.add(num)
      });

      linkedListA.tail().next = linkedList.head;
      linkedListB.tail().next = linkedList.head;

      expect(question7.getIntersection(linkedListA, linkedListB)).to.equal(linkedList.getNode(8));
    });

    it('getIntersection should return correct node for different length linkedlist a and b', function() {
      let linkedList  = new LinkedList(),
          linkedListA = new LinkedList(),
          linkedListB = new LinkedList();

      [9, 10].forEach((num) => {
        linkedList.add(num);
      });

      [1, 2, 3, 4, 5].forEach((num) => {
        linkedListA.add(num)
      });

      [4, 5, 6].forEach((num) => {
        linkedListB.add(num)
      });

      linkedListA.tail().next = linkedList.head;
      linkedListB.tail().next = linkedList.head;

      expect(question7.getIntersection(linkedListA, linkedListB)).to.equal(linkedList.getNode(9));
    });

    it('getIntersection should return null for non intersection linkedlists', function() {
      let linkedListA = new LinkedList(),
          linkedListB = new LinkedList();

      [1, 2, 3, 4, 5].forEach((num) => {
        linkedListA.add(num)
      });

      [4, 5, 6].forEach((num) => {
        linkedListB.add(num)
      });

      expect(question7.getIntersection(linkedListA, linkedListB)).to.equal(null);
    });

  });

  // Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node.
  // Note that the intersection is defined based on reference, not value. That is, if the kth node of the
  // first linked list is the exact same node (by reference) as the jth node of the second linked list,
  // then they are intersecting.
  // example:
  // ( 1 ) - ( 2 ) - ( 3 ) \
  // ( 4 ) - ( 5 ) --------- ( 6 ) - ( 7 )
  // linked list a : 1 -> 2 -> 3 -> 6 -> 7
  // linked list b : 4 -> 5 -> 6 -> 7
  describe('Question 8: Loop Detection ...', function() {

    it('loopDetector should return correct node for circular linked list', function() {
      let linkedList  = new LinkedList();

      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((num) => {
        linkedList.add(num);
      });

      linkedList.tail().next = linkedList.getNode(4);

      expect(question8.loopDetector(linkedList)).to.equal(linkedList.getNode(4));
    });

    it('loopDetector should return null for non circular linked list', function() {
      let linkedList  = new LinkedList();

      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((num) => {
        linkedList.add(num);
      });

      expect(question8.loopDetector(linkedList)).to.equal(null);
    });

    it('loopDetector should return null for circular linked list where tail.next = head', function() {
      let linkedList  = new LinkedList();

      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((num) => {
        linkedList.add(num);
      });

      linkedList.tail().next = linkedList.head;

      expect(question8.loopDetector(linkedList)).to.equal(linkedList.getNode(1));
    });
  });

});