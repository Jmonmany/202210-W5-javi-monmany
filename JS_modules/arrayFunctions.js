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
