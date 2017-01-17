// Write a method to replace all spaces in a string with '%20: You may assume
// that the string has sufficient space at the end to hold the additional
// characters, and that you are given the "true" length of the string.
exports.URLify = function(str, trueLength) {
  let url = '';

  // Essentially a str.replace(/ /g, '%20')
  for (let i = 0; i < str.trim().length; i++) {
    if (str[i] === ' ')
      url += '%20';
    else
      url += str[i];
  }

  return url;
}

// Analysis:
// Big(O) is O(n) because we loop through each character
// looking for spaces to replace and build our url'd string

// Mr John Smith - true length = 13
// Mr%20John%20Smith - true length with spaces = 17

exports.URLifyInPlace = function(str, trueLength) {
  let stringArray = str.split(''),
      numSpaces   = 0,
      newLength;

  // count number of spaces
  // from the true length of the string (disregard buffer)
  for (let i = 0; i < trueLength; i++) {
    if (stringArray[i] === ' ')
      numSpaces += 1;
  }

  // calculate new length of array with %20s
  newLength = (trueLength - numSpaces) + (numSpaces * 3);

  // two scan approach where
  // this index traverses the buffered full array
  mainIndex = newLength - 1;

  // iterate through the true length of the array
  // backwards
  for (let j = trueLength - 1; j >= 0; j--) {
    let temp = stringArray[j];

    // if space then mainIndex will go down 3
    if (stringArray[j] === ' ') {
      stringArray[mainIndex]     = '0';
      stringArray[mainIndex - 1] = '2';
      stringArray[mainIndex - 2] = '%';
      mainIndex = mainIndex - 3;
    } else {
    // otherwise use the char at that place
      stringArray[mainIndex] = temp;
      mainIndex--;
    }
  }

  return stringArray.join('');
}

// Analysis:
// Big(O) is O(n + n) or O(n). One traversal counts number of spaces,
// then we have a two index scanned approach when editing the string.