import {
    arrayLength,
    arrayPush,
    arrayPop,
    arrayUnshift,
    arrayShift,
    arraySome,
    arrayEvery,
    arrayFind,
    arrayFilter,
    arrayMap,
    arrayFindIndex,
    arrayIncludes,
    arrayIndexOf,
    arrayReduce,
    arrayJoin,
} from './arrayFunctions';

const joinCases = ['-', ', '];
const extraElement = 50;
const includedElement = 'Present';
const even = (element) => element % 2 === 0;
const double = (element) => element * 2;

describe('Given arrayLength function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    test(`The length of the given array should be ${cases.length}`, () => {
        const expected = cases.length;
        const result = arrayLength(cases);
        expect(result).toBe(expected);
    });
});

describe('Given arrayPush function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    const modifiedArray = [
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
    test(`Should return ${arrayLength(cases) + 1}`, () => {
        const expected = arrayLength(cases) + 1;
        const result = arrayPush(cases, extraElement);
        expect(result).toBe(expected);
    });
    test(`The following array should be ${modifiedArray}`, () => {
        const expected = modifiedArray;
        const result = cases;
        expect(result).toEqual(expected);
    });
});

describe('Given arrayPop function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    const modifiedArray = [
        6,
        'Hello',
        false,
        'Present',
        NaN,
        17,
        undefined,
        null,
    ];
    test(`Should return ${cases[arrayLength(cases) - 1]}`, () => {
        const expected = cases[arrayLength(cases) - 1];
        const result = arrayPop(cases);
        expect(result).toBe(expected);
    });
    test(`The following array should be ${modifiedArray}`, () => {
        const expected = modifiedArray;
        const result = cases;
        expect(result).toEqual(expected);
    });
    test(`The result should be 0`, () => {
        const expected = 0;
        const result = 0;
        expect(result).toEqual(expected);
    });
});

describe('Given arrayUnshift function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    const modifiedArray = [
        50,
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
    test(`Should return ${arrayLength(cases) + 1}`, () => {
        const expected = arrayLength(cases) + 1;
        const result = arrayUnshift(cases, extraElement);
        expect(result).toBe(expected);
    });
    test(`The following array should be ${modifiedArray}`, () => {
        const expected = modifiedArray;
        const result = cases;
        expect(result).toEqual(expected);
        expect();
    });
});

describe('Given arrayShift function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    const modifiedArray = [
        'Hello',
        false,
        'Present',
        NaN,
        17,
        undefined,
        null,
        38,
    ];
    test(`Should return ${cases[0]}`, () => {
        const expected = cases[0];
        const result = arrayShift(cases);
        expect(result).toBe(expected);
    });
    test(`The following array should be ${modifiedArray}`, () => {
        const expected = modifiedArray;
        const result = cases;
        expect(result).toEqual(expected);
        expect();
    });
});

describe('Given arraySome function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    const toFail = (element) => element === 'Fail';
    test(`The result should be ${cases.some(even)}`, () => {
        const expected = cases.some(even);
        const result = arraySome(cases, even);
        expect(result).toBe(expected);
    });
    test(`The result should be ${cases.some(toFail)}`, () => {
        const expected = cases.some(toFail);
        const result = arraySome(cases, toFail);
        expect(result).toBe(expected);
    });
});

describe('Given arrayEvery function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    const cases2 = [6, 6, 6, 6, 6, 6, 6];
    test(`The result should be ${cases.every(even)}`, () => {
        const expected = cases.every(even);
        const result = arrayEvery(cases, even);
        expect(result).toBe(expected);
    });
    test(`The result should be ${cases2.every(even)}`, () => {
        const expected2 = cases2.every(even);
        const result2 = arrayEvery(cases2, even);
        expect(result2).toBe(expected2);
    });
});

describe('Given arrayFind function', () => {
    const cases = [6, 'Hello', 'Present', NaN, 17, undefined, null, 38];
    test(`The result should be ${cases.find(even)}`, () => {
        const expected = cases.find(even);
        const result = arrayFind(cases, even);
        expect(result).toBe(expected);
    });
});

describe('Given arrayFilter function', () => {
    const cases = [6, 'Hello', 'Present', NaN, 17, undefined, null, 38];
    test(`The following array should be ${cases.filter(even)}`, () => {
        const expected = cases.filter(even);
        const result = arrayFilter(cases, even);
        expect(result).toEqual(expected);
    });
});

describe('Given arrayMap function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    test(`The following array should be ${cases.map(double)}`, () => {
        const expected = cases.map(double);
        const result = arrayMap(cases, double);
        expect(result).toEqual(expected);
    });
});

describe('Given arrayFindIndex function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    const toFail = (element) => element === 'Fail';
    test(`The position of the following value on the given array should be ${cases.findIndex(
        even
    )}`, () => {
        const expected = cases.findIndex(even);
        const result = arrayFindIndex(cases, even);
        expect(result).toBe(expected);
    });
    test(`The position of the following value on the given array should be ${cases.findIndex(
        toFail
    )}`, () => {
        const expected = cases.findIndex(toFail);
        const result = arrayFindIndex(cases, toFail);
        expect(result).toBe(expected);
    });
});

describe('Given arrayIncludes function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    test(`The result should be ${cases.includes(extraElement)}`, () => {
        const expected = cases.includes(extraElement);
        const result = arrayIncludes(cases, extraElement);
        expect(result).toBe(expected);
    });
    test(`The result should be ${cases.includes(includedElement)}`, () => {
        const expected = cases.includes(includedElement);
        const result = arrayIncludes(cases, includedElement);
        expect(result).toBe(expected);
    });
});

describe('Given arrayIndexOf function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    const toFail = 'Fail';
    const index = 0;
    test(`The position of the following value on the given array should be ${cases.indexOf(
        includedElement
    )}`, () => {
        const expected = cases.indexOf(includedElement);
        const result = arrayIndexOf(cases, includedElement, index);
        expect(result).toBe(expected);
    });
    test(`The position of the following value on the given array should be ${cases.indexOf(
        toFail
    )}`, () => {
        const expected = cases.indexOf(toFail);
        const result = arrayIndexOf(cases, toFail);
        expect(result).toBe(expected);
    });
});

describe('Given arrayReduce function', () => {
    const cases = [1, 2, 3, 4];
    const initialValue = 0;
    const reduceCallback = (previousValue, currentValue) =>
        previousValue + currentValue;
    test(`The result should be ${cases.reduce(reduceCallback)}`, () => {
        const expected = cases.reduce(reduceCallback);
        const result = arrayReduce(cases, reduceCallback, initialValue);
        expect(result).toBe(expected);
    });
});

describe('Given arrayJoin function', () => {
    const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
    const specialCase = '';
    test.each(joinCases)(`The string should be %p`, (value) => {
        const expected = cases.join(value);
        const result = arrayJoin(cases, value);
        expect(result).toBe(expected);
    });
    test(`The string should be "6,Hello,false,Present,NaN,17,,,38"`, () => {
        const expected = '6,Hello,false,Present,NaN,17,,,38';
        const result = arrayJoin(cases, specialCase);
        expect(result).toBe(expected);
    });
});
