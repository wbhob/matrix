import { isDiagonal } from './getters/is-diagonal';
import { isSquare } from './getters/is-square';
import { isSymmetric } from './getters/is-symmetric';
import { checkMatrixValidity, transformSimpleArray } from './initial-transforms';
import { MatrixInput, NestedArray } from './types';

export class Matrix {

    private _matrix: NestedArray<number>;

    constructor(
        matrix: MatrixInput
    ) {
        let transformed = transformSimpleArray(matrix);
        if (checkMatrixValidity(transformed)) {
            this._matrix = transformed;
        }
    }

    get dimensions() {
        return {
            r: this._matrix.length,
            c: this._matrix[0].length
        }
    }

    get isSquare(): boolean {
        return isSquare(this._matrix);
    }

    get isSymmetric(): boolean {
        return this.isSquare && isSymmetric(this._matrix);
    }

    get isDiagonal(): boolean {
        return this.isSquare && this.isSymmetric && isDiagonal(this._matrix);
    }

    get isScalar(): boolean {
        return true;
    }

    get isIdentity(): boolean {
        return true;
    }
}
