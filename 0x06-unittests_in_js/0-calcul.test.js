// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should round numbers and return their sum', function () {
    assert.strictEqual(calculateNumber(1, 3), 4); // 1 + 3
    assert.strictEqual(calculateNumber(1, 3.7), 5); // 1 + 4 (rounded)
    assert.strictEqual(calculateNumber(1.2, 3.7), 5); // 1 + 4 (rounded)
    assert.strictEqual(calculateNumber(1.5, 3.7), 6); // 2 + 4 (rounded)
  });
});

