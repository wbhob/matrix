import { Matrix } from "../matrix";
import { NestedArray } from "../types";

export function multiply(matrix1: Matrix, matrix2: Matrix) {
    let newMatrix: NestedArray<number> = [[]];
    if (matrix1.columns == matrix2.rows) {
        for (let i = 0; i < matrix1.rows; i++) {
            newMatrix[i] = [];
            for (let j = 0; j < matrix2.columns; j++) {
                let sum = 0;
                for (let k = 0; k < matrix1.columns; k++) {
                    sum += matrix1.matrix[i][k] * matrix2.matrix[k][j];
                }
                newMatrix[i][j] = sum;
            }
        }
    } else {
        throw new Error("Attempted to multiply matrices with non-matching dimensions. Matrix 1 has " + matrix1.columns +
            " columns, but Matrix 2 has " + matrix2.rows + " rows.")
    }
    return newMatrix;
}