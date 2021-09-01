import { initialiseQS } from './quickSort.js';
import { removeDuplicates } from './common/generateParams.js';

export function twoSum() {
    const array = removeDuplicates(initialiseQS(false));
    const target = array[Math.floor(Math.random() * array.length)];

    console.log(`Our array looks like: ${array}`);
    console.log(`Our target will be: ${target}`);

    let storage = {};

    for (let [index, num] of array.entries()) {
        if (storage[num] !== undefined) {
            console.log('Found pair at indexes: ' + [storage[num], index]);
            return;
        }
        storage[target - num] = index;
    }

    console.log('Failed to find a pair');
}
