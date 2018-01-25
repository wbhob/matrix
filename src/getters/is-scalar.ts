import { NestedArray } from "../types";

export function isScalar(matrix: NestedArray<number>): boolean {
    let first = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][i] != first) {
            return false;
        }
    }
    return true;
}
