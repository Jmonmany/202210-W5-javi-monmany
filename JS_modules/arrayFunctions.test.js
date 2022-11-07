import { arrayLength, arrayPush, arrayPop, arraySome } from './arrayFunctions';

const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
// const joinCases = ['','-',', ']
const extraElement = 50;
// const includedElement = 'Present';
const even = (element) => element % 2 === 0;

describe('Given arrayLength function', () => {
    test(`The length of the given array should be ${cases.length}`, () => {
        const expected = cases.length;
        const result = arrayLength(cases);
        expect(result).toBe(expected);
    });
});

describe('Given arrayPush function', () => {
    const localArray = cases;
    test(`Should return ${arrayLength(localArray) + 1}`, () => {
        const expected = arrayLength(localArray) + 1;
        const result = arrayPush(localArray, extraElement);
        expect(result).toBe(expected);
    });
    test(`The following array should be ${localArray}`, () => {
        const expected = [
            6,
            'Hello',
            false,
            'Present',
            NaN,
            17,
            undefined,
            null,
            38,
            50,
        ];
        const result = localArray;
        expect(result).toEqual(expected);
    });
});

describe('Given arrayPop function', () => {
    const localArray = cases;

    test(`Should return 50`, () => {
        const expected = 50;
        const result = arrayPop(localArray);
        expect(result).toBe(expected);
    });
    test(`The following array should be ${localArray}`, () => {
        const expected = [
            6,
            'Hello',
            false,
            'Present',
            NaN,
            17,
            undefined,
            null,
            38,
        ];
        const result = localArray;
        expect(result).toEqual(expected);
        expect();
    });
});

// describe('Given arrayShift function', () => {
//     test(`The following array should be ${cases.shift()}`, () => {
//         const expected = cases.shift();
//         const result = arrayShift(cases);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given arrayUnshift function', () => {
//     test(`The following array should be ${cases.unshift()}`, () => {
//         const expected = cases.unshift(extraElement);
//         const result = arrayUnshift(cases);
//         expect(result).toBe(expected);
//     });
// });

describe('Given arraySome function', () => {
    test(`The result should be ${cases.some(even)}`, () => {
        const expected = cases.some(even);
        const result = arraySome(cases, even);
        expect(result).toBe(expected);
    });
});

// describe('Given arrayEvery function', () => {
//     test(`The result should be ${cases.every(even)}`, () => {
//         const expected = cases.every(even);
//         const result = arrayEvery(cases, even);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given arrayFind function', () => {
//     test(`The result should be ${cases.find(even)}`, () => {
//         const expected = cases.find(even);
//         const result = arrayFind(cases, even);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given arrayFilter function', () => {
//     test(`The following array should be ${cases.filter(even)}`, () => {
//         const expected = cases.filter(even);
//         const result = arrayFilter(cases, even);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given arrayMap function', () => {
//     test(`The following array should be ${cases.map(even)}`, () => {
//         const expected = cases.map(even);
//         const result = arrayMap(cases, even);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given arrayFindIndex function', () => {
//     test(`The Position of the following value on the given array should be ${cases.findIndex(
//         even
//     )}`, () => {
//         const expected = cases.findIndex(even);
//         const result = arrayFindIndex(cases, even);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given arrayIncludes function', () => {
//     test(`The result should be ${cases.includes(extraElement)}`, () => {
//         const expected = cases.includes(extraElement);
//         const result = arrayIncludes(cases, extraElement);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given arrayIndexOf function', () => {
//     test(`The result should be ${cases.indexOf(includedElement)}`, () => {
//         const expected = cases.indexOf(includedElement);
//         const result = arrayIndexOf(cases, includedElement);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given arrayReduce function', () => {
//     test(`The result should be ${cases.reduce(
//         (previousValue, currentValue) => previousValue + currentValue,
//         0
//     )}`, () => {
//         const expected = cases.reduce(
//             (previousValue, currentValue) => previousValue + currentValue,
//             0
//         );
//         const result = arrayReduce(cases);
//         expect(result).toBe(expected);
//     });
// });
// describe('Given arrayJoin function', () => {
//     test.each(joinCases)(`The string should be %p}`, (value) => {
//         const expected = cases.join(value);
//         const result = arrayJoin(cases, value);
//         expect(result).toBe(expected);
//     });
// });
