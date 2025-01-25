const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should add two rounded numbers correctly', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });

    it('should handle one number as zero', () => {
      expect(calculateNumber('SUM', 0, 4.5)).to.equal(5);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should subtract two rounded numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });

    it('should handle one number as zero', () => {
      expect(calculateNumber('SUBTRACT', 0, 4.5)).to.equal(-5);
    });
  });

  describe('DIVIDE operation', () => {
    it('should divide two rounded numbers correctly', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should handle division by 0 and return "Error"', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should handle negative numbers in division', () => {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for invalid operation types', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});

