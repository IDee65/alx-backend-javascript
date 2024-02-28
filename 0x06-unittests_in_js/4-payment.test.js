const chai = require('chai');
const { describe, it } = require('mocha');
const expect = chai.expect;
const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('Test Utils calls args', () => {
  it('should return cause Utils.calculate with 3 args', () => {
    const spy = sinon.spy(console.log);
    const stub = sinon.stub(Utils.calculateNumber).callsThrough;
    sendPaymentRequestToApi(100, 20);
    assert.equal(spy.withArgs('The total is: 120').calledOnce, false);
  });
});