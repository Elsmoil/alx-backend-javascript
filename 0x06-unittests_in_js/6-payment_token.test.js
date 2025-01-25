const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        // Test if the resolved response is correct
        expect(response.data).to.equal('Successful response from the API');
        done();  // Signal that the test is complete
      })
      .catch(done); // If there's an error, it will fail the test
  });
});

