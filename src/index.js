
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const matrixCopy = matrix.map(subArray => subArray.slice());
  
    const isMatrixEmpty = (matrixCopy) => {
        if (matrixCopy.length === 0) {
            return false;
        }
    }
  
    const reverseOddRows = (element, index, matrixCopy) => {
        if (index % 2 !== 0) {
          return matrixCopy[index].reverse();
        }
      }
  
      const convertMatrixToSimpleArray = (matrixCopy, simpleArray) => {
        for (let i = 0; i < matrixCopy.length; i++) {
            for (let j = 0; j < matrixCopy[i].length; j++) {
                simpleArray.push(matrixCopy[i][j])
            }
        }
      }
      if (!isMatrixEmpty(matrixCopy)) {
        return matrixCopy;
      }
      
      matrixCopy.map(reverseOddRows);
  
      const simpleArray = [];
      
      convertMatrixToSimpleArray(matrixCopy, simpleArray);
  
      return simpleArray;
  }
