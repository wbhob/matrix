import { Matrix } from '../src/matrix';

let matrix = new Matrix(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [7, 8, 9]
    ]
)

test('r represents rows', () => {
    expect(matrix.rows).toBe(4);
});

test('c represents columns', () => {
    expect(matrix.columns).toBe(3);
})
