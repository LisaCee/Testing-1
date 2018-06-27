// const jest = require 'jest';
const helpers = require('./project-1');

// start testing!

const {multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
} = require('./project-1.js')

// const allFunctions = require('./project-1.js')

describe('Test all functions', 
    () => {
    it('should multiply the supplied value by 10', () => {
      const fifty = multiplyByTen(5)
      expect(fifty).toBe(50)
    })

    it('should subtract 5 from given number', () => {
      const ten = subtractFive(15)
      expect(ten).toBe(10)
    })

    it('should compare the length of two strings and confirm they are equal', () => {
      const equal = areSameLength('four', 'five')
      expect(equal).toBe(true)
    })

    it('should compare two variables and confirm they are equal', () => {
      const equal = areEqual('left', 'left')
      expect(equal).toBe(true)
    })

    it('should compare two variables and confirm they are equal', () => {
      const equal = areEqual(5, 5)
      expect(equal).toBe(true)
    })

    it('should compare two variables and confirm they are equal', () => {
      const equal = areEqual(5, (4 + 1))
      expect(equal).toBe(true)
    })

    it('should confirm number is less than 90', () => {
      const equal = lessThanNinety(105)
      expect(equal).toBe(false)
    })

    it('should confirm number is greater than 90', () => {
      const equal = lessThanNinety(55)
      expect(equal).toBe(true)
    })

    it('should confirm number is greater than 50', () => {
      const equal = greaterThanFifty(55)
      expect(equal).toBe(true)
    })

    it('should confirm number is greater than 50', () => {
      const equal = greaterThanFifty(75-10)
      expect(equal).toBe(true)
    })

    it('should add two numbers', () => {
      const forty = add(22, 18)
      expect(forty).toBe(40)
    })

    it('should subtract two numbers', () => {
      const forty = subtract(50, 10)
      expect(forty).toBe(40)
    })

    it('should divide two numbers', () => {
      const divided = divide(12, 3)
      expect(divided).toBe(4)
    })

    it('should multiply two numbers', () => {
      const forty = multiply(4, 10)
      expect(forty).toBe(40)
    })

    it('should get remainder', () => {
      const remainder = getRemainder(40, 10)
      expect(remainder).toBe(4)
    })
 
    it('should determine if result is even', () => {
      const even = isEven(4, 10)
      expect(even).toBe(true)
    })
   
    it('should determine if result is odd', () => {
      const odd = isOdd(4, 10)
      expect(odd).toBe(false)
    })
// david to 66
// jesse 67 down
    it('should return number squared', () => {
      const squared = square(2)
      expect(squared).toBe(4)
    })

    it('should return number cubed', () => {
      const cubed = cube(2)
      expect(cubed).toBe(8)
    })

    it('should raise number to specified power', () => {
      const raised = raiseToPower(3, 3)
      expect(raised).toBe(9)
    })

    it('round number to nearest whole number', () => {
      const round = roundNumber(2.6)
      expect(round).toBe(3)
    })

    it('round number to nearest whole number', () => {
      const round = roundNumber(2.4)
      expect(round).toBe(2)
    })
    it('round number up to nearest whole number', () => {
      const round = roundUp(2.4)
      expect(round).toBe(3)
    })

    it('should add an exclamation point to end of a string', () => {
      const str = addExclamationPoint('string')
      expect(str).toBe('string!')
    })
  })
