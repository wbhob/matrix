import { Matrix } from '../src/matrix';

test('row length must match', () => {
    expect(() => {
        new Matrix([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9, 10],
            [7, 8, 9]
        ])
    }).toThrow('Row 3 has a mismatched length within the matrix. Expected: 3. Got: 4');
});

test('all types must match', () => {
    expect(() => {
        new Matrix([
            1,
            [2],
            3
        ])
    }).toThrow('The formats of your matrix entries are not the same. The first row is not an array, but the entry in row 2 is.');
});

test('all types must match', () => {
    expect(() => {
        new Matrix([
            [1],
            [2],
            3
        ])
    }).toThrow('The formats of your matrix entries are not the same. The first row is an array, but the entry in row 3 is not.');
});

test('should convert all numbers to columns', () => {
    let numCol = new Matrix([
        1,
        2,
        3
    ])
    expect(numCol.dimensions).toEqual({ r: 3, c: 1 });
});

// test('c represents columns', () => {
//     expect(matrix.dimensions.c).toBe(3);
// })
