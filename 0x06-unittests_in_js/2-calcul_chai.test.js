const chai = require('chai');
const { describe, it } = require('mocha');
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return the sum of two numbers when given "SUM" as type', () => {
    expect(calculateNumber('SUM', 2.4, 3.6)).to.equal(6);
    expect(calculateNumber('SUM', 5, 7)).to.equal(12);
    expect(calculateNumber('SUM', -10, -5)).to.equal(-15);
  });

  it('should return the difference of two numbers when given "SUBTRACT" as type', () => {
    expect(calculateNumber('SUBTRACT', 8.9, 3.2)).to.equal(6);
    expect(calculateNumber('SUBTRACT', 10, 5)).to.equal(5);
    expect(calculateNumber('SUBTRACT', -7, -2)).to.equal(-5);
  });

  it('should return the division of two numbers when given "DIVIDE" as type', () => {
    expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    expect(calculateNumber('DIVIDE', 9.4, 2.3)).to.equal(4.5);
  });

  it('should return "Error" if the division by zero is attempted', () => {
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -5, 0)).to.equal('Error');
  });

  it('should return "Unrecognised type" if an unknown type is given', () => {
    expect(calculateNumber('MULTIPLY', 4, 5)).to.equal('Unrecognised type');
  });
});