let output;

function populateArray() {
    const arr = [];
    const min = -5;
    const max = 20;

    for (let index = 0; index < 10; index++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }

    return arr;
}

export function initialiseQS() {
    const arr = populateArray();
    const iteration = 0;

    console.log(`Working array is: ${arr}`);
    quickSort(arr, 0, arr.length - 1, iteration);
    console.log(`Sorted! \n Output: ${output}`);
}

function quickSort(arr, left, right, iteration) {
    if (left >= right) {
        output = arr;
        return;
    }
    const split = partition(arr, left, right);
    iteration++;

    quickSort(arr, left, split - 1, iteration);
    quickSort(arr, split + 1, right, iteration);
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
