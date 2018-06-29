const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

beforeEach(() => {
    array = [1, 2, 3, 4, 5];
})

describe('Project2', () => {

    describe('get biggest', () => {
        it('Should return the greater of two numbers', () => {
            const two = funcs.getBiggest(2, 0);
            const thirty = funcs.getBiggest(15, 30);

            expect(two).toBeGreaterThan(0);
            expect(thirty).toBe(30)
        })
    })
    describe('greeting', () => {
        it('Should return the correct language greeting', () => {
            const german = funcs.greeting('German');
            const spanish = funcs.greeting('Spanish');
            const english = funcs.greeting('English');

            expect(german).toBe('Guten Tag!');
            expect(spanish).toBe('Hola!');
            expect(english).toBe('Hello!')
        });
    })
    describe('isTenOrFive', () => {
        it('Should return if a number is ten or five', () => {
            const ten = funcs.isTenOrFive(10);
            const five = funcs.isTenOrFive(5);
            const four = funcs.isTenOrFive(4);

            expect(ten).toBe(true);
            expect(five).toBeTruthy();
            expect(four).not.toBeTruthy();
        })
    })
    describe('isInRange', () => {
        it('Should return if a number is within range', () => {
            const fifty = funcs.isInRange(50);
            const thirty = funcs.isInRange(30);
            const zero = funcs.isInRange(0);
            expect(fifty).toBeFalsy();
            expect(thirty).toBe(true);
            expect(zero).toBe(false);
        })
    })
    describe('isInteger', () => {
        it('Should return if a number is an integer', () => {
            const not = funcs.isInteger(1.1);
            const yes = funcs.isInteger(100);
            expect(not).toBe(false);
            expect(yes).toBeTruthy();
        })
    })
    describe('fizzBuzz', () => {
        it('Should follow the rules of fizzBuzz', () => {
            const fb = funcs.fizzBuzz(15);
            const b = funcs.fizzBuzz(10);
            const f = funcs.fizzBuzz(3);
            const num = funcs.fizzBuzz(1);
            expect(fb).toBe('fizzbuzz');
            expect(b).toBe('buzz');
            expect(f).toBe('fizz');
            expect(num).toEqual(1);
        })
    })
    describe('isPrime', () => {
        it('Should return if a number is prime', () => {
            const prime = funcs.isPrime(3);
            const not = funcs.isPrime(10);
            expect(prime).toBe(true);
            expect(not).toBe(false);
        })
    })
    describe('returnFirst', () => {
        it('Should return the first item in an array', () => {
            const first = funcs.returnFirst(array);
            expect(first).toBe(1);
            expect(first).not.toBe(6);
            expect(first).not.toBe(undefined);
        })
    })
    describe('returnLast', () => {
        it('Should return the last item in an array', () => {
            const last = funcs.returnLast(array);
            expect(last).toBe(5);
            expect(last).not.toBe(1);
        })
    })
    describe('getArrayLength', () => {
        it('Should return the length of an array', () => {
            const leng = funcs.getArrayLength(array);
            expect(leng).toBe(5);
        })
    })
    describe('incrementByOne', () => {
        it('Should add one to each item in an array', () => {
            let array = [1, 2, 3, 4, 5];
            funcs.incrementByOne(array);
            expect(array).toEqual([2, 3, 4, 5, 6]);
            expect(array).not.toEqual([1, 2, 3, 4, 5])
        })
    })
    describe('addItemToArray', () => {
        it('Should push an item to the end of an array', () => {
            const six = funcs.addItemToArray(array, 6);
            expect(six).toEqual([1, 2, 3, 4, 5, 6]);
            expect(six).not.toEqual([1, 2, 3, 4, 5])
        })
    })
    describe('addItemToFront', () => {
        it('Should add an item to the front of an array', () => {
            const zero = funcs.addItemToFront(array, 0);
            expect(zero).toEqual([0, 1, 2, 3, 4, 5]);
            expect(zero).not.toEqual([1, 2, 3, 4, 5]);
            expect(zero).not.toEqual([1, 2, 3, 4, 5, 0]);
        })
    })
    describe('wordsToSentence', () => {
        it('Should combine words into a sentence', () => {
            let sentence = funcs.wordsToSentence(['My', 'name', 'is', 'Lisa']);
            expect(sentence).toBe('My name is Lisa');
            expect(sentence).not.toBe('MynameisLisa');
            expect(sentence).not.toBe(['My', 'name', 'is', 'Lisa']);
        })
    })
    describe('contains', () => {
        it('Should return if an item is in an array', () => {
            const four = funcs.contains(array, 4);
            const ten = funcs.contains(array, 10);
            expect(four).toBe(true);
            expect(ten).toBe(false);
        })
    })
    describe('addNumbers', () => {
        it('Should add all of the numbers in an array', () => {
            let ten = funcs.addNumbers([1, 4, 5]);
            let negative = funcs.addNumbers([-1, -4, 5]);
            expect(ten).toEqual(10);
            expect(negative).toEqual(0);
        })
    })

    describe('averageTestScores', () => {
        it('Should return the average of an array of numbers', () => {
            let average = funcs.averageTestScore(array);
            expect(average).toEqual(3);
            expect(average).not.toBe(array);
            expect(average).not.toBe([3]);
        })
    })
    describe('largestNumber', () => {
        it('Should return the largest number in an array', () => {
            let largest = funcs.largestNumber(array);
            expect(largest).toBe(5);
            expect(largest).not.toBe(1);
            expect(largest).not.toBe(array)
        })
    })
})

