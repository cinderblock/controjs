import { Matrix, matrix, pow, multiply, squeeze } from 'mathjs';

export function controllability({ A, B }: { A: Matrix; B: Matrix }): Matrix {
  const n = A.size().length;

  const ret: number[][] = [];

  for (let i = 0; i < n; i++) {
    ret.push(squeeze(multiply(pow(A, i), B) as Matrix).toArray() as number[]);
  }

  return matrix(ret);
}
