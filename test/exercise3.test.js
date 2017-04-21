const expect = require('chai').expect;
const reverseString = require('../src/exercise3').reverseString;

describe('GIVEN function reverseString', function() {

  const oldSchoolWay = (input) => input.split('').reverse().join('');

  it('WHEN string is empty THEN should return the same thing than the old school way', function() {
    let emptyString = '';
    expect(reverseString(emptyString)).to.eql(oldSchoolWay(emptyString));
  });

  it('WHEN string is not empty THEN should return the same thing than the old school way', function() {
    let notEmptyString = 'Hello World !';
    expect(reverseString(notEmptyString)).to.eql(oldSchoolWay(notEmptyString));
  });

});
