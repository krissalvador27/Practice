// Rotate Matrix: Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes, write a method to
// rotate the image by 90 degrees. Can you do this in place?

exports.rotateMatrix = function(arr) {
  let n        = arr.length,
      startIdx = 0,
      endIdx   = n - 1,
      temp1,
      temp2,
      temp3,
      temp4;

  while (startIdx < endIdx) {
    temp1 = [];
    temp2 = [];
    temp3 = [];
    temp4 = [];

    // i traverses arr
    // j will traverse our temp arrs
    let i = 0,
        j = 0;

    // Make 4 arrays
    // Top row
    for (i = startIdx; i < endIdx; i++) {
      temp1.push(arr[startIdx][i]);
    }

    // Right side
    for (i = startIdx; i < endIdx; i++) {
      temp2.push(arr[i][endIdx]);
    }

    // Bottom row
    for (i = endIdx; i > startIdx; i--) {
      temp3.push(arr[endIdx][i]);
    }

    // Left side
    for (i = endIdx; i > startIdx; i--) {
      temp4.push(arr[i][startIdx]);
    }

    // Rearrange temp arrays into
    // arr's new position!

    // Top row -> right side
    for (i = startIdx; i < endIdx; i++) {
      arr[i][endIdx] = temp1[j];
      j++;
    }
    j = 0;

    // Right side -> bottom row
    for (i = endIdx; i > startIdx; i--) {
      arr[endIdx][i] = temp2[j];
      j++;
    }
    j = 0;

    // Bottom row -> left side
    for (i = endIdx; i > startIdx; i--) {
      arr[i][startIdx] = temp3[j];
      j++;
    }
    j = 0;

    // Left side -> top row
    for (i = startIdx; i < endIdx; i++) {
      arr[startIdx][i] = temp4[j];
      j++;
    }
    j = 0;

    n = n - 2;
    endIdx   -= 1;
    startIdx += 1;
  }

  return arr;
};

// Analysis:
// O(n) with storage of only 4 arrays. Better solution is with only one temp holder

exports.rotateMatrixLessStorage = function(arr) {
  let n = arr.length,
      temp;

  // Number of cycles
  for (let i = 0; i < n / 2; i++) {

    for (let j = i; j < n - i - 1; j++) {
      // Store top row
      temp = arr[i][j];

      // Move left side to top row
      arr[i][j] = arr[n - j - 1][i]

      // Move bottom row to left side
      arr[n - j - 1][i] = arr[n - i - 1][n - j - 1];

      // Move right side to bottom row
      arr[n - i - 1][n - j - 1] = arr[j][n - i - 1];

      // Move top row to right side
      arr[j][n - i - 1] = temp;
    }
  }

  return arr;
};