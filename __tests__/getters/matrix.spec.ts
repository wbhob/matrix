import { Matrix } from '../../src/matrix';

const identityMatrix = new Matrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
]);

test('should return nested arrays', () => {
    expect((identityMatrix).matrix).toEqual([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ]);
});

test('should return nested arrays from private member', () => {
    expect((identityMatrix as any)._matrix).toEqual([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ]);
});