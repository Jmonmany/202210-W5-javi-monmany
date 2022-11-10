import { functionArray } from './arrayFunctions.js';

const cases = [6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38];
const joinCases = ['-', ', '];
const extraElement = 50;
const includedElement = 'Present';
const even = (element) => element % 2 === 0;
const initialIndex = 0;
functionArray(
    cases,
    extraElement,
    even,
    includedElement,
    initialIndex,
    joinCases[0],
    extraElement
);

// try {
//     let n = -56;
//     console.log(methodsArray(n));
// } catch (error) {
//     console.log(error.message);
// }
