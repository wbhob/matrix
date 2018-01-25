import { Matrix } from '../../src/matrix';

let squareMatrix = new Matrix([
    [1, 2, 3],
    [2, 4, 7],
    [3, 7, 9]
]);

let rectangularMatrix = new Matrix([
    [1, 2, 3, 8],
    [4, 5, 6, 8],
    [7, 8, 9, 8]
])

test('square matrix', () => {
    expect(squareMatrix.isSquare).toBe(true);
});

test('not square matrix', () => {
    expect(rectangularMatrix.isSquare).toBe(false);
})
