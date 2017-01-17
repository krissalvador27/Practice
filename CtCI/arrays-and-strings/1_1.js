// Implement an algorithm to determine if a string has all unique characters.
exports.isUnique = function(str) {
  let dict   = {},
      unique = true;

  for (let i = 0; i < str.length; i++) {
    if (dict[str[i]])
      unique = false;
    else
      dict[str[i]] = true;
  }

  return unique;
};

// Analysis:
// Big(O) is O(n) where we must traverse the string and all of its characters
// at least once to determine if that character has been mapped as a key in the dict structure

// What if you cannot use additional data structures?

exports.isUniqueNoDataStructures = function(str) {
  let unique = true;

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];

    if (unique) {
      // Loop through the rest of the string
      // checking if currChar is found
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === currChar)
          unique = false;
      }
    }
  }

  return unique;
};

// Analysis:
// Big(O) is now O(n^2) where for each character we must look back at the string
// traversing every character after it to see if it is repeated. There's short circuiting
// so that if it happens early on we can opt out of checking.