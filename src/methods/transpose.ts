import { isSquare } from "../getters/is-square";
import { NestedArray } from "../types";

export function transpose(matrix: NestedArray<number>) {
    if (isSquare(matrix)) {
        let returnMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            returnMatrix[i] = [];
            for (let j = 0; j < matrix[0].length; j++) {
                returnMatrix[i][j] = matrix[j][i];
            }
        }
        return returnMatrix;
    } else {
        throw new Error('Attempted to transpose a non-square matrix.');
    }
}
