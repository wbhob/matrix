import { NestedArray } from '../types';

export const isSquare = (matrix: NestedArray<number>) => {
    return matrix.length == matrix[0].length;
};
