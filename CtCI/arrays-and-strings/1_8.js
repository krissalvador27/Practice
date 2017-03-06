// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to O.

exports.zeroMatrix = function(arr) {
  if (arr[0] === undefined)
    return;

  let colLength = arr.length,
      rowLength = arr[0].length,
      badCols   = {},
      badRows   = {},
      isABadRow;

  // Loop through each arr and find index
  // of the 0s taking note of those indices
  // in the badRows hash
  // If a 0 is found in that array, note that
  // it's also a bad column and everything in that
  // array effectively becomes a 0
  for (let i = 0; i < colLength; i++) {
    isABadRow = false;

    for (let j = 0; j < rowLength; j++) {
      // Because 0 is falsey value
      if (!arr[i][j]) {
        badCols[j] = true;
        isABadRow  = true;
      }
    }

    if (isABadRow)
      badRows[i] = true;
  }

  // Iterate through arr changing to 0s
  for (let i = 0; i < colLength; i++) {
    for (let j = 0; i < rowLength; j++) {
      // If bad row or bad column
      if (badRow[i] || badCol[j])
        arr[i][j] = 0;
    }
  }

  return arr;
};

// Analysis:
// O(n) .. we iterate twice through the array, utilizing a hash to store
// what indices are bad. Access to this storage is O(1) .. although space
// potentially can be O(n). :(

exports.betterZeroMatrix = function(arr) {
  if (arr[0] === undefined)
    return;

  let colLength = arr.length,
      rowLength = arr[0].length,
      badRow    = false,
      badCol    = false;

  // Check 1st row
  for (let i = 0; i < rowLength; i++) {
    if (!arr[0][i])
      badRow = true;

  }

  // Check 1st col
  for (let j = 0; j < colLength; j++) {
    if (!arr[j][0])
      badCol = true;
  }

  let isABadRow = false;

  // Use arr[0] and a[j][0] to store if 0 row/col
  // Iterate through M - 1 & N - 1 array
  for (let j = 1; j < colLength; j++) {
    isABadRow = false;

    for (let i = 1; i < rowLength; i++) {
      if (!arr[j][i]) {
        arr[0][i] = 0;
        isABadRow = true;
      }
    }

    if (isABadRow)
      arr[j][0] = 0;
  }

  // Iterate through M - 1 & N - 1 array again
  // using first row and first col
  for (let j = 1; j < colLength; j++) {

    for (let i = 1; i < rowLength; i++) {
      if (!arr[j][0]) // Bad row
        arr[j][i] = 0;
      else if (!arr[0][i]) // Bad col
        arr[j][i] = 0;
    }

  }

  if (badRow) {
    for (let i = 0; i < rowLength; i++) {
      arr[0][i] = 0;
    }
  }

  if (badCol) {
    for (let j = 0; j < colLength; j++) {
      arr[j][0] = 0;
    }
  }

  return arr;
};

// Analysis: O(n)
// Storage is O(1)!