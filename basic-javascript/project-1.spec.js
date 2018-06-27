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
  })

  it('should be odd', () => {
    expect(helpers.isOdd(3)).toBeTruthy();
    expect(helpers.isOdd(2)).toBeFalsy();
  })

  it('should square the number', () => {
    expect(helpers.square(5)).toEqual(25);
    expect(helpers.square(undefined)).toBeNaN();
  })
})
