// %p - pretty-format.
// %s- String.
// %d- Number.
// %i - Integer.
// %f - Floating point value.
// %j - JSON.
// %o - Object.
// %# - Index of the test case.
// %% - single percent sign ('%'). This does not consume an argument

import { arrayLength } from './arrayFunctions';

const cases = [5, 'Hello', false, NaN, null, 38, true];
 // const extraCase = 50;

describe('Given arrayLength function', () => {
    test('The length of the given array should be 7', () => {
        const expected = cases.length;
        const result = arrayLength(cases);
        expect(result).toBe(expected);
    });
});

// describe('Given arrayPush function', () => {
//     test(`The following array should be ${cases.push(extraCase)}`, () => {
//         const expected = cases.push(extraCase);
//         const result = cases.arrayPush(extraCase);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given arrayPop function', () => {
//     test(`The following array should be ${cases.pop()}`, () => {
//         const expected = cases.length;
//         const result = arrayLength(cases);
//         expect(result).toBe(expected);
//     });
// });
