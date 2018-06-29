const objectFunctions = require('./objects');
const testObj = {
  'Maximus': 'Crowe',
  'Arthur': 'Owen',
  'Achilles': 'Pitt',
  'Alexander': 'Farrell',
  'Leonidas': 'Butler',
  'Ned': 'Bean'
}

// // whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('object keys', () => {
    it('should return an object', () => {
      const keys = objectFunctions.keys(testObj)
      expect(typeof keys).toBe('object')
    });
    it('should be an array of keys', () => {
      const keys = objectFunctions.keys(testObj)
      expect(keys).toEqual([ 'Maximus', 'Arthur', 'Achilles', 'Alexander', 'Leonidas', 'Ned' ])
    });
  });

  describe('object values', () => {
    it('should return an object', () => {
      const values = objectFunctions.values(testObj)
      expect(typeof values).toBe('object')
    });
    it('should be an array of values', () => {
      const values = objectFunctions.values(testObj)
      expect(values).toEqual(['Crowe', 'Owen', 'Pitt', 'Farrell', 'Butler', 'Bean'])
    })
  })

  describe('map Object', () => {
    const mockCallback = jest.fn()
    it('should return an object', () => {
      const newObj = objectFunctions.mapObject(testObj, mockCallback)
      expect(typeof newObj).toBe('object')
    })
    it.skip('should map over passed object and return a new one', () => {
      const newObj = objectFunctions.mapObject(testObj, mockCallback)
      console.log(newObj)
      expect(newObj).toBe({  
      'Maximus': 'Crowe',
      'Arthur': 'Owen',
      'Achilles': 'Pitt',
      'Alexander': 'Farrell',
      'Leonidas': 'Butler',
      'Ned': 'Bean'
      })
    })
  })

  describe('pairs', () => {
    it('should return an object', () => {
      const pairs = objectFunctions.pairs(testObj)
      expect(typeof pairs).toBe('object')
    });
    it.skip('should return key value pairs', () => {
      const pairs = objectFunctions.pairs(testObj)
      // expect(pairs).toEqual()
    })
  })

  describe('pairs', () => {
    it('should return an object', () => {
      const invert = objectFunctions.invert(testObj)
      console.log(invert)
      expect(typeof invert).toBe('object')
    });
    it.skip('should invert object; assigning keys to properties and properties to keys', () => {
      const invert = objectFunctions.invert(testObj)
      // expect(invert).toEqual()
    })
  })

});

