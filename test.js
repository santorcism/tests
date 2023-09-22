var expect = require('chai').expect;
const Mtrx = require('mtrx');

let m = new Mtrx(2, 3, 0);
const m1 = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
const n1 = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

describe('matrix_test', function(){
    beforeEach(function(){
        console.log("Next test: ");
    })
    it('test creation', function(){
        expect(m).to.eql([[ 0, 0, 0 ], [ 0, 0, 0 ]]);
    })
    it('test zeros', function(){
        expect(Mtrx.zeros(3, 3)).to.eql(  [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ] );
    })
    it('test ones', function(){
        expect(Mtrx.ones(3, 4)).to.eql( [ [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ] );
    })
    it('test diagonal', function(){
        expect(Mtrx.diag([2, 4, 6])).to.eql( [ [ 2, 0, 0 ], [ 0, 4, 0 ], [ 0, 0, 6 ] ] );
    })
    it('test type', function(){
        expect(Mtrx.isMtrx(m)).to.equal( true );
    })
    it('test add', function(){
        expect(Mtrx.add(m1, n1)).to.eql(  [ [ 2, 2, 3 ], [ 4, 6, 6 ], [ 7, 8, 10 ] ] );
    })
    it('test mul', function(){
        expect(Mtrx.mul(m1, n1)).to.eql( [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] );
    })
    it('test div', function(){
        expect(Mtrx.div(n1, m1)).to.eql( [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] );
    })
})

