import { isDiagonal } from './getters/is-diagonal';
import { isSquare } from './getters/is-square';
import { isSymmetric } from './getters/is-symmetric';
import { checkMatrixValidity, transformSimpleArray } from './initial-transforms';
import { MatrixInput, NestedArray } from './types';
import { isScalar } from './getters/is-scalar';
import { isIdentity } from './getters/is-identity';

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
        return this.isSymmetric && isDiagonal(this._matrix);
    }

    get isScalar(): boolean {
        return this.isDiagonal && isScalar(this._matrix);
    }

    get isIdentity(): boolean {
        return this.isDiagonal && isIdentity(this._matrix);
    }
}
