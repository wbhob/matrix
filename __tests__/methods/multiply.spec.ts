import { Matrix } from '../../src/matrix';

let matrix1 = new Matrix([
    [1, 2],
    [0, 4]
]);

let matrix2 = new Matrix([
    [1, 0],
    [0, 5],
]);

let incompatibleMatrix = new Matrix([
    [1, 0, 80],
    [0, 5, 4],
    [3, 9, 35],
])


test('should multiply two matrices', () => {
    expect(matrix1.multiply(matrix2)).toEqual(
        new Matrix([
            [1, 10],
            [0, 20]
        ])
    );
});

test('throw if trying to multiply mismatched matrices', () => {
    expect(() => matrix1.multiply(incompatibleMatrix)).toThrow('Attempted to multiply matrices with non-matching dimensions. Matrix 1 has 2 columns, but Matrix 2 has 3 rows.');
})
