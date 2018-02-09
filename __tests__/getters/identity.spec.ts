import { Matrix } from '../../src/matrix';

const identityMatrix = new Matrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]);

const nonIdentityMatrix = new Matrix([
    [4, 0, 0],
    [0, 4, 0],
    [0, 0, 4]
]);

test('identity matrix', () => {
    expect(identityMatrix.isIdentity).toBe(true);
});

test('not identity matrix', () => {
    expect(nonIdentityMatrix.isIdentity).toBe(false);
});
