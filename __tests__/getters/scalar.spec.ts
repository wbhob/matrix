import { Matrix } from '../../src/matrix';

let scalarMatrix = new Matrix([
    [4, 0, 0],
    [0, 4, 0],
    [0, 0, 4]
]);

let nonScalarMatrix = new Matrix([
    [4, 0, 0],
    [0, 4, 0],
    [0, 0, 5]
])

test('scalar matrix', () => {
    console.log(scalarMatrix.isSquare);

    expect(scalarMatrix.isScalar).toBe(true);
});

test('not scalar matrix', () => {
    expect(nonScalarMatrix.isScalar).toBe(false);
})
