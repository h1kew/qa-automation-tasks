const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('NumbersValidator class tests', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // 1. Tests for the isNumberEven method
  describe('isNumberEven method', () => {
    it('should return true when provided an even number', () => {
      expect(validator.isNumberEven(4)).to.be.true;
    });

    it('should return false when provided a non even number', () => {
      expect(validator.isNumberEven(3)).to.be.false;
    });

    it('should throw an error when provided not a Number value', () => {
      expect(() => validator.isNumberEven('4')).to.throw(
        '[4] is not of type "Number" it is of type "string"',
      );
    });
  });

  // 2. Tests for the getEvenNumbersFromArray method
  describe('getEvenNumbersFromArray method', () => {
    it('should return an array of even numbers', () => {
      expect(
        validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6]),
      ).to.deep.equal([2, 4, 6]);
    });

    it('should throw an error if input is not an array of numbers', () => {
      expect(() => validator.getEvenNumbersFromArray(['1', 2, 3])).to.throw(
        'is not an array of "Numbers"',
      );
    });
  });

  // 3. Tests for the isAllNumbers method
  describe('isAllNumbers method', () => {
    it('should return true if all elements are numbers', () => {
      expect(validator.isAllNumbers([1, 2, 3, 4])).to.be.true;
    });

    it('should throw an error if input is not an array', () => {
      expect(() => validator.isAllNumbers('123')).to.throw('is not an array');
    });
  });

  // 4. Tests for the isInteger method
  describe('isInteger method', () => {
    it('should return true if number is an integer', () => {
      expect(validator.isInteger(5)).to.be.true;
    });

    it('should throw an error if input is not a number', () => {
      expect(() => validator.isInteger('5')).to.throw('[5] is not a number');
    });
  });
});
