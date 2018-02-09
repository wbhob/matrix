import { Matrix } from '../matrix';
import { NestedArray } from '../types';

export class ZeroMatrix extends Matrix {
    constructor(rows: number, columns: number) {
        const matrix: NestedArray<number> = [];
        for (let i = 1; i <= rows; i++) {
            matrix[i - 1] = [];
            for (let j = 1; j <= columns; j++) {
                matrix[i - 1][j - 1] = 0;
            }
        }
        super(matrix);
    }
}