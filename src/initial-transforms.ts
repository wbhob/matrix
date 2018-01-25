import { MatrixInput } from './types';
import { NestedArray } from './types';

export function checkMatrixValidity(matrix: NestedArray<number>): boolean {
    let rowLength = matrix[0].length;
    matrix.forEach((row, index) => {
        if (row.length != rowLength) {
            throw new Error('Row ' + (index + 1) + ' has a mismatched length within the matrix. Expected: ' + rowLength + '. Got: ' + row.length);
        }
    });
    return true;
}

export function transformSimpleArray(matrix: MatrixInput): NestedArray<number> {
    let isComplexMatrix: boolean = Array.isArray(matrix[0]);

    matrix.forEach((row, index) => {
        if (Array.isArray(row) != isComplexMatrix) {
            throw new Error('The formats of your matrix entries are not the same. The first row is ' +
                (isComplexMatrix ? '' : 'not ') + 'an array, but the entry in row ' + (index + 1) + (isComplexMatrix ? ' is not.' : ' is.'));
        }
    });

    if (!isComplexMatrix) {
        matrix = matrix.map((i: number) => [i]);
    }

    return matrix as NestedArray<number>;
}
