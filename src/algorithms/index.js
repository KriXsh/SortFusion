// src/algorithms/index.js
const { mergeSort } = require('./mergeSort');
const { quickSort } = require('./quickSort');
const { bubbleSort } = require('./bubbleSort');
const { selectionSort } = require('./selectionSort');
const { heapSort } = require('./heapSort');
const { insertionSort } = require('./insertionSort');
const { treeSort } = require('./treeSort');


module.exports = {
    mergeSort,
    quickSort,
    bubbleSort,
    selectionSort,
    heapSort,
    insertionSort,
    treeSort
};
