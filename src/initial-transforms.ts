import { MatrixInput, NestedArray } from './types';

export const checkMatrixValidity = (matrix: NestedArray<number>): boolean => {
    const rowLength = matrix[0].length;
    matrix.forEach((row, index) => {
        if (row.length != rowLength) {
            throw new Error('Row ' + (index + 1) + ' has a mismatched length within the matrix. Expected: ' + rowLength + '. Got: ' + row.length);
        }
    });

    return true;
};

export const transformSimpleArray = (matrix: MatrixInput): NestedArray<number> => {
    const isComplexMatrix: boolean = Array.isArray(matrix[0]);

    matrix.forEach((row, index) => {
        if (Array.isArray(row) != isComplexMatrix) {
            throw new Error('The formats of your matrix entries are not the same. The first row is ' +
                (isComplexMatrix ? '' : 'not ') + 'an array, but the entry in row ' + (index + 1) + (isComplexMatrix ? ' is not.' : ' is.'));
        }
    });

    let array: NestedArray<number>;

    if (!isComplexMatrix) {
        array = (matrix as number[]).map((i: number) => [i]);
    } else {
        array = matrix as NestedArray<number>;
    }

    return array;

};

