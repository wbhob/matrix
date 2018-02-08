import { Matrix } from "../matrix";
import { NestedArray } from "../types";

export function multiply(matrix1: Matrix, matrix2: Matrix) {
    let newMatrix: NestedArray<number> = [];
    newMatrix[matrix1.rows] = [];
    if (matrix1.columns == matrix2.rows) {
        for (let i = 0; i < matrix1.rows; i++) {
            for (let j = 0; j < matrix2.columns; j++) {
                let sum = 0;
                for (let k = 0; k < matrix1.columns; k++) { }
                newMatrix[i][j] = matrix1.matrix;
            }
        }
    }
    return newMatrix;
}