const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {

  describe('each', ()=> {
    it('typeofEach', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function'); 
    })


    
    //expect(arrayFunctions.each([1, 2, 3, 4])).toEqual()
  })



  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function')
    });

    it('shouldMapElements', () => {
      expect(arrayFunctions.map([1, 2, 3], n =>  n * 2  ))
      .toEqual([2, 4, 6])
    })


  });

  describe('reduce', () => {
    const reduce = arrayFunctions.reduce; 
    
    it('reduceShouldBeAFunc', () => {
      expect(typeof reduce).toBe('function');
    })

    it('doesReduceWork', () => {
      expect(reduce([1, 2, 3], (acc, val) => {
       return acc + val 
      } )).toEqual(6);
    })
    
  })

  describe('find', () => {
    const find = arrayFunctions.find;
    it('findIsFunc', () => {
      expect(typeof find).toBe('function')
    })
    it('findWorks', () => {
      expect(find(["orange1", 2, 3], item => item === "orange1" ))
      .toEqual("orange1");
    })

  })

  describe('filter', () => {
    const filter = arrayFunctions.filter;
    it('filterShouldBeFunc', () => {
      expect(typeof filter).toBe('function');
    })

    it('filterWorks', () => {
      expect(filter([1, 2, 3, 4], num => num > 2 )).toEqual([3, 4])
    })

  })
  
  describe('flatten', () => {
    const flatten = arrayFunctions.flatten;
    it('flattenIsAFunction', () => {
      expect(typeof flatten).toBe('function');
    })

    it('flattenWorks', () => {
      expect(flatten([1, 2, [1, 6, [10]]], (acc, val) => acc.concat(val), [])).toEqual([1 ,2,1,6,10])
    })



  })


});
