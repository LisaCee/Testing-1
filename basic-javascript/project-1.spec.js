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
  })