// test/quickSort.test.js
const { quickSort } = require('../src/algorithms');

test('sorts an array of numbers', () => {
    const array = [3, 6, 8, 10, 1, 2, 1];
    const sortedArray = quickSort(array);
    expect(sortedArray).toEqual([1, 1, 2, 3, 6, 8, 10]);
});
