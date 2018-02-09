import { Matrix } from '../matrix';
import { NestedArray } from '../types';

export class IdentityMatrix extends Matrix {
    constructor(size: number) {
        const matrix: NestedArray<number> = [];
        for (let i = 0; i < size; i++) {
            matrix[i] = [];
            for (let j = 0; j < size; j++) {
                if (i == j) {
                    matrix[i][j] = 1;
                } else {
                    matrix[i][j] = 0;
                }
            }
        }
        super(matrix);
    }
}