// 8-api/api.test.js
const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
