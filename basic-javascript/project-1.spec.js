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
})

// start testing!
