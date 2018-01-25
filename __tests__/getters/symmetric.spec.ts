import { Matrix } from '../../src/matrix';

let symmetricMatrix = new Matrix([
    [1, 2, 3],
    [2, 4, 7],
    [3, 7, 9]
]);

let asymmetricMatrix = new Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

test('symmetric matrix', () => {
    expect(symmetricMatrix.isSymmetric).toBe(true);
});

test('asymetric matrix', () => {
    expect(asymmetricMatrix.isSymmetric).toBe(false);
})
