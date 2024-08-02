const Joi = require('joi');

const sortSchema = Joi.object({
    array: Joi.array()
        .items(Joi.number().required().messages({
            'number.base': 'Array must contain numbers only.',
            'any.required': 'Array must not contain empty items.'
        }))
        .required()
        .messages({
            'array.base': 'Array is required and must be of type array.',
            'array.includes': 'Array must contain numbers only.'
        }),
    algorithm: Joi.string()
        .valid('mergeSort', 'quickSort', 'bubbleSort', 'selectionSort', 'heapSort', 'insertionSort', 'treeSort')
        .required()
        .messages({
            'any.only': 'Invalid sorting algorithm specified. Valid options are: mergeSort, quickSort, bubbleSort, selectionSort, heapSort, insertionSort, treeSort.',
            'any.required': 'Algorithm is required and must be one of the specified values.'
        })
});

module.exports = {
    sortSchema
};
