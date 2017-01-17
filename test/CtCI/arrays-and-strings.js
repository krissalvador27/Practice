const functions = require('../../CtCI/arrays-and-strings');
const question1 = functions.question1;
const question2 = functions.question2;
const question3 = functions.question3;

const expect    = require('chai').expect;

describe('Now testing arrays-and-strings..', function() {

  // Implement an algorithm to determine if a string has all unique characters.
  // What if you cannot use additional data structures?
  describe('Question 1: Is Unique?', function() {

    it('isUnique should succeed for Kobe, Shaq, Lebron.', function() {
      expect(question1.isUnique('Kobe')).to.equal(true);
      expect(question1.isUnique('Shaq')).to.equal(true);
      expect(question1.isUnique('Lebron')).to.equal(true);
    });

    it('isUnique should fail for Allen, Steve, Hakeem', function() {
      expect(question1.isUnique('Allen')).to.equal(false);
      expect(question1.isUnique('Steve')).to.equal(false);
      expect(question1.isUnique('Hakeem')).to.equal(false);
    });

    it('isUniqueNoDataStructures should succeed for Kobe, Shaq, Lebron', function() {
      expect(question1.isUniqueNoDataStructures('Kobe')).to.equal(true);
      expect(question1.isUniqueNoDataStructures('Shaq')).to.equal(true);
      expect(question1.isUniqueNoDataStructures('Lebron')).to.equal(true);
    });

    it('isUniqueNoDataStructures should fail for Allen, Steve, Hakeem', function() {
      expect(question1.isUniqueNoDataStructures('Allen')).to.equal(false);
      expect(question1.isUniqueNoDataStructures('Steve')).to.equal(false);
      expect(question1.isUniqueNoDataStructures('Hakeem')).to.equal(false);
    });

  });

  // Implement an algorithm to determine if a string has all unique characters.
  // What if you cannot use additional data structures?
  describe('Question 2: Check Permutation', function() {

    it('checkPermutation should succeed for racecar/carrace, mom/mmo, teriyaki/riyakite', function() {
      expect(question2.checkPermutation('racecar', 'carrace')).to.equal(true);
      expect(question2.checkPermutation('mom', 'mmo')).to.equal(true);
      expect(question2.checkPermutation('teriyaki', 'riyakite')).to.equal(true);
    });

    it('checkPermutation should fail for racecar/notracecar, mom/dad, teriyaki/chicken', function() {
      expect(question2.checkPermutation('racecar', 'notracecar')).to.equal(false);
      expect(question2.checkPermutation('mom', 'dad')).to.equal(false);
      expect(question2.checkPermutation('teriyaki', 'teriyakis')).to.equal(false);
    });

    it('checkPermutationFunctionally should succeed for racecar/carrace, mom/mmo, teriyaki/riyakite', function() {
      expect(question2.checkPermutationFunctionally('racecar', 'carrace')).to.equal(true);
      expect(question2.checkPermutationFunctionally('mom', 'mmo')).to.equal(true);
      expect(question2.checkPermutationFunctionally('teriyaki', 'riyakite')).to.equal(true);
    });

    it('checkPermutationFunctionally should fail for racecar/notracecar, mom/dad, teriyaki/chicken', function() {
      expect(question2.checkPermutationFunctionally('racecar', 'notracecar')).to.equal(false);
      expect(question2.checkPermutationFunctionally('mom', 'dad')).to.equal(false);
      expect(question2.checkPermutationFunctionally('teriyaki', 'teriyakis')).to.equal(false);
    });
  });

  // Write a method to replace all spaces in a string with '%20: You may assume
  // that the string has sufficient space at the end to hold the additional
  // characters, and that you are given the "true" length of the string.
  describe('Question 3: URLifyInPlace', function() {

    it('URLifyInPlace should succeed for Mr John Smith', function() {
      expect(question3.URLifyInPlace('Mr John Smith    ', 13)).to.equal('Mr%20John%20Smith');
    });

    it('URLifyInPlace should succeed for www.facebook.com/ this is my profile', function() {
      expect(question3.URLifyInPlace('www.facebook.com/ this is my profile        ', 36)).to.equal('www.facebook.com/%20this%20is%20my%20profile');
    });

    it('URLifyInPlace should succeed for empty string', function() {
      expect(question3.URLifyInPlace('', 0)).to.equal('');
    });

  });

});