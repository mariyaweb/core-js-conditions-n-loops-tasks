/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number > 0 || number === 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = 0;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) {
    return true;
  }
  if (queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a && b && c) {
    if (a + b > c && a === b) {
      return true;
    }
    if (a + c > b && a === c) {
      return true;
    }
    if (b + c > a && b === c) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';
  const romanArr = [
    'X',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
  ];
  const tens = (num - (num % 10)) / 10;
  const untils = num % 10;
  if (num <= 10) {
    return romanArr[untils];
  }
  if (num > 10) {
    for (let i = 0; i < tens; i += 1) {
      res += romanArr[10];
    }
    res += romanArr[untils];
  }
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  const numArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'minus',
    'point',
  ];
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      default:
        if (numberStr[i] === '-') {
          res += numArr[10];
        } else if (numberStr[i] === '.' || numberStr[i] === ',') {
          res += numArr[11];
        } else {
          res += numArr[numberStr[i]];
        }
        if (i !== numberStr.length - 1) {
          res += ' ';
        }
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const iteration = Math.trunc(str.length / 2);
  for (let i = 0; i <= iteration; i += 1) {
    const k = str.length - 1 - i;
    if (str[i] !== str[k]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = String(num);
  for (let i = 0; i < numStr.length; i += 1) {
    if (numStr[i] === String(digit)) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) {
    return -1;
  }

  for (let i = 0; i < arr.length; i += 1) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let iL = 0; iL < i; iL += 1) {
      sumRight += arr[iL];
    }

    for (let iR = i + 1; iR < arr.length; iR += 1) {
      sumLeft += arr[iR];
    }

    if (sumLeft === sumRight) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  let count = 1;
  let row = 0;
  let col = 0;
  let maxRow = size - 1;
  let maxCol = size - 1;

  for (let m = 0; m < size; m += 1) {
    matrix[m] = new Array(size);
  }

  while (count <= size * size) {
    for (let r = col; r <= maxCol; r += 1) {
      matrix[row][r] = count;
      count += 1;
    }
    row += 1;

    for (let d = row; d <= maxRow; d += 1) {
      matrix[d][maxCol] = count;
      count += 1;
    }
    maxCol -= 1;

    for (let l = maxCol; l >= col; l -= 1) {
      matrix[maxRow][l] = count;
      count += 1;
    }
    maxRow -= 1;

    for (let u = maxRow; u >= row; u -= 1) {
      matrix[u][col] = count;
      count += 1;
    }
    col += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const resMatrix = matrix;
  const copyMatrix = [];

  for (let i = 0; i < matrix.length; i += 1) {
    copyMatrix[i] = [];
    for (let k = 0; k < resMatrix[0].length; k += 1) {
      copyMatrix[i][k] = resMatrix[i][k];
    }
  }

  for (let i = 0; i < copyMatrix[0].length; i += 1) {
    for (
      let col = 0, row = copyMatrix.length - 1;
      row >= 0;
      col += 1, row -= 1
    ) {
      resMatrix[i][col] = copyMatrix[row][i];
    }
  }

  return resMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  const iteration = arr.length;
  const resArr = arr;

  for (let k = 1; k < iteration; k += 1) {
    const curr = resArr[k];
    let prev = k - 1;
    while (prev >= 0 && resArr[prev] > curr) {
      resArr[prev + 1] = resArr[prev];
      prev -= 1;
    }
    resArr[prev + 1] = curr;
  }
  return resArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let res = str;
  let iter = iterations;

  while (iter) {
    let even = '';
    let odd = '';

    for (let i = 0; i < res.length; i += 1) {
      if (i % 2 === 0) {
        even += res[i];
      } else {
        odd += res[i];
      }
    }
    iter -= 1;
    res = even + odd;

    if (res === str) {
      iter = iterations % (iterations - iter);
    }
  }

  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numArr = Array.from(String(number), Number);
  const numLength = numArr.length;
  let index;

  if (numLength === 1) {
    return number;
  }

  for (let k = numLength - 1; k > 0; k -= 1) {
    if (numArr[k] > numArr[k - 1]) {
      index = k;
      break;
    }
  }

  if (index === numLength - 1) {
    const lastNum = numArr[numLength - 1];
    numArr[numLength - 1] = numArr[numLength - 2];
    numArr[numLength - 2] = lastNum;
    return +numArr.join('');
  }

  if (!index) {
    return number;
  }

  if (index) {
    const findNum = numArr[index - 1];
    for (let i = numLength - 1; i >= index; i -= 1) {
      if (findNum < numArr[i]) {
        const num = numArr[i];
        numArr[i] = findNum;
        numArr[index - 1] = num;
        break;
      }
    }

    const leftArr = [];
    const rightArr = [];
    for (let l = 0; l < index; l += 1) {
      leftArr.push(numArr[l]);
    }

    for (let r = numLength - 1; r >= index; r -= 1) {
      rightArr.push(numArr[r]);
    }
    const resArr = [...leftArr, ...rightArr];
    return +resArr.join('');
  }

  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
