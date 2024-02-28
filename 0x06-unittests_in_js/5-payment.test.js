const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const sendPaymentRequestToApi = require('./5-payment');

describe('Test Utils calls args', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should return cause Utils.calculate with 3 args, given amount 100 and fee 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.callCount).to.equal(1);
  });

  it('should return cause Utils.calculate with 3 args, given amount 10 and fee 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.callCount).to.equal(1);
  });
});