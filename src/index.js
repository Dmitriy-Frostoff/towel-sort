/**
 * Reverse all the odd rows of the given @param{matrix} and return it transformed into flat array.
 * If not a matrix was produced or an empty one, the empty flat array will be returned.
 *
 * @param {number[][] | undefined} matrix - 2d array(matrix) or undefined
 *
 * @returns {number[]} - flat array with odd matrix' rows reversed or empty array
 *
 * @example
 *   const matrix = [
 *    [1, 2, 3],
 *    [4, 5, 6],
 *    [7, 8, 9],
 *   ];
 *
 *  towelSort(matrix) =>
 *  OUTPUT:
 *  [1, 2, 3, 6, 5, 4, 7, 8, 9]
 *
 *  const matrix = [
 *    [1, 2, 4],
 *    [5, 6, 7, 8],
 *    [9, 12],
 *  ];
 *
 *  towelSort(matrix) =>
 *  OUTPUT:
 *  [1, 2, 4, 8, 7, 6, 5, 9, 12]
 *
 *  const matrix = [];
 *
 *  towelSort(matrix) =>
 *  OUTPUT:
 *  []
 *
 *  towelSort() =>
 *  OUTPUT:
 *  []
 *
 */
function towelSort(matrix) {
  // utils

  /**
   * Utility function for reversing odd rows of the 2d array (matrix)
   *
   * @param {number[]} element - current row
   * @param {number} index - index of the row
   * @param {number[][]} matrixArr - the entire produced 2d array
   *
   * @returns {number[]} - if current row is of odd index OUTPUT: reversed row
   *  otherwise OUTPUT: row as is
   *
   * @example
   *    const arr = [
   *       [1, 2],
   *       [3, 4],
   *       [5, 6],
   *     ]
   *    arr.map(reverseOddRows) =>
   *    OUTPUT:
   *    arr [
   *       [1, 2],
   *       [4, 3],
   *       [5, 6],
   *     ]
   *
   */
  function reverseOddRows(element, index, matrixArr) {
    if (index % 2 !== 0) {
      return matrixArr[index].reverse();
    }

    return element;
  }

  // logic
  // check that given arguments are not empty and @param{matrix} is @type{Array}
  if (arguments.length === 0 || !Array.isArray(matrix)) {
    return [];
  }

  // create copy of @link{matrix} due to FP paradigm
  /** @type{number[][]} */
  let matrixCopy = matrix.map((subArray) => subArray.slice());

  // check that @link{matrixCopy} is not empty
  if (matrixCopy.length === 0) {
    return [];
  }

  // reverse odd matrix rows
  /** @type{number[][]} */
  matrixCopy = matrixCopy.map(reverseOddRows);

  // flat the @link{matrixCopy}
  /** @type{number[]} */
  const simpleArray = matrixCopy.flat();

  return simpleArray;
}

module.exports = towelSort;
