// Assume you have a method isSubstring which checks if one word is a substring of
// another. Given two strings, s1 and s2, write code to check if s2 is a rotation
// of 51 using only one call to isSubstring
// (e.g. "waterbottle" is a rotation of "erbottlewat").

exports.isStringRotation = function(s1, s2) {
  if (s1.length !== s2.length)
    return false;

  // Simulate the isSubstring function
  // arbitrarily given to us
  const isSubstring = function(s1, s2) {
    return s1.includes(s2);
  };

  let startIndex = -1;

  // Loop through s2
  for (let i = 0; i < s2.length; i++) {

    // Look for beginning of the s1 and
    // where it could possibly start in s2
    if (s1[0] === s2[i]) {
      // Loop through the rest of s2
      startIndex = i;

      let x = 1,
          y = i + 1;

      while (s1[x] === s2[y] && s2[y] !== undefined) {
        x += 1;
        y += 1;
      }

      // If undefined check that
      if (s2[y] === undefined) {
        let subString = s2.substring(0, startIndex);

        return isSubstring(s1, subString);
      }
    }
  }

  return false;
};

// Analysis:
// O(n) have to check at least every character, and that it can
// possibly map back to the original unrotated string
