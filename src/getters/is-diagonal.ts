import { NestedArray } from "../types";
import { isSquare } from "./is-square";
import { isSymmetric } from "./is-symmetric";

export function isDiagonal(matrix: NestedArray<number>): boolean {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i != j && matrix[i][j] != 0) {
                return false;
            }
        }
    }
    return true;
}
