import { Matrix } from '../../src/matrix';

let squareMatrix = new Matrix([
    [1, 2, 0],
    [0, 4, 6],
    [0, 0, 9]
]);

let rectangularMatrix = new Matrix([
    [1, 0, 0],
    [0, 5, 6],
    [0, 0, 9],
    [0, 0, 9]
])

test('transpose a matrix', () => {
    expect(squareMatrix.transpose()).toEqual(
        new Matrix([
            [1, 0, 0],
            [2, 4, 0],
            [0, 6, 9]
        ])
    );
});

test('throw if trying to transpose a non-square matrix', () => {
    expect(() => rectangularMatrix.transpose()).toThrow('Attempted to transpose a non-square matrix.');
})
