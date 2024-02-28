const chai = require('chai');
const { describe, it } = require('mocha');
const expect = chai.expect;
const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Test Utils calls args', () => {
  it('should return cause Utils.calculate with 3 args', () => {
    const spy = sinon.spy(Utils.calculateNumber);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith(100, 20)).to.equal(false);
  });
});

describe('Test Utils called not once', () => {
  it('should return false to being called once', () => {
    const spy = sinon.spy(Utils.calculateNumber);
    sendPaymentRequestToApi(100, 20);
    assert.equal(spy.calledOnce, false);
    // spy.restore();
  });
});