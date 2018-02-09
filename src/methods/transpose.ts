import { isSquare } from '../getters/is-square';
import { NestedArray } from '../types';

export const transpose = (matrix: NestedArray<number>): NestedArray<number> => {
    if (!isSquare(matrix)) {
        throw new Error('Attempted to transpose a non-square matrix.');
    }
    const returnMatrix: NestedArray<number> = [];
    for (let i = 0; i < matrix.length; i++) {
        returnMatrix[i] = [];
        for (let j = 0; j < matrix[0].length; j++) {
            returnMatrix[i][j] = matrix[j][i];
        }
    }

    return returnMatrix;
};
