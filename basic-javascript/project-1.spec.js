const helpers = require('./project-1');

test('multiplies input by 10', () => {
    expect(helpers.multiplyByTen(3)).toBe(30)
})

test('multiplies 2 * 3 to equal 6', () => {
    expect(helpers.multiply(2,3)).toBe(6)
})

test('subtracts 5 from input', () => {
    expect(helpers.subtractFive(11)).toBe(6)
})

test('Subtracts 10 from 15',() => {
    expect(helpers.subtract(15,10)).toBe(5)
})

test('Squares an input, 4',() => {
    expect(helpers.square(4)).toBe(16)
})

test('Strings cat and dog are same length', () => {
    expect(helpers.areSameLength('cat','dog')).toBe(true)
})

describe('Given two inputs x y, returns boolean if inputs are equal',  () => {
    test('3 is equal to 3', () => {
        expect(helpers.areEqual(3,3)).toBe(true)
    })
    test('3 is not equal to 4', () => {
        expect(helpers.areEqual(3,4)).toBe(false)
    })
})

describe('Given a numeric input x, returns true if x < 90', () => {
    test('89 Should return true',() => {
        expect(helpers.lessThanNinety(89)).toBe(true)
    })
    test('90 should return false',() => {
        expect(helpers.lessThanNinety(90)).toBe(false)
    })
    test('91 should be false', () => {
        expect(helpers.lessThanNinety(91)).toBe(false)
    })
})

describe('Cubes its given argument', () => {
    test('3 cubed is 27',() => {
        expect(helpers.cube(3)).toBe(27)
    })
})

describe('Appends an ! to the end of a string', () => {
    test('This sentence should have an exclamation point',() => {
        expect(helpers.addExclamationPoint('This sentence should have an exclamation point')).toBe('This sentence should have an exclamation point!')
    })
})

describe('Function raises input num to exponent exp',() => {
    test('3 raised to the 4th power is 81',() => {
        expect(helpers.raiseToPower(3,4)).toBe(81)
    })
})

test('4 is even',() => {
    expect(helpers.isEven(4)).toBe(true)
})

test('5 is odd', () => {
    expect(helpers.isOdd(5)).toBe(true)
})

test('51 is greater then 50', () => {
    expect(helpers.greaterThanFifty(51)).toBe(true)
}) 



// start testing!
