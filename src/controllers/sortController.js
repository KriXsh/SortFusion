// src/controllers/sortController.js
const { mergeSort, quickSort, bubbleSort, selectionSort, insertionSort, heapSort, treeSort } = require('../algorithms');

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
        case 'heapSort':
            sortedArray = heapSort(array);
        case 'insertionSort':
            sortedArray = insertionSort(array);
        case 'treeSort':
            sortedArray = treeSort(array);
            break;
        default:
            return res.status(400).json({code : 400, message: 'Invalid sorting algorithm specified' });
    }

    return res.status(200).json({code:200,message: "Array Sort SucessFully", sortedArray });
};

module.exports = {
    sortArray
};
