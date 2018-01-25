import { NestedArray } from "../types";
import { isSquare } from "./is-square";

export function isSymmetric(matrix: NestedArray<number>): boolean {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] != matrix[j][i]) {
                return false;
            }
        }
    }
    return true;
}
