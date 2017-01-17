// Given two strings, write a method to decide if one is a permutation of the other
exports.checkPermutation = function(strA, strB) {
  if (strA.length !== strB.length)
    return false;

  let isPermutation = true,
      dict          = {};

  // Create dict for strA
  for (let i = 0; i < strA.length; i++) {
    if (dict[strA[i]])
      dict[strA[i]] += 1;
    else
      dict[strA[i]] = 1;
  }

  // Loop through strB and compare counts
  for (let j = 0; j < strB.length; j++) {
    let currChar = strB[j];

    // Character must be within strA
    // otherwise currChar is in B and not A
    // and thus B cannot be a permutation of A
    if (dict[currChar])
      dict[currChar] -= 1;
    else
      isPermutation = false;
  }

  // If isPermutation has not been flagged as false
  if (isPermutation) {
    Object.keys(dict).forEach((key) => {
      // All values should be 0 (falsey)
      // after looping through strB and subtracting
      if (dict[key])
        isPermutation = false;
    });
  }

  return isPermutation;
}

// Check permutation with use of functional logic
// because less code is fun
exports.checkPermutationFunctionally = function(strA, strB) {
  if (strA.length !== strB.length)
    return false;

  const letterCount = (fullCounts, letter) => {
    fullCounts[letter] = fullCounts[letter] ? fullCounts[letter] + 1 : 1;
    return fullCounts;
  };

  let letterCountA = strA.split('').reduce(letterCount, {}),
      letterCountB = strB.split('').reduce(letterCount, {});

  return Object.keys(letterCountA).every((key) => {
    return letterCountA[key] === letterCountB[key];
  });
};

// Analysis:
// Big(O) is O(n+n) or O(n). We look at each character in strA at least once to create
// the dict structure that maps character to amount of times that character should be used
// in both strA and B. Then we look at each character in strB to determine if that
// character is extraneous or not utilized the same number of times.
