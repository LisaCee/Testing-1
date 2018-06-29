const helpers = require('./project-1.js');

// start testing!
//1

describe('Project1', () => {
    describe('multiplyByTen', () => {
        it('Should multiply a number by ten', () => {
            const ten = helpers.multiplyByTen(10);
            const eleven = helpers.multiplyByTen(11);

            expect(ten).toBe(100);
            expect(eleven).not.toBe(111);
        })
    })
    describe('subtractFive', () => {
        it('Should subtract five from a number', () => {
            const five = helpers.subtractFive(5);
            const zero = helpers.subtractFive(0);

            expect(five).toBe(0);
            expect(zero).toBe(-5);
        })
    })
    describe('sameLength', () => {
        it('Should return if strings are same length', () => {
            const differentLength = helpers.areSameLength('pizzas', 'honey');
            const sameLength = helpers.areSameLength('blue', 'girl');

            expect(sameLength).toBeTruthy();
            expect(differentLength).not.toBeNaN();
            expect(differentLength).toBeFalsy();
        })
    })
    describe('areEqual', () => {
        it('Should return true given two equal numbers', () => {
            const equal = helpers.areEqual(12, 12);
            const inEqual = helpers.areEqual(12, 13);

            expect(equal).toEqual(true);
            expect(equal).toBeTruthy();
            expect(inEqual).toEqual(false)
        })
    })
    describe('lessThanNinety', () => {
        it('Should return true if a number is less than ninety', () => {
            const ninety = helpers.lessThanNinety(90);
            const four = helpers.lessThanNinety(4);
            const twoHundred = helpers.lessThanNinety(200);
    
            expect(ninety).toBeFalsy();
            expect(four).toBeTruthy();
            expect(four).toBe(true);
            expect(twoHundred).toBe(false);
        })
    })
    describe('greaterThanFifty', () => {
        it('Should return true if a number is greater than fifty', () => {
            const fifty = helpers.greaterThanFifty(50);
            const fiveHundred = helpers.greaterThanFifty(500);
            const two = helpers.greaterThanFifty(2);

            expect(fifty).toBeFalsy();
            expect(fiveHundred).toBeTruthy();
            expect(two).not.toBe(true);
            expect(2).toBeLessThan(50);
        })
    })
    describe('add', () => {
        it('Should return the sum of two numbers', () => {
            const four = helpers.add(2, 2);
            const negative = helpers.add(-1, -5);

            expect(four).toEqual(4);
            expect(negative).toBe(-6);
        })
    })  
    describe('subtract', () => {
        it('Should return the difference between two numbers', () => {
            const ten = helpers.subtract(15, 5);
            expect(ten).toEqual(10);
        })
    })
    describe('divide', () => {
        it('Should return the quotient of two numbers', () => {
            const ten = helpers.divide(30, 3);
            expect(ten).toEqual(10);
        })
    })
    describe('multiply', () => {
        it('Should return the product of two numbers', () => {
            const ten = helpers.multiply(5, 2);
            expect(ten).toBe(10);
        })
    })
    describe('getRemainder', () => {
        it('Should return the remainder from two divided numbers', () => {
            const one = helpers.getRemainder(11, 2);
            expect(one).toBe(1);
        })
    })
    describe('isEven', () => {
        it('Should return if a number is even', () => {
            const two = helpers.isEven(2);
            const three = helpers.isEven(3);
            expect(two).toBe(true);
            expect(three).toBeFalsy();
        })
    })
    describe('isOdd', () => {
        it('Should return if a number is odd', () => {
            const two = helpers.isOdd(2);
            const three = helpers.isOdd(3);
            expect(two).toBe(false);
            expect(three).toBeTruthy();
        })
    })
    describe('square', () => {
        it('Should return a number squared', () => {
            const nine = helpers.square(3);
            expect(nine).toEqual(9);
        })
    })
    describe('cube', () => {
        it('Should return a number cubed', () => {
            const twentySeven = helpers.cube(3);
            expect(twentySeven).toEqual(27);
        })
    })
    describe('raiseToPower', () => {
        it('Should raise a number to the power of an exponent', () => {
            const nine = helpers.raiseToPower(3, 2);
            expect(nine).toEqual(9);
        })
    })
    describe('roundNumber', () => {
        it('Should round a number to the nearest integer', () => {
            const ten = helpers.roundNumber(9.5);
            const nine = helpers.roundNumber(9.3);
            expect(ten).toEqual(10);
            expect(nine).toEqual(9);
        })
    })
    describe('roundUp', () => {
        it('Should round up a number', () => {
            const ten = helpers.roundUp(9.2);
            const nine = helpers.roundUp(8.1);
            expect(ten).toEqual(10);
            expect(nine).toEqual(9);
        })
    })
    describe('addExclamationPoint', () => {
        it('Should add an exclamation point to the end of a string', () => {
            const lola = helpers.addExclamationPoint('Lola');
            expect(lola).toEqual('Lola!');
        })
    })
    describe('combineNames', () => {
        it('Should combine two names with a space between them', () => {
            const lola = helpers.combineNames('Lola', 'Canini');
            expect(lola).toBe('Lola Canini')
        })
    })
    describe('getGreeting', () => {
        it('Should add Hello and and exclamation point to a name', () => {
            const lola = helpers.getGreeting('Lola');
            expect(lola).toBe('Hello Lola!');
        })
    })
    describe('getRectangleArea', () => {
        it('Should return the product of two sides of a rectangle', () => {
            const eight = helpers.getRectangleArea(4, 2);
            expect(eight).toEqual(8);
        })
    })
    describe('getTriangleArea', () => {
        it('Should return the area of a triangle', () => {
            const area = helpers.getRectangleArea(4, 2);
            const mathWork = helpers.getRectangleArea(4, 2);
            expect(area).toEqual(mathWork);
        })
    })
    describe('getCircleArea', () => {
        it('Should return the area of a circle', () => {
            const area = helpers.getCircleArea(4);
            const mathWork = helpers.getCircleArea(4);
            expect(area).toEqual(mathWork);
        })
    })
    describe('getRectangularPrismVolume', () => {
        const eight = helpers.getRectangularPrismVolume(2, 2, 2);
        expect(eight).toEqual(8);
    })
})

