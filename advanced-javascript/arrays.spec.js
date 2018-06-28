const arrayFunctions = require('./arrays');
const mockCallback = jest.fn()

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe('Arrays', () => {
  describe('map', () => {
    it('should be a function', () => {
      const map = arrayFunctions.map;
      expect(typeof map).toBe('function');
    });
    it('should return an array', () => {
      const func = jest.fn()
      const creatures = ['hobbits', 'humans', 'orcs']
      const mapArray = arrayFunctions.map(creatures, func)
      expect(typeof mapArray).toBe('object')
    })

    describe('map', () => {
      it('Should take an array of items and create a new array of objects with provided function applied to each item.', () => {
      const hobbits = ['Frodo', 'Bilbo', 'Meriadoc', 'Pippin', 'Smeagol']
      const func = (str) => {
        return(str += ' of the Shire');
      }
      const map = arrayFunctions.map(hobbits, func)
      expect(map).toEqual([
      'Frodo of the Shire',
      'Bilbo of the Shire',
      'Meriadoc of the Shire',
      'Pippin of the Shire',
      'Smeagol of the Shire' ])
      })
    })
  });

  describe('each', () => {
    it('should be a function', () => {
      const each = arrayFunctions.each;
      expect(typeof each).toBe('function');
    });
    it('should loop for each item in the array', () => {
      arrayFunctions.each(['Frodo', 'Bilbo', 'Meriadoc'], mockCallback)
      expect(mockCallback.mock.calls.length).toBe(3)
    });
  });

  describe('reduce', () => {
    it('should be a function', () => {
      const reduce = arrayFunctions.reduce;
      expect(typeof reduce).toBe('function');
    });
  });

  describe('find', () => {
    it('should be a function', () => {
      const find = arrayFunctions.find;
      expect(typeof find).toBe('function');
    });
  });

  describe('filter', () => {
    it('should be a function', () => {
      const filter = arrayFunctions.filter;
      expect(typeof filter).toBe('function');
    });
  });

  describe('flatten', () => {
    it('should be a function', () => {
      const flatten = arrayFunctions.flatten;
      expect(typeof flatten).toBe('function');
    });
  });
});
