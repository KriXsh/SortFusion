// src/algorithms/bubbleSort.js
const bubbleSort = (array) => {
    let n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return array;
};

module.exports = { bubbleSort };
