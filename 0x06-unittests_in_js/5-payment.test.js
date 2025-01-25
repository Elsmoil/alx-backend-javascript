const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let spy;

  // Set up the spy before each test
  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });

  // Restore the spy after each test
  afterEach(function () {
    spy.restore();
  });

  it('should log the correct total for 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify that the correct message was logged
    expect(spy.calledWith('The total is: 120')).to.be.true;
    // Ensure that console.log was called only once
    expect(spy.callCount).to.equal(1);
  });

  it('should log the correct total for 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Verify that the correct message was logged
    expect(spy.calledWith('The total is: 20')).to.be.true;
    // Ensure that console.log was called only once
    expect(spy.callCount).to.equal(1);
  });
});
