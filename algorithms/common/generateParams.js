function generateArray(length, min, max) {
    const arr = [];

    for (let index = 0; index < length; index++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }

    return arr;
}

function removeDuplicates(array) {
    const seen = {};

    return array.filter((item) =>
        Object.prototype.hasOwnProperty.call(seen, item)
            ? false
            : (seen[item] = true)
    );
}

export { generateArray, removeDuplicates };
