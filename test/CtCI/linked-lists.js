const functions = require('../../CtCI/linked-lists');
const question1 = functions.question1;
const question2 = functions.question2;

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



});