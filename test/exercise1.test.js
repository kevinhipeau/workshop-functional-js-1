const expect = require('chai').expect;
const zip = require('../src/exercise1').zip;

describe('GIVEN function zip', function() {

  it('WHEN array is empty THEN should return empty array', function() {
    expect(zip([])).to.eql([]);
  });

  it('WHEN 1 sub array with 2 items THEN should return 2 sub arrays with 1 item', function() {
    expect(zip([['a', 'b']])).to.eql([['a'], ['b']]);
  });

  it('WHEN 2 sub arrays with 2 items THEN should return 2 sub arrays with 2 items zipped', function() {
    expect(zip([['a', 'b'], [1, 2]])).to.eql([['a', 1], ['b', 2]]);
  });

  it('WHEN 2 sub arrays with different length THEN should return max length sub arrays zipped', function() {
    expect(zip(['a', 'b'], [1], [true, false, false])).to.eql([['a', 1, true], ['b', false], [false]]);
  });

});
