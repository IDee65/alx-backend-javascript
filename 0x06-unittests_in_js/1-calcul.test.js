/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two numbers when given "SUM" as type', () => {
    assert.equal(calculateNumber('SUM', 2.4, 3.6), 6);
    assert.equal(calculateNumber('SUM', 5, 7), 12);
    assert.equal(calculateNumber('SUM', -10, -5), -15);
  });

  it('should return the difference of two numbers when given "SUBTRACT" as type', () => {
    assert.equal(calculateNumber('SUBTRACT', 8.9, 3.2), 6);
    assert.equal(calculateNumber('SUBTRACT', 10, 5), 5);
    assert.equal(calculateNumber('SUBTRACT', -7, -2), -5);
  });

  it('should return the division of two numbers when given "DIVIDE" as type', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 3), 2);
    assert.equal(calculateNumber('DIVIDE', 9.4, 2.3), 4.5);
  });

  it('should return "Error" if the division by zero is attempted', () => {
    assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', -5, 0), 'Error');
  });

  it('should return "Unrecognised type" if an unknown type is given', () => {
    assert.equal(calculateNumber('MULTIPLY', 4, 5), 'Unrecognised type');
  });
});