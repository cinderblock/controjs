import { Matrix, matrix, cross } from 'mathjs';

export function place({
  A,
  B,
  eigs,
}: {
  A: Matrix;
  B: Matrix;
  eigs: Matrix;
}): Matrix {
  // TODO: implement
  return matrix(cross(A, cross(B, eigs)));
}
