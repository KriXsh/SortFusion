// src/algorithms/heapSort.js
const heapSort = (array) => {
    let n = array.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i >= 0; i--) {
        // Move current root to end
        [array[0], array[i]] = [array[i], array[0]];

        // call max heapify on the reduced heap
        heapify(array, i, 0);
    }
    return array;
}

// To heapify a subtree rooted with node i which is an index in array[]. n is size of heap
const heapify = (array, n, i) => {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left = 2*i + 1
    let right = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest != i) {
        [array[i], array[largest]] = [array[largest], array[i]];

        // Recursively heapify the affected sub-tree
        heapify(array, n, largest);
    }
}

module.exports = {
    heapSort
};
