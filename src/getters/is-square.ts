import { NestedArray } from "../types";

export function isSquare(matrix: NestedArray<number>) {
    return matrix.length == matrix[0].length
}
