export function arrayLength(arr) {
    let i = 0;

    while (
        arr[i] !== undefined ||
        (arr[i] === undefined && arr[i + 1] !== undefined)
    ) {
        i++;
    }
    return i;
}

export function arrayPush(nativeArray, extraElement) {
    nativeArray[arrayLength(nativeArray)] = extraElement;
    return arrayLength(nativeArray);
}

export function arrayPop(nativeArray) {
    if (arrayLength(nativeArray) === 0) {
        return undefined;
    }
    const lastElement = nativeArray[arrayLength(nativeArray) - 1];

    for (let i = 0; i <= arrayLength(nativeArray) - 1; i++) {
        if (i === arrayLength(nativeArray) - 1) {
            delete nativeArray[i];
        }
    }
    console.log(nativeArray);
    return lastElement;
}
console.log(
    arrayPop([6, 'Hello', false, 'Present', NaN, 17, undefined, null, 38])
);
