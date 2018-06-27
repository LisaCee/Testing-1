const helpers = require('./project-1');

describe('project 1 test', () => {
    it('shouldMultiplyByTen', () => {
        expect(helpers.multiplyByTen(2)).toBe(20)
    })

    it('shouldSubtractFive', () => {
        expect(helpers.subtractFive(5)).toBe(0);
    })

    it('shouldAreSameLength', ()=> {
        expect(helpers.areSameLength("help", "help")).toBeTruthy();
    })
    //wanted a boolean

    it('Equal', ()=> {
        expect(helpers.areEqual(4,4)).toBeTruthy();
    })

    it('shouldLessThanNinety', () => {
        expect(helpers.lessThanNinety(50)).toBeTruthy()
    })

    it('shouldGreaterThanFifty', () => {
        expect(helpers.greaterThanFifty(51)).toBeTruthy();
    })

    it('shouldAdd', () => {
        expect(helpers.add(4, 6)).toBe(10);
    })

    it('shouldSubtract', () => {
        expect(helpers.subtract(3, 1)).toBe(2)
    })

    it('shouldDivide', () => {
        expect(helpers.divide(10, 2)).toBe(5)
    })
    
    it('shouldMultiply', () => {
        expect(helpers.multiply(3, 3)).toBe(9);
    })

    it('shouldGetRemainder', () => {
        expect(helpers.getRemainder(13, 5)).toBe(3);
    })

    it('shouldIsEven', () => {
        expect(helpers.isEven(10)).toBeTruthy()
    })

    it('shouldIsOdd', () => {
        expect(helpers.isOdd(13)).toBeTruthy();
    })

    it('shouldSquare', () => {
        expect(helpers.square(3)).toBe(9);
    })

    it('shouldCube', () => {
        expect(helpers.cube(3)).toBe(27)
    })

    it('shouldRaiseToPower', () => {
        expect(helpers.raiseToPower(3, 3)).toBe(27)
    })

    it('shouldRoundNumber', () => {
        expect(helpers.roundNumber(11)).toBe(11);
    })

    it('shouldRoundUp', () => {
        expect(helpers.roundUp(12.6)).toBe(13);
    })

    it('shouldAddExclamationPoint', () => {
        expect(helpers.addExclamationPoint("hello")).toContain('!')
    })

    it('shouldCombineNames', () => {
        expect(helpers.combineNames("Steve", "Irwin")).toContain(" ")
    })

    it('shouldGreeting', () => {
        expect(helpers.getGreeting("Steve")).toContain('Hello');
    })

    it('shouldGetRechtangleArea', () => {
        expect(helpers.getRectangleArea(3, 3)).toBe(9);
    })

    it('ShouldGetTriangleArea', () => {
        expect(helpers.getTriangleArea(2, 4)).toBe(4);
    })

    it('shouldGetCircleArea', () => {
        expect(helpers.getCircleArea(2)).toBe(Math.PI * 4);
    })

    it('shouldGetRechtanglePrismVolumne', () => {
        expect(helpers.getRectangularPrismVolume(3, 3, 3)).toBe(27)
    })



})

// start testing!
