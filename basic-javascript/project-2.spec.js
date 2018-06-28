const funcs = require('./project-2');

describe("Test all Project 2 functions", () => {

    it('Should compare and return largest variable passed', () => {
        const biggest = funcs.getBiggest(12, 10)
        expect(biggest).toBe(12)
    })

})

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
