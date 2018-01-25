import { NestedArray } from "../types";

export function is(matrix: NestedArray<number>): boolean {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][i] != 1) {
            return false;
        }
    }
    return true;
}