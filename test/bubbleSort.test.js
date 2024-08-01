// test/bubbleSort.test.js
const { bubbleSort } = require('../src/algorithms/bubbleSort');
const assert = require('assert');

describe('Bubble Sort', () => {
    it('should sort the array in ascending order', () => {
        assert.deepStrictEqual(bubbleSort([3, 2, 1]), [1, 2, 3]);
        assert.deepStrictEqual(bubbleSort([5, 1, 4, 2, 8]), [1, 2, 4, 5, 8]);
        assert.deepStrictEqual(bubbleSort([3, 0, 2, 5, -1, 4, 1]), [-1, 0, 1, 2, 3, 4, 5]);
    });
});
