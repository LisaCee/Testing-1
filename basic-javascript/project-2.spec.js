const funcs = require('./project-2');

describe('Project 2 test cases', () => {

    it('shouldGetBiggest', () => {
        expect(funcs.getBiggest(1, 10)).toBe(10);
        expect(funcs.getBiggest(10, 1)).toBe(10);
        expect(funcs.getBiggest(10,10)).toBe(10);
    })

    it('shouldGreeting', () => {
        expect(funcs.greeting("Spanish")).toBe('Hola!')
        expect(funcs.greeting("German")).toBe('Guten Tag!')
    })

    it('isTemOrFive', () => {
        expect(funcs.isTenOrFive(10)).toBeTruthy()
        expect(funcs.isTenOrFive(5)).toBeTruthy()
        expect(funcs.isTenOrFive(6)).toBeFalsy();
    })

    it('isInRange', () => {
        expect(funcs.isInRange(39)).toBeTruthy();
        expect(funcs.isInRange(10)).toBeFalsy();
        expect(funcs.isInRange(60)).toBeFalsy();
    })

    it('isInteger', () => {
        expect(funcs.isInteger(5)).toBeTruthy()
        expect(funcs.isInteger("d")).toBeFalsy();
    })

    it('fizzBuzz', () => {
        expect(funcs.fizzBuzz(15)).toBe("fizzbuzz")
        expect(funcs.fizzBuzz(20)).toBe("buzz")
        expect(funcs.fizzBuzz(9)).toBe("fizz")
        expect(funcs.fizzBuzz(28)).toBe(28);
    })

    it('isPrime', () => {

        expect(funcs.isPrime(-1)).toBeFalsy()
        expect(funcs.isPrime(1)).toBeFalsy()
        expect(funcs.isPrime(0)).toBeFalsy()
        expect(funcs.isPrime(4)).toBeFalsy()
        expect(funcs.isPrime(23)).toBeTruthy()
    })

    it('shouldReturnFirst', () => {
        expect(funcs.returnFirst([1, 2])).toBe(1);
    })

    it('shouldReturnlast', () => {
        expect(funcs.returnLast([1, 2])).toBe(2);
    })

    it('shouldGetArrayLength', () => {
        expect(funcs.getArrayLength([1, 2, 3])).toBe(3);

    })

    it('shouldIncrementByOne', () => {
        expect(funcs.incrementByOne([1 ,2, 3])).toEqual([2, 3, 4]);
    })

    it('shouldAddItemToArray', ()=>{
        expect(funcs.addItemToArray([1, 2], 3)).toEqual([1, 2, 3])
    })

    it('shouldAddItemToFront', ()=> {
        expect(funcs.addItemToFront([1, 2], 3)).toEqual([3, 1, 2])
    })

    it('wordsToSentence', ()=>{
        expect(funcs.wordsToSentence(['apple', 'hello', 'school'])).toBe('apple hello school')
    })

    it('shouldContain', ()=> {
        expect(funcs.contains([1, 2], 2)).toBeTruthy()
        expect(funcs.contains([1, 2], 3)).toBeFalsy()
        expect(funcs.contains([], 3)).toBeFalsy();
        expect(funcs.contains([], -3)).toBeFalsy();
        expect(funcs.contains(['apple', 'banana'], 'orange')).toBeFalsy()
        expect(funcs.contains(['apple', 'banana'], 'banana')).toBeTruthy()
    })

    it('shouldAddNumbers', ()=>{
        expect(funcs.addNumbers([10, 5])).toBe(15);
    })

    it('averageTestScores', ()=>{
        expect(funcs.averageTestScore([5 , 5, 5])).toBe(5);
    })

    it('largestNumber', ()=>{
        expect(funcs.largestNumber([1 , 2, 90])).toBe(90)
    })

    



})


// whoops.. there is no test suite for this file. You'll simply just have to create one :/
