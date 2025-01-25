const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber and log the correct message', function () {
    // Stub the calculateNumber method to always return 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log to verify the output
    const spy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify the stub is called with correct arguments
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify the spy recorded the correct message
    expect(spy.calledWith('The total is: 10')).to.be.true;

    // Restore the stub and spy
    stub.restore();
    spy.restore();
  });
});
