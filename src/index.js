"use strict";

// You should implement your task here.

module.exports = function towelSort (matrix) {
    const isArgumentsListEmpty = () => {
      if ([...arguments].length === 0) {
          return true;
      }
    }

    if (isArgumentsListEmpty()) {
        return [];
      }

    const matrixCopy = matrix.map(subArray => subArray.slice());
    
    const isMatrixEmpty = (matrixCopy) => {
        if (matrixCopy.length === 0) {
            return true;
        }
    }

    if (isMatrixEmpty(matrixCopy)) {
        return matrixCopy;
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
  
      matrixCopy.map(reverseOddRows);
  
      const simpleArray = [];
      
      convertMatrixToSimpleArray(matrixCopy, simpleArray);
  
      return simpleArray;
  }
