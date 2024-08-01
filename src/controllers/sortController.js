// src/controllers/sortController.js
const { mergeSort } = require('../algorithms/mergeSort');
const { quickSort } = require('../algorithms/quickSort');
const { bubbleSort } = require('../algorithms/bubbleSort');

const sortArray = (req, res) => {
    const { array, algorithm } = req.body;

    if (!Array.isArray(array)) {
        return res.status(400).json({ error: 'Invalid input, array is required' });
    }

    let sortedArray;
    if (algorithm === 'mergeSort') {
        sortedArray = mergeSort(array);
    } else if (algorithm === 'quickSort') {
        sortedArray = quickSort(array);
    } else if (algorithm === 'bubbleSort') {
        sortedArray = bubbleSort(array);
    } else {
        return res.status(400).json({ error: 'Invalid sorting algorithm specified' });
    }

    return res.status(200).json({ sortedArray });
};

module.exports = {
    sortArray
};
