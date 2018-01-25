import { Matrix } from '../../src/matrix';

let diagonalMatrix = new Matrix([
    [1, 0, 0],
    [0, 4, 0],
    [0, 0, 9]
]);

let nonDiagonalMatrix = new Matrix([
    [1, 0, 0],
    [0, 5, 6],
    [0, 0, 9]
])

test('diagonal matrix', () => {
    expect(diagonalMatrix.isDiagonal).toBe(true);
});

test('not diagonal matrix', () => {
    expect(nonDiagonalMatrix.isDiagonal).toBe(false);
})
