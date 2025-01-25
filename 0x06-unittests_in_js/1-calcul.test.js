const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should add two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });

    it('should handle one number as zero', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 4.5), 5);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should subtract two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });

    it('should handle one number as zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 4.5), -5);
    });
  });

  describe('DIVIDE operation', () => {
    it('should divide two rounded numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should handle division by 0 and return "Error"', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle negative numbers in division', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for invalid operation types', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), /Invalid operation type/);
    });
  });
});
