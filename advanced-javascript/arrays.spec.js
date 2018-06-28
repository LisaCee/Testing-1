const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

let array = [1, 2, 3];

describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map(array, (x) => { return x + 3 });
      expect(typeof map).toBe('object');
      expect(map).toEqual([4, 5, 6]);
    });
  });
  describe('reduce', () => {
    it('Should reduce an array to a single item', () => {
      const reduce = arrayFunctions.reduce(array, (acc, x) => { return acc + x })
      expect(reduce).toBe(6);
      expect(reduce).not.toBe(7);
      expect(typeof reduce).toEqual(typeof array[0])
    });
  });
  describe('find', () => {
    it('Should search an array for a given item', () => {
      const find = arrayFunctions.find(array, (x) => {
        return x > 2
      })
      expect(find).toBe(3);
      const notFind = arrayFunctions.find(array, (x) => {
        return x > 4
      })
      expect(notFind).toBe(undefined);
    })
  })
  describe('filter', () => {
    it('Should return an array of items that meet the given requirements', () => {
      const filter = arrayFunctions.filter(array, (x) => {
        return x > 1
      })
      expect(filter).toEqual([2, 3])
      const emptyFilter = arrayFunctions.filter(array, (x) => {
        return x > 4
      })
      expect(emptyFilter).toEqual([]);
    })
  })
  describe('flatten', () => {
    it('Should turn nested arrays into a single flattened array', () => {
      const flatten = arrayFunctions.flatten([1, [2, 3], [4, 5, [6]]])
      expect(flatten).toEqual([1, 2, 3, 4, 5, 6]);
      expect(flatten).not.toEqual(undefined);
      const flatten1 = arrayFunctions.flatten([1, [2, 3], [4, 5, [6]]])
      expect(flatten1).not.toEqual([1, [2, 3], [4, 5]]);
    })
  })
});
