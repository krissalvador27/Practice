// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to
// check if they are one edit (or zero edits) away.
exports.isOneAway = function(strA, strB) {
  // Same string
  if (strA === strB)
    return true;

  let strALength = strA.length,
      strBLength = strB.length,
      lengthDiff = Math.abs(strALength - strBLength),
      isOneAway  = true;

  // Strings must be equal in size or differ by 1 in length
  if (lengthDiff > 1)
    return false;

  let hasOneDifference = true,
      aIndex           = 0,
      bIndex           = 0,
      aIsLonger        = strALength > strBLength;

  // Iterate through both strings and allow for only one difference
  while (aIndex < strALength && bIndex < strBLength) {
    if (strA[aIndex] !== strB[bIndex]) {
      if (hasOneDifference) {
        hasOneDifference = false;

        // Increase index of one of the longer strings
        if (lengthDiff) {
          if (aIsLonger)
            aIndex++;
          else
            bIndex++;
        }
      } else {
        isOneAway = false;
      }
    }

    aIndex++;
    bIndex++;
  }

  return isOneAway;
};

// Analysis:
// Big(O) is O(n) because we loop through looking at each character from the
// two strings only once. We utilize two indexes to loop through each string
// and check - allowing for only one difference max.