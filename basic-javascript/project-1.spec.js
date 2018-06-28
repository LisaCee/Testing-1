const helpers = require('./project-1');

describe("project-1 tests", () => {
  it('should muliply by ten', () => {
    expect(helpers.multiplyByTen(undefined)).toBeNaN();
    expect(helpers.multiplyByTen("ten")).toBeNaN();
    expect(helpers.multiplyByTen(false)).toEqual(0);
    expect(helpers.multiplyByTen(true)).toEqual(10);
    expect(helpers.multiplyByTen(3)).toEqual(30);
  })

  it("should subtract five", () => {
    expect(helpers.subtractFive(10)).toEqual(5);
    expect(helpers.subtractFive(undefined)).toBeNaN();
    expect(helpers.subtractFive("ten")).toBeNaN();
  })

  it("should be the same length", () => {
    expect(helpers.areSameLength('string', 'string')).toBe(true);
    expect(helpers.areSameLength('blahblahblah', 'string')).toBe(false);
  })

  it('should be equal', () => {
    expect(helpers.areEqual('string', 'string')).toBe(true);
    expect(helpers.areEqual('blahblahblah', 'string')).toBe(false);
  })

  it('should be less than ninety', () => {
    expect(helpers.lessThanNinety(89)).toBe(true);
    expect(helpers.lessThanNinety(91)).toBe(false);
  })

  it('should be greater than fifty', () => {
    expect(helpers.greaterThanFifty(59)).toBe(true);
    expect(helpers.greaterThanFifty(41)).toBe(false);
  })

  it("should add", () => {
    expect(helpers.add(5, 5)).toEqual(10);
    expect(helpers.add(-5, 5)).toEqual(0);
    expect(helpers.add(.5, .5)).toEqual(1);
    expect(helpers.add(undefined, undefined)).toBeNaN();
  })

  it('should subtract', () => {
    expect(helpers.subtract(5, 5)).toEqual(0);
    expect(helpers.subtract(-5, 5)).toEqual(-10);
    expect(helpers.subtract(.5, .5)).toEqual(0);
    expect(helpers.subtract(undefined, undefined)).toBeNaN();
  })

  it('should divide', () => {
    expect(helpers.divide(5, 5)).toEqual(1);
    expect(helpers.divide(25, 5)).toEqual(5);
    expect(helpers.divide(-5, 5)).toEqual(-1);
    expect(helpers.divide(undefined, undefined)).toBeNaN();
  })

  it('should multiply', () => {
    expect(helpers.multiply(5, 5)).toEqual(25);
    expect(helpers.multiply(1, 10)).toEqual(10);
    expect(helpers.multiply(-5, 5)).toEqual(-25);
    expect(helpers.multiply(0, 5)).toEqual(0);
    expect(helpers.multiply(undefined, undefined)).toBeNaN();
  })

  it('should get remainder', () => {
    expect(helpers.getRemainder(6, 3)).toEqual(0);
    expect(helpers.getRemainder(5, 2)).toEqual(1);
  })

  it('should be even', () => {
    expect(helpers.isEven(2)).toBeTruthy();
    expect(helpers.isEven(3)).toBeFalsy();
    expect(helpers.isEven(undefined)).toBeFalsy();
  })

  it('should be odd', () => {
    expect(helpers.isOdd(3)).toBeTruthy();
    expect(helpers.isOdd(2)).toBeFalsy();
    expect(helpers.isOdd(undefined)).toBeTruthy();

  })

  it('should square the number', () => {
    expect(helpers.square(5)).toEqual(25);
    expect(helpers.square(-5)).toEqual(25);
    expect(helpers.square(undefined)).toBeNaN();
  })

  it('should cube the number', () => {
    expect(helpers.cube(5)).toEqual(125);
    expect(helpers.cube(undefined)).toBeNaN();
  })

  it("should return the number raised to the power of the given exponent", () => {
    expect(helpers.raiseToPower(2, 5)).toEqual(32);
    expect(helpers.raiseToPower(undefined)).toBeNaN();
  })

  it('should return the value of a number rounded to the nearest integer', () => {
    expect(helpers.roundNumber(2.99)).toEqual(3);
    expect(helpers.roundNumber(0.3)).toEqual(0);
    expect(helpers.roundNumber(undefined)).toBeNaN();
  })

  it('should return the integer greater than the given number', () => {
    expect(helpers.roundUp(2.1)).toEqual(3);
    expect(helpers.roundUp(0.3)).toEqual(1);
    expect(helpers.roundUp(undefined)).toBeNaN();
  })

  it('should add exclamation point at end of string',  () => {
    expect(helpers.addExclamationPoint('hello')).toBe('hello!');
  })

  it('should return a string of names combined', () => {
    expect(helpers.combineNames('victor', 'montoya')).toBe('victor montoya')
  })

  it('should return hello {input}', () => {
    expect(helpers.getGreeting('Randy')).toBe('Hello Randy!');
  })

  it('should return the area of the given rectangle', () => {
    expect(helpers.getRectangleArea(5, 6)).toEqual(30);
    expect(helpers.getRectangleArea(undefined, undefined)).toBeNaN();
  })

  it('should return the area of the given triangle', () => {
    expect(helpers.getTriangleArea(5, 6)).toEqual(15);
    expect(helpers.getTriangleArea(undefined, undefined)).toBeNaN();
  })

  it.skip('should return the area of the given circle', () => {
    expect(helpers.getCircleArea(5, 5)).toEqual(78.53981633974483)
    expect(helpers.getCircleArea(undefined, undefined)).toBeNaN();

  })

  it('should return area of the given prism', () => {
    expect(helpers.getRectangularPrismVolume(2, 3, 4)).toEqual(24);
    expect(helpers.getRectangularPrismVolume(undefined, undefined, undefined)).toBeNaN();

  })
})
