import { isDiagonal } from './getters/is-diagonal';
import { isIdentity } from './getters/is-identity';
import { isScalar } from './getters/is-scalar';
import { isSquare } from './getters/is-square';
import { isSymmetric } from './getters/is-symmetric';
import { checkMatrixValidity, transformSimpleArray } from './initial-transforms';
import { multiply } from './methods/multiply';
import { power } from './methods/power';
import { transpose } from './methods/transpose';
import { MatrixInput, NestedArray } from './types';
import { equate } from './util/equate';

export class Matrix {

    private _matrix: NestedArray<number>;

    constructor(matrix: MatrixInput) {
        const transformed = transformSimpleArray(matrix);
        if (checkMatrixValidity(transformed)) {
            this._matrix = transformed;
        } else {
            this._matrix = [[]];
        }
    }


    transpose(): Matrix {
        return new Matrix(transpose(this._matrix));
    }

    multiply(matrix: Matrix): Matrix {
        return new Matrix(multiply(this, matrix));
    }

    power(pow: number): Matrix {
        return power(this, pow);
    }

    get matrix(): NestedArray<number> {
        return this._matrix;
    }

    get rows(): number {
        return this._matrix.length;
    }

    get columns(): number {
        return this._matrix[0].length;
    }


    get isSquare(): boolean {
        return isSquare(this._matrix);
    }

    get isSymmetric(): boolean {
        return equate(this._matrix, transpose(this._matrix));
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
