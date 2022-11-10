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
    const length = arrayLength(nativeArray) ? arrayLength(nativeArray) - 1 : 0;
    const lastElement = arrayLength(nativeArray)
        ? nativeArray[length]
        : undefined;
    Object.defineProperty(nativeArray, 'length', { value: length });
    return lastElement;

    // Old way
    // const lastElement = nativeArray[arrayLength(nativeArray) - 1];
    // nativeArray.arrayLength = nativeArray.arrayLength - 1;
    // for (let i = 0; i <= arrayLength(nativeArray) - 1; i++) {
    //      if (i === arrayLength(nativeArray) - 1) {
    //          delete nativeArray[i];
    //      }
    //  }

    // return lastElement;
}
export function arrayUnshift(nativeArray, ...elements) {
    for (let i = arrayLength(nativeArray) - 1; i >= 0; i--) {
        nativeArray[i + arrayLength(elements)] = nativeArray[i];
    }
    for (let i = 0; i < arrayLength(elements); i++) {
        nativeArray[i] = elements[i];
    }
    return arrayLength(nativeArray);
}
export function arrayShift(nativeArray) {
    const firstElement = nativeArray[0];
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

export function arrayEvery(nativeArray, callback) {
    let counter = 0;
    for (const element of nativeArray) {
        if (callback(element)) counter++;
        if (arrayLength(nativeArray) === counter) return true;
    }
    return false;
}
export function arrayFind(nativeArray, callback) {
    for (const element of nativeArray) {
        if (callback(element)) return element;
    }
}
export function arrayFilter(nativeArray, callback) {
    let filteredArray = [];
    for (const element of nativeArray) {
        if (callback(element)) arrayPush(filteredArray, element);
    }
    return filteredArray;
}

export function arrayMap(nativeArray, callback) {
    let filteredArray = [];
    for (const element of nativeArray) {
        let elementDoubled = callback(element);
        arrayPush(filteredArray, elementDoubled);
    }
    return filteredArray;
}
export function arrayFindIndex(nativeArray, callback) {
    let elementfound = arrayFind(nativeArray, callback);
    if (elementfound === undefined) return -1;
    for (let i = 0; i < arrayLength(nativeArray); i++) {
        if (nativeArray[i] === elementfound) return i;
    }
}
export function arrayIncludes(nativeArray, newElement) {
    for (const element of nativeArray) {
        if (element === newElement) return true;
    }
    return false;
}
export function arrayIndexOf(nativeArray, element, initialIndex) {
    for (let i = initialIndex; i < arrayLength(nativeArray); i++) {
        if (nativeArray[i] === element) return i;
    }
    return -1;
}
export function arrayReduce(nativeArray, callback, initialValue) {
    let result = initialValue;

    for (let i = 0; i < arrayLength(nativeArray); i++) {
        result = callback(result, nativeArray[i]);
    }
    return result;
}
export function arrayJoin(nativeArray, value) {
    let result = '';
    value = value === '' ? ',' : value;
    for (let i = 0; i < arrayLength(nativeArray); i++) {
        if (nativeArray[i] === undefined || nativeArray[i] === null) {
            nativeArray[i] = '';
        }
        if (i === arrayLength(nativeArray) - 1) {
            result += nativeArray[i];
            return result;
        }
        result += nativeArray[i] + value;
    }
}
