const funcs = require('./project-2');

describe("project-2 tests", () => {

    describe('getBiggest', () => {
        it('should get biggest x if it larger than y', () => {
            expect(funcs.getBiggest(1, 2)).toEqual(2);
        })
        it('should return x if x = y', () => {
            expect(funcs.getBiggest(1, 1)).toEqual(1);
        })
    })

    describe('greeting', () => {
        it('return Guten Tag! for German', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!')
        })
        it('return Hola! for Spanish', () => {
            expect(funcs.greeting('Spanish')).toBe('Hola!')
        })
        it('return Hello is no argument is passed', () => {
            expect(funcs.greeting(undefined)).toBe('Hello!')
        })
    })

    describe('isTenOrFive', () => {
        it('should get biggest x if it larger than y', () => {
            expect(funcs.getBiggest(1, 2)).toEqual(2);
        })
        it('should return x if x = y', () => {
            expect(funcs.getBiggest(1, 1)).toEqual(1);
        })
    })
    

})

