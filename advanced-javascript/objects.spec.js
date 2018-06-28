const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  
  
  describe('keys', () => {
    it('should be an keys', () => {
      const keys = objectFunctions.keys;
      expect(keys({key1: 1, key2: 2, key3: 3})).toEqual(["key1", "key2", "key3"])
    });
  })
  describe('values',() =>{
    it('valuesSouldWork', () => {
      const values = objectFunctions.values
      expect(values({key1: 1, key2: 2, key3: 3})).toEqual([1, 2, 3])
    })
  })

  describe('mapObject', () => {
    it('mapObjectShouldWork', () => {
      const mapObject = objectFunctions.mapObject
      expect(mapObject({key1: 1, key2: 2, key3: 3}, num =>  num * 2 )).toEqual({key1: 2, key2: 4, key3: 6})
    })
  }),

  describe('pairs', () => {
    it('pairsShouldWork', () => {
      const pairs = objectFunctions.pairs;
      expect(pairs({key1: 1, key2: 2, key3: 3})).toEqual([["key1", 1], ["key2", 2], ["key3", 3] ])
    })
  })
  
  describe('invert',() => {
    it('invertShouldWork', () => {
      const invert = objectFunctions.invert;

      expect(invert({key1: 1, key2: 2, key3: 3})).toEqual({1: "key1", 2: "key2", 3: "key3"})
    })
  })
  describe('defaults', () => {
    it('defaultShouldWork', () => {
      const defaults = objectFunctions.defaults
      expect(defaults({key1: 1, key2: 2, key3: 3},{key1: 1, key2: 4, key3: 3, key4: 4})).toEqual({key1: 1, key2: 2, key3: 3, key4:4})
    })
  })

});

