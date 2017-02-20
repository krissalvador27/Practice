const functions = require('../../CtCI/arrays-and-strings');
const question1 = functions.question1;
const question2 = functions.question2;
const question3 = functions.question3;
const question4 = functions.question4;
const question5 = functions.question5;
const question6 = functions.question6;
const question7 = functions.question7;

const expect    = require('chai').expect;

describe('Now testing arrays-and-strings..', function() {

  // Implement an algorithm to determine if a string has all unique characters.
  // What if you cannot use additional data structures?
  describe('Question 1: Is Unique? ...', function() {

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
  describe('Question 2: Check Permutation ...', function() {

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
  describe('Question 3: URLifyInPlace ...', function() {

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

  // Given a string, write a function to check if it is a permutation of a palin-drome.
  // A palindrome is a word or phrase that is the same forwards and backwards. A
  // permutation is a rearrangement of letters. The palindrome does not need to be
  // limited to just dictionary words.
  describe('Question 4: Palindrome Permutation ...', function() {

    it('isPalindrome should return true for racecar', function() {
      expect(question4.isPalindrome('racecar')).to.equal(true);
    });

    it('isPalindrome should return true for tact coa', function() {
      expect(question4.isPalindrome('tact coa')).to.equal(true);
    });

    it('isPalindrome should return false for bbbaaac', function() {
      expect(question4.isPalindrome('bbbaaac')).to.equal(false);
    });

    it('isPalindrome should return false for momma', function() {
      expect(question4.isPalindrome('momma')).to.equal(false);
    });
  });

  // There are three types of edits that can be performed on strings: insert a character,
  // remove a character, or replace a character. Given two strings, write a function to
  // check if they are one edit (or zero edits) away.
  describe('Question 5: One Away ...', function() {

    // Case where they're of same string
    it('isOneAway should return true for boop, boop', function() {
      expect(question5.isOneAway('boop', 'boop')).to.equal(true);
    });

    // Case where they're of same length, but one letter away from each other
    it('isOneAway should return true for pale, bale', function() {
      expect(question5.isOneAway('pale', 'bale')).to.equal(true);
    });

    // // Case where they're of same length, but one letter away from each other
    it('isOneAway should return true for bale, bake', function() {
      expect(question5.isOneAway('bale', 'bake')).to.equal(true);
    });

    // // Case where they're different lengths, and we need to add one letter to one of the strings
    it('isOneAway should return true for chickens, chicken', function() {
      expect(question5.isOneAway('chickens', 'chicken')).to.equal(true);
    });

    // Case where they're different lengths, and we need to add one letter to one of the strings
    it('isOneAway should return true for pal, pale', function() {
      expect(question5.isOneAway('pal', 'pale')).to.equal(true);
    });

    it('isOneAway should return false for kobe, beef', function() {
      expect(question5.isOneAway('kobe', 'beef')).to.equal(false);
    });

    it('isOneAway should return false for beefin, beef', function() {
      expect(question5.isOneAway('beefin', 'beef')).to.equal(false);
    });
  });

  // Implement a method to perform basic string compression using the counts of repeated characters.
  // For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller
  // than the original string, your method should return the original string. You can assume the string has only
  // uppercase and lowercase letters (a - z)
  describe('Question 6: String Compression ...', function() {

    // Basic test case
    it('stringCompression should return a2b1c5a3 for aabcccccaaa', function() {
      expect(question6.stringCompression('aabcccccaaa')).to.equal('a2b1c5a3');
    });

    // Single letter case
    it('stringCompression should return a4 for aaaa', function() {
      expect(question6.stringCompression('aaaa')).to.equal('a4');
    });

    // No compression case
    it('stringCompression should return abc for abc', function() {
      expect(question6.stringCompression('abc')).to.equal('abc');
    });
  });

  // Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
  // write a method to rotate the image by 90 degrees. Can you do this in place?
  describe('Question 7: Rotate Matrix ...', function() {

    // Basic test case 1x1
    // [0]
    it('rotateMatrix should succeed 1x1', function() {
      expect(question7.rotateMatrix([[0]])).to.deep.equal([[0]]);
      expect(question7.rotateMatrixLessStorage([[0]])).to.deep.equal([[0]]);
    });

    // Basic test case 2x2
    // [1, 2]
    // [3, 4]
    it('rotateMatrix should succeed 2x2', function() {
      let a1 = [1, 2],
          b1 = [3, 4],
          // correct vers
          a2 = [3, 1],
          b2 = [4, 2];

      expect(question7.rotateMatrix([a1, b1])).to.deep.equal([a2, b2]);

      // Rotate 3 more times to form original array
      question7.rotateMatrixLessStorage([a1, b1]);
      question7.rotateMatrixLessStorage([a1, b1]);

      expect(question7.rotateMatrixLessStorage([a1, b1])).to.deep.equal([a1, b1]);
    });

    // Basic test case 3x3
    // [1, 2, 3]
    // [3, 4, 5]
    // [6, 7, 8]
    it('rotateMatrix should succeed 3x3', function() {
      let a1 = [1, 2, 3],
          b1 = [3, 4, 5],
          c1 = [6, 7, 8],
          // correct vers
          a2 = [6, 3, 1],
          b2 = [7, 4, 2],
          c2 = [8, 5, 3];

      expect(question7.rotateMatrix([a1, b1, c1])).to.deep.equal([a2, b2, c2]);

      // Rotate 3 more times to form original array
      question7.rotateMatrixLessStorage([a1, b1, c1]);
      question7.rotateMatrixLessStorage([a1, b1, c1]);

      expect(question7.rotateMatrixLessStorage([a1, b1, c1])).to.deep.equal([a1, b1, c1]);
    });

    // Basic test case 4x4
    // [1,   2,  3,  4]
    // [5,   6,  7,  8]
    // [9,  10, 11, 12]
    // [13, 14, 15, 16]
    it('rotateMatrix should succeed 4x4', function() {
      let a1 = [1,   2,  3,  4],
          b1 = [5,   6,  7,  8],
          c1 = [9,  10, 11, 12],
          d1 = [13, 14, 15, 16],
          // correct vers
          a2 = [13, 9,  5, 1],
          b2 = [14, 10, 6, 2],
          c2 = [15, 11, 7, 3],
          d2 = [16, 12, 8, 4];

      expect(question7.rotateMatrixLessStorage([a1, b1, c1, d1])).to.deep.equal([a2, b2, c2, d2]);

      // Rotate 3 more times to form original array
      question7.rotateMatrixLessStorage([a1, b1, c1, d1]);
      question7.rotateMatrixLessStorage([a1, b1, c1, d1]);

      expect(question7.rotateMatrixLessStorage([a1, b1, c1, d1])).to.deep.equal([a1, b1, c1, d1]);
    });

    // Basic test case 4x4
    // [1,   2,  3,  4,  5],
    // [6,   7,  8,  9, 10],
    // [11, 12, 13, 14, 15],
    // [16, 17, 18, 19, 20],
    // [21, 22, 23, 24, 25]
    it('rotateMatrix should succeed 5x5', function() {
      let a1 = [1,   2,  3,  4,  5],
          b1 = [6,   7,  8,  9, 10],
          c1 = [11, 12, 13, 14, 15],
          d1 = [16, 17, 18, 19, 20],
          e1 = [21, 22, 23, 24, 25],
          // correct vers
          a2 = [21, 16, 11, 6, 1],
          b2 = [22, 17, 12, 7, 2],
          c2 = [23, 18, 13, 8, 3],
          d2 = [24, 19, 14, 9, 4],
          e2 = [25, 20, 15, 10, 5];

      expect(question7.rotateMatrix([a1, b1, c1, d1, e1])).to.deep.equal([a2, b2, c2, d2, e2]);

      // Rotate 3 more times to form original array
      question7.rotateMatrix([a1, b1, c1, d1, e1]);
      question7.rotateMatrix([a1, b1, c1, d1, e1]);

      expect(question7.rotateMatrixLessStorage([a1, b1, c1, d1, e1])).to.deep.equal([a1, b1, c1, d1, e1]);
    });
  });

});