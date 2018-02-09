import { NestedArray } from '../types';

export const isDiagonal = (matrix: NestedArray<number>): boolean => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i != j && matrix[i][j] != 0) {
                return false;
            }
        }
    }

    return true;
};
