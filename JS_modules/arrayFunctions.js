export function arrayLength(arr) {
    let i = 0;

    while (arr[i] !== undefined) {
        i++;
    }
    return i;
}
