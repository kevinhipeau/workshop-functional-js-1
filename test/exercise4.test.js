const expect = require('chai').expect;
const asyncYolo = require('../src/exercise4').asyncYolo;

describe('GIVEN function asyncYolo', function() {

  it('WHEN asynchronous thing is not broken THEN should return THE result', function() {

    asyncYolo((ret)=>expect(ret).to.eql([101, 102, 203]));

  });

});
