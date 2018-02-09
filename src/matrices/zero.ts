import { Matrix } from '../matrix';
import { NestedArray } from '../types';

export class ZeroMatrix extends Matrix {
    constructor(rows: number, columns: number) {
        const row: number[] = [0].fill(0, 0, columns - 1);
        const matrix = [[0]].fill(row, 0, rows - 1);
        super(matrix);
    }
}