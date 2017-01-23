// Given a string, write a function to check if it is a permutation of a palin-drome.
// A palindrome is a word or phrase that is the same forwards and backwards. A
// permutation is a rearrangement of letters. The palindrome does not need to be
// limited to just dictionary words.
exports.isPalindrome = function(str) {
  str = str.replace(' ', '');

  let wordCount     = {},
      isOdd         = str.length % 2,
      isPalindrome  = true,
      oneAllowedOdd = isOdd;

  // Create word count
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ')
      wordCount[str[i]] = wordCount[str[i]] ? wordCount[str[i]] + 1 : 1;
  }

  // If odd, then allowed one odd character
  if (isOdd) {
    Object.keys(wordCount).forEach((key) => {
      if (wordCount[key] % 2) {
        if (oneAllowedOdd)
          oneAllowedOdd = false;
        else
          isPalindrome = false;
      }
    });
  } else {
    Object.keys(wordCount).forEach((key) => {
      if (wordCount[key] % 2)
        isPalindrome = false;
    });
  }

  return isPalindrome;
};

// Analysis:
// Big(O) is O(n) because we loop through each character
// building a wordCount. Then we check to see if each character
// appears an even amount of times. If odd length, there is allowed to be
// one character that appears an odd amount of times.
