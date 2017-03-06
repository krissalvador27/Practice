const functions = require('../../CtCI/linked-lists');
const question1 = functions.question1;

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

});