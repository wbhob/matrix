import { Matrix } from '../matrix';

export const power = (matrix: Matrix, power: number): Matrix => {
    if (power < 1) {
        throw new Error('Power must be greater than 0. Got: ' + power);
    }
    if (!matrix.isSquare) {
        throw new Error('Matrix must be square, but its dimensions are ' + matrix.rows + 'x' + matrix.columns + '.');
    }
    
    let store: Matrix = matrix;
    let i = 1;
    while (i < power) {
        store = store.multiply(matrix);
        i++;
    }

    return store;
};
