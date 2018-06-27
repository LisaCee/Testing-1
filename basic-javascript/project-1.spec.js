const helpers = require('./project-1.js');

// start testing!
//1
it('Should multiply a number by ten', () => {
    const ten = helpers.multiplyByTen(10);
    const eleven = helpers.multiplyByTen(11);

    expect(ten).toBe(100);
    expect(eleven).not.toBe(111);
})
//2
it('Should subtract five from a number', () => {
    const five = helpers.subtractFive(5);
    const zero = helpers.subtractFive(0);

    expect(five).toBe(0);
    expect(zero).toBe(-5);
})
//3
it('Should return if strings are same length', () => {
    const differentLength = helpers.areSameLength('pizzas', 'honey');
    const sameLength = helpers.areSameLength('blue', 'girl');

    expect(sameLength).toBeTruthy();
    expect(differentLength).not.toBeNaN();
    expect(differentLength).toBeFalsy();
})
//4
it('Should return true given two equal numbers', () => {
    const equal = helpers.areEqual(12, 12);
    const inEqual = helpers.areEqual(12, 13);

    expect(equal).toEqual(true);
    expect(equal).toBeTruthy();
    expect(inEqual).toEqual(false)
})
//5
it('Should return true if a number is less than ninety', () => {
    const ninety = helpers.lessThanNinety(90);
    const four = helpers.lessThanNinety(4);
    const twoHundred = helpers.lessThanNinety(200);

    expect(ninety).toBeFalsy();
    expect(four).toBeTruthy();
    expect(four).toBe(true);
    expect(twoHundred).toBe(false);
})
//6
it('Should return true if a number is greater than fifty', () => {
    const fifty = helpers.greaterThanFifty(50);
    const fiveHundred = helpers.greaterThanFifty(500);
    const two = helpers.greaterThanFifty(2);

    expect(fifty).toBeFalsy();
    expect(fiveHundred).toBeTruthy();
    expect(two).not.toBe(true);
    expect(2).toBeLessThan(50);
})
//7
it('Should return the sum of two numbers', () => {  
    const four = helpers.add(2, 2);
    const negative = helpers.add(-1, -5);

    expect(four).toEqual(4);
    expect(negative).toBe(-6);
})

