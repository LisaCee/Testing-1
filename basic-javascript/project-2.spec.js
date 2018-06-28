const funcs = require('./project-2');

describe("Test all Project 2 functions", () => {

    it('Should compare and return largest variable passed', () => {
        const biggest = funcs.getBiggest(12, 10)
        expect(biggest).toBe(12)
    })

    it('Should return correct language greeting, based on language passed', () => {
        const german = funcs.greeting('German')
        expect(german).toBe('Guten Tag!')
    })

    it('Should boolean depending on if passed number is 10 or 5', () => {
        const ten = funcs.isTenOrFive(10)
        expect(ten).toBe(true)
    })

    it('Should boolean depending on if passed number is 10 or 5', () => {
        const five = funcs.isTenOrFive(5)
        expect(five).toBe(true)
    })

    it('Should boolean depending on if passed number is 10 or 5', () => {
        const ten = funcs.isTenOrFive(4)
        expect(ten).toBe(false)
    })

    it('Should return boolean depending on if number passed is between 20 and 50', () => {
        const thirty = funcs.isInRange(30)
        expect(thirty).toBe(true)
    })

    it('Should return boolean depending on if number passed is between 20 and 50', () => {
        const ten = funcs.isInRange(10)
        expect(ten).toBe(false)
    })

    it('Should return boolean if number is an integer', () => {
        const number = funcs.isInteger(3.14)
        expect(number).toBe(false)
    })

    it('Should return boolean if number is an integer', () => {
        const number = funcs.isInteger(3)
        expect(number).toBe(true)
    })

    it('Should return fizzbuzz if number is divisible by 5 and 3, buzz if divisible by 5, and fizz if divisible by 3 ', () => {
        const fiveAndThree = funcs.fizzBuzz(15)
        expect(fiveAndThree).toBe('fizzbuzz')
    })

    it('Should return fizzbuzz if number is divisible by 5 and 3, buzz if divisible by 5, and fizz if divisible by 3 ', () => {
        const twenty = funcs.fizzBuzz(20)
        expect(twenty).toBe('buzz')
    })

    it('Should return fizzbuzz if number is divisible by 5 and 3, buzz if divisible by 5, and fizz if divisible by 3 ', () => {
        const three = funcs.fizzBuzz(9)
        expect(three).toBe('fizz')
    })

    it('Should return boolean if number is prime or not', () => {
        const seventeen = funcs.isPrime(17)
        expect(seventeen).toBe(true)
    })

    it('Should return boolean if number is prime or not', () => {
        const nine = funcs.isPrime(9)
        expect(nine).toBe(false)
    })

    it('Should return first item within an array', () => {
        const hobbits = ['Frodo', 'Meriadoc', 'Pippin', 'Bilbo']
        const first = funcs.returnFirst(hobbits)
        expect(first).toBe('Frodo')
    })

    it('Should return last item within an array', () => {
        const hobbits = ['Frodo', 'Meriadoc', 'Pippin', 'Bilbo']
        const last = funcs.returnLast(hobbits)
        expect(last).toBe('Bilbo')
    })

    it('Should return array length', () => {
        const hobbits = ['Frodo', 'Meriadoc', 'Pippin', 'Bilbo']
        const length = funcs.getArrayLength(hobbits)
        expect(length).toBe(4)
    })

    it('Should return increment array integer by 1', () => {
        const nums = [10, 20, 30, 40]
        const increment = funcs.incrementByOne(nums)
        expect(increment).toEqual([11, 21, 31, 41])
    })

    it('Should add item to end of array', () => {
        const hobbits = ['Frodo', 'Meriadoc', 'Pippin', 'Bilbo']
        const addEnd = funcs.addItemToArray(hobbits, 'Samwise')
        expect(addEnd).toEqual(['Frodo', 'Meriadoc', 'Pippin', 'Bilbo', 'Samwise'])
    })

    it('Should add item to beginning of array', () => {
        const hobbits = ['Frodo', 'Meriadoc', 'Pippin', 'Bilbo']
        const addFront = funcs.addItemToFront(hobbits, 'Samwise')
        expect(addFront).toEqual(['Samwise', 'Frodo', 'Meriadoc', 'Pippin', 'Bilbo'] )
    })

    it('Should convert array of words into a sentence', () => {
        const oneRing = ['one', 'ring', 'to', 'rule', 'them', 'all,', 'one', 'ring', 'to', 'find', 'them,', 'one', 'ring', 'to', 'bring', 'them', 'all,', 'and', 'in', 'the', 'darkness', 'bind', 'them']
        const sentence = funcs.wordsToSentence(oneRing)
        expect(sentence).toEqual('one ring to rule them all, one ring to find them, one ring to bring them all, and in the darkness bind them')
    })
    
    it('Should return a boolean if passed item is contained within passed array', () => {
        const hobbits = ['Frodo', 'Meriadoc', 'Pippin', 'Bilbo']
        const contains = funcs.contains(hobbits, 'Bilbo')
        expect(contains).toBe(true)
    })
    
    it('Should return the sum of all numbers included in passed number array', () => {
        const numbers = [10, 20, 30, 40]
        const sumOfNumbers = funcs.addNumbers(numbers)
        expect(sumOfNumbers).toBe(100)
    })
    
    it('Should return the average of all tests scores contained within array', () => {
        const testScores = [85, 90, 95, 95]
        const average = funcs.averageTestScore(testScores)
        expect(average).toBe(91.25)
    })
    
    it('Should return the biggest integer within number array', () => {
        const numbers = [85, 90, 95, 100, 165, 1, 75, 35]
        const biggest = funcs.largestNumber(numbers)
        expect(biggest).toBe(165)
    })

})

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
