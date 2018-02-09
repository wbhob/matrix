import { Matrix } from '../../src/matrix';

const diagonalMatrix = new Matrix([
    [1, 0, 0],
    [0, 4, 0],
    [0, 0, 9]
]);

const nonDiagonalMatrix = new Matrix([
    [1, 0, 0],
    [0, 5, 6],
    [0, 0, 9]
]);

test('diagonal matrix', () => {
    expect(diagonalMatrix.isDiagonal).toBe(true);
});

test('not diagonal matrix', () => {
    expect(nonDiagonalMatrix.isDiagonal).toBe(false);
});
