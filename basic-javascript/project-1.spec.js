const helpers = require('./project-1');


describe('Test all Project 1 functions', () => {

    it('should multiply the supplied value by 10', () => {
      const fifty = helpers.multiplyByTen(5)
      expect(fifty).toBe(50)
    })

    it('should subtract 5 from given number', () => {
      const ten = helpers.subtractFive(15)
      expect(ten).toBe(10)
    })

    it('should compare the length of two strings and confirm they are equal', () => {
      const equal = helpers.areSameLength('four', 'five')
      expect(equal).toBe(true)
    })

    it('should compare two variables and confirm they are equal', () => {
      const equal = helpers.areEqual('left', 'left')
      expect(equal).toBe(true)
    })

    it('should compare two variables and confirm they are equal', () => {
      const equal = helpers.areEqual(5, 5)
      expect(equal).toBe(true)
    })

    it('should compare two variables and confirm they are equal', () => {
      const equal = helpers.areEqual(5, (4 + 1))
      expect(equal).toBe(true)
    })

    it('should confirm number is less than 90', () => {
      const equal = helpers.lessThanNinety(105)
      expect(equal).toBe(false)
    })

    it('should confirm number is greater than 90', () => {
      const equal = helpers.lessThanNinety(55)
      expect(equal).toBe(true)
    })

    it('should confirm number is greater than 50', () => {
      const equal = helpers.greaterThanFifty(55)
      expect(equal).toBe(true)
    })

    it('should confirm number is greater than 50', () => {
      const equal = helpers.greaterThanFifty(75-10)
      expect(equal).toBe(true)
    })

    it('should add two numbers', () => {
      const forty = helpers.add(22, 18)
      expect(forty).toBe(40)
    })

    it('should subtract two numbers', () => {
      const forty = helpers.subtract(50, 10)
      expect(forty).toBe(40)
    })

    it('should divide two numbers', () => {
      const divided = helpers.divide(12, 3)
      expect(divided).toBe(4)
    })

    it('should multiply two numbers', () => {
      const forty = helpers.multiply(4, 10)
      expect(forty).toBe(40)
    })

    it('should get remainder', () => {
      const remainder = helpers.getRemainder(40, 10)
      expect(remainder).toBe(0)
    })
 
    it('should determine if result is even', () => {
      const even = helpers.isEven(4, 10)
      expect(even).toBe(true)
    })
   
    it('should determine if result is odd', () => {
      const odd = helpers.isOdd(4, 10)
      expect(odd).toBe(false)
    })

    it('should return number squared', () => {
      const squared = helpers.square(2)
      expect(squared).toBe(4)
    })

    it('should return number cubed', () => {
      const cubed = helpers.cube(2)
      expect(cubed).toBe(8)
    })

    it('should raise number to specified power', () => {
      const raised = helpers.raiseToPower(3, 3)
      expect(raised).toBe(27)
    })

    it('round number to nearest whole number', () => {
      const round = helpers.roundNumber(2.6)
      expect(round).toBe(3)
    })

    it('round number to nearest whole number', () => {
      const round = helpers.roundNumber(2.4)
      expect(round).toBe(2)
    })

    it('round number up to nearest whole number', () => {
      const round = helpers.roundUp(2.4)
      expect(round).toBe(3)
    })

    it('should add an exclamation point to end of a string', () => {
      const str = helpers.addExclamationPoint('string')
      expect(str).toBe('string!')
    })

    it('should combine two names into 1', () => {
      const name = helpers.combineNames('lambda', 'school')
      expect(name).toBe('lambda school')
    })

    it('should return a greeting to name passed', () => {
      const name = helpers.getGreeting('Jesse')
      expect(name).toBe('Hello Jesse!')
    })

    it('should return the area of rectangle passed', () => {
      const rectangle = helpers.getRectangleArea(10,10)
      expect(rectangle).toBe(100)
    })

    it('should return the area of triangle passed', () => {
      const triangle = helpers.getTriangleArea(10,10)
      expect(triangle).toBe(50)
    })

    it('should return the area of circle passed', () => {
      const circle = helpers.getCircleArea(50)
      expect(circle).toBe(7853.981633974483)
    })
  })
