import { generateArray } from './common/generateParams.js';

let output;

export function initialiseQS(logs = true) {
    const arr = generateArray(10, -5, 20);
    const iteration = 0;

    quickSort(arr, 0, arr.length - 1, iteration);

    if (logs) {
        console.log(`Working array is: ${arr}`);
        console.log(`Sorted! \n Output: ${output}`);
    }

    return output;
}

function quickSort(arr, left, right) {
    if (left >= right) {
        output = arr;
        return;
    }
    const split = partition(arr, left, right);

    quickSort(arr, left, split - 1);
    quickSort(arr, split + 1, right);
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    let tempSpot;

    for (let j = left; j <= right - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            tempSpot = arr[i];
            arr[i] = arr[j];
            arr[j] = tempSpot;
        }
    }

    tempSpot = arr[i + 1];
    arr[i + 1] = arr[right];
    arr[right] = tempSpot;

    return i + 1;
}
