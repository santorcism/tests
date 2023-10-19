var expect = require('chai').expect;
const {
    addMatrices,
    multiplyMatrices,
    transposeMatrix,
    createMatrix,
  } = require('./matrix-operations');

describe('Matrix Operations', () => {
    it('create a matrix', () => {
        const rows = 2;
        const cols = 3;
        const initialValue = 1;
  
        const result = createMatrix(rows, cols, initialValue);
  
        const expected = [
          [1, 1, 1],
          [1, 1, 1],
        ];
  
        expect(result).to.deep.equal(expected);
      });

      it('add two matrices', () => {
        const matrixA = [
          [1, 2],
          [3, 4],
        ];
  
        const matrixB = [
          [5, 6],
          [7, 8],
        ];
  
        const result = addMatrices(matrixA, matrixB);
  
        const expected = [
          [6, 8],
          [10, 12],
        ];
  
        expect(result).to.deep.equal(expected);
      });

      it('multiply two matrices', () => {
        const matrixA = [
          [1, 2],
          [3, 4],
        ];
  
        const matrixB = [
          [5, 6],
          [7, 8],
        ];
  
        const result = multiplyMatrices(matrixA, matrixB);
  
        const expected = [
          [19, 22],
          [43, 50],
        ];
  
        expect(result).to.deep.equal(expected);
      });

      it('transpose a matrix', () => {
        const matrix = [
          [1, 2, 3],
          [4, 5, 6],
        ];
  
        const result = transposeMatrix(matrix);
  
        const expected = [
          [1, 4],
          [2, 5],
          [3, 6],
        ];
  
        expect(result).to.deep.equal(expected);
      });
  
})