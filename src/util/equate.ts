import { NestedArray } from "../types";

export function equate(matrix1: NestedArray<number>, matrix2: NestedArray<number>) {
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[0].length; j++) {
            if (matrix1[i][j] != matrix2[i][j]) {
                return false;
            }
        }
    }
    return true;
}
