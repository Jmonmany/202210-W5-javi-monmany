export function arrayLength(nativeArray) {
    let length = 0;

    for (const element of nativeArray) {
        nativeArray[length] = element;
        length++;
    }
    return length;
}

export function arrayPush(nativeArray, extraElement) {
    nativeArray[arrayLength(nativeArray)] = extraElement;
    return arrayLength(nativeArray);
}

export function arrayPop(nativeArray) {
    if (arrayLength(nativeArray) === 0) return undefined;

    const lastElement = nativeArray[arrayLength(nativeArray) - 1];

    for (let i = 0; i <= arrayLength(nativeArray) - 1; i++) {
        if (i === arrayLength(nativeArray) - 1) {
            delete nativeArray[i];
        }
    }
    return lastElement;
}
export function arrayUnshift(nativeArray, newElement) {
    for (let i = arrayLength(nativeArray) - 1; i >= 0; i--) {
        nativeArray[i + 1] = nativeArray[i];
    }
    nativeArray[0] = newElement;
    return arrayLength(nativeArray);
}
export function arrayShift(nativeArray) {
    const firstElement = nativeArray[0];
    if (arrayLength(nativeArray) === 0) return undefined;

    for (let i = 0; i < arrayLength(nativeArray); i++) {
        nativeArray[i] = nativeArray[i + 1];
    }
    arrayPop(nativeArray);
    return firstElement;
}
export function arraySome(nativeArray, callback) {
    for (const element of nativeArray) {
        if (callback(element)) return true;
    }
    return false;
}
