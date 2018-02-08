import { Matrix } from "../matrix";

export class IdentityMatrix extends Matrix {
    constructor(size: number) {
        let matrix = [];
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