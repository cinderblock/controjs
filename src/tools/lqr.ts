import { Matrix, matrix, cross } from 'mathjs';

export function lqr({
  A,
  B,
  Q,
  R,
}: {
  A: Matrix;
  B: Matrix;
  Q: Matrix;
  R: Matrix;
}): Matrix {
  // TODO: real implementation
  return matrix(cross(A, cross(B, cross(Q, R))));
}
