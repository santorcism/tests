function createMatrix(rows, cols, initialValue = 0) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = initialValue;
      }
    }
    return matrix;
  }

  function addMatrices(matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
      throw new Error('Matrices must have the same dimensions for addition.');
    }
  
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrixA[0].length; j++) {
        result[i][j] = matrixA[i][j] + matrixB[i][j];
      }
    }
    return result;
  }

  function multiplyMatrices(matrixA, matrixB) {
    if (matrixA[0].length !== matrixB.length) {
      throw new Error('The number of columns in the first matrix must be equal to the number of rows in the second matrix.');
    }
  
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrixB[0].length; j++) {
        result[i][j] = 0;
        for (let k = 0; k < matrixA[0].length; k++) {
          result[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
    return result;
  }

  function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const result = [];
    for (let i = 0; i < cols; i++) {
      result[i] = [];
      for (let j = 0; j < rows; j++) {
        result[i][j] = matrix[j][i];
      }
    }
    return result;
  }

  module.exports = {
    createMatrix,
    addMatrices,
    multiplyMatrices,
    transposeMatrix,
  };