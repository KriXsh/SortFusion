// src/controllers/sortController.js
const { mergeSort, quickSort, bubbleSort, selectionSort } = require('../algorithms');

const sortArray = (req, res) => {
    const { array, algorithm } = req.body;

    if (!Array.isArray(array)) {
        return res.status(400).json({ error: 'Invalid input, array is required' });
    }

    let sortedArray;
    switch (algorithm) {
        case 'mergeSort':
            sortedArray = mergeSort(array);
            break;
        case 'quickSort':
            sortedArray = quickSort(array);
            break;
        case 'bubbleSort':
            sortedArray = bubbleSort(array);
            break;
        case 'selectionSort':
            sortedArray = selectionSort(array);
            break;
        default:
            return res.status(400).json({ error: 'Invalid sorting algorithm specified' });
    }

    return res.status(200).json({ sortedArray });
};

module.exports = {
    sortArray
};
