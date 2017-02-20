// String Compression: Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller
// than the original string, your method should return the original string. You can assume the string has only
// uppercase and lowercase letters (a - z)
exports.stringCompression = function(str) {
  let prevLetter    = str[0],
      newStr        = '',
      counter       = 1,
      hasCompressed = false,
      currLetter;

  for (let i = 1; i < str.length; i++) {
    currLetter = str[i];

    if (currLetter !== prevLetter) {
      // Add letter we were counting and its amount
      // to newStr
      newStr += prevLetter + counter;

      // Set new letter and reset counter
      prevLetter = currLetter;
      counter    = 1;
    } else {
      counter += 1;
      hasCompressed = true;
    }
  }

  newStr += prevLetter + counter;

  return hasCompressed ? newStr : str;
};