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

  describe('Multiply a number by ten', () => {
    it('should multiply the supplied value by 10', () => {
      const fifty = multiplyByTen(5)
      expect(fifty).toBe(50)
    })

    // it ('should do something', () => {
    //   //next test
    //   expect(expectedResult).condition1(expectedValue)
    // })
  })