const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('Should return the greater of two numbers', () => {
    const two = funcs.getBiggest(2, 0);
    const thirty = funcs.getBiggest(15, 30);

    expect(two).toBeGreaterThan(0);
    expect(thirty).toBe(30)
})

it('Should return the correct language greeting', () => {
    
})

