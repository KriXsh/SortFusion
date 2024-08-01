// test/mergeSort.test.js
const { mergeSort } = require('../src/algorithms/mergeSort');
const assert = require('assert');

describe('Merge Sort', () => {
    it('should sort an array of numbers', () => {
        const input = [5, 3, 8, 4, 2];
        const expectedOutput = [2, 3, 4, 5, 8];
        assert.deepStrictEqual(mergeSort(input), expectedOutput);
    });

    it('should handle an empty array', () => {
        const input = [];
        const expectedOutput = [];
        assert.deepStrictEqual(mergeSort(input), expectedOutput);
    });

    it('should handle an array with one element', () => {
        const input = [1];
        const expectedOutput = [1];
        assert.deepStrictEqual(mergeSort(input), expectedOutput);
    });
});
