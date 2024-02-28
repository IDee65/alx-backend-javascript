const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe, it } = require('mocha');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    const result = calculateNumber(2.4, 3.6);
    assert.strictEqual(result, 6);
  });

  it('should return the sum of two negative rounded numbers', () => {
    const result = calculateNumber(-2.4, -3.6);
    assert.strictEqual(result, -6);
  });

  it('should return the sum of a positive rounded number and a negative rounded number', () => {
    const result = calculateNumber(2.4, -3.6);
    assert.strictEqual(result, -2);
  });

  it('should return sum of a number string and a number', () => {
    const result = calculateNumber('2.4', 3.6);
    assert.strictEqual(result, 6);
  });
});