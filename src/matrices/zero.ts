import { Matrix } from "../matrix";

export class IdentityMatrix extends Matrix {
    constructor(rows: number, columns: number) {
        let matrix = [];
        for (let i = 1; i <= rows; i++) {
            matrix[i - 1] = [];
            for (let j = 1; j <= columns; j++) {
                matrix[i - 1][j - 1] = 0;
            }
        }
        super(matrix);
    }
}