import { initialiseQS } from './quickSort.js';
import { removeDuplicates } from './common/generateParams.js';

// Solution from ErichTo's youtube channel

export function initialiseBinarySearch() {
    const array = removeDuplicates(initialiseQS(false));
    const target = array[Math.floor(Math.random() * array.length)];

    console.log(`Our array looks like: ${array}`);
    console.log(`Our target will be: ${target}`);

    const indexOfTarget = binarySearch(array, target);

    if (indexOfTarget > 0) {
        console.log(`Found our target at index ${indexOfTarget}`);
    } else {
        console.log('Target does not exist in array');
    }
}

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        const amBig = array[mid] >= array[0]; // We're looking at something bigger than the start of the array
        const targetBig = target >= array[0]; // The target is bigger than the start of the array

        if (array[mid] === target) {
            return mid;
        } else if (amBig === targetBig) {
            // We're in a standard increasing section
            if (target < array[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else if (amBig) {
            // Shift interferring
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
