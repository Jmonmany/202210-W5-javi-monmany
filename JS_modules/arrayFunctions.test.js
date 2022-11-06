import arrayLength from './functionLength.js';

const cases = [5, 'Hello', false, NaN, null, 38, true, undefined];

describe('Given arrayLength function', () => {
    test(`The length of the given array is %i`, () => {
        const expected = cases.length;
        const result = arrayLength(cases);
        expect(result).toBe(expected);
    });
});
