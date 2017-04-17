// Palindrome: Implement a function to check if a linked list is a palindrome

exports.isPalindrome = function(linkedList) {
  let arr          = linkedList.toArray(),
      isOdd        = arr.length % 2 === 1,
      midway       = Math.floor(arr.length / 2);
      isPalindrome = true;

  // rac e car
  if (isOdd) {
    for (let str = 0, end = arr.length - 1; str < midWay && end > midWay; str++, end--) {
      if (arr[str] !== arr[end])
        isPalindrome = false;
    }
  } else {
    // moo oom
    for (let str = 0, end = arr.length - 1; str < end; str++, end--) {
      if (arr[str] !== arr[end])
        isPalindrome = false;
    }
  }

  return isPalindrome;
};

// Analysis
// O(n)