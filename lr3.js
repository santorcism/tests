var expect = require('chai').expect;
var sinon = require('sinon');
const mtrx = require('./matrix.js');

const mockMatrix = new mtrx(3);
var mock = sinon.mock(mockMatrix);

describe('test_mock', function(){
    it('test mock', function(){
        mock.expects('get_matrix').once();
        mock.expects('printm').once();
        mock.expects('get_rows').once();
        mock.expects('get_cols').once();
        mock.expects('mull_add').once();
        mock.expects('exists_wrong_row').once();
        mock.expects('exists_zero_row').once();
        mock.expects('swap_with_nonzero_row').once();

        mockMatrix.get_matrix();
        mockMatrix.printm();
        mockMatrix.get_rows();
        mockMatrix.get_cols();
        mockMatrix.mull_add();
        mockMatrix.exists_wrong_row();
        mockMatrix.exists_zero_row();
        mockMatrix.swap_with_nonzero_row();

        mock.verify();
    })
})