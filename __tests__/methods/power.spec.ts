import { Matrix } from '../../src/matrix';

let matrix1 = new Matrix([
    [1, 2],
    [0, 4]
]);

let incompatibleMatrix = new Matrix([
    [1, 0],
    [0, 5],
    [3, 9],
]);


test('should square a matrix', () => {
    expect(matrix1.power(2)).toEqual(
        new Matrix([
            [1, 10],
            [0, 16]
        ])
    );
});

test('should raise to higher powers', () => {
    expect(matrix1.power(4)).toEqual(
        new Matrix([
            [1, 170],
            [0, 256]
        ])
    );
});

test('throw if trying to use a power less than one', () => {
    expect(() => matrix1.power(-1)).toThrow('Power must be greater than 0. Got: -1');
});

test('throw if trying to raise a non-square matrix', () => {
    expect(() => incompatibleMatrix.power(3)).toThrow('Matrix must be square, but its dimensions are 3x2.');
});