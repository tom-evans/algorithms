// Solution from ErichTo's youtube channel
const arr = [11, 13, -2, 4, 5, 7, 8, 10];

const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        let am_big = arr[mid] >= arr[0]; // We're looking at something bigger than the start of the array
        let target_big = target >= arr[0]; // The target is bigger than the start of the array

        if (array[mid] === target) {
            return mid;
        } else if (am_big === target_big) {
            // We're in a standard increasing section
            if (target < array[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (am_big) {
            // Shift interferring
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

console.log(binarySearch(arr, -2));
