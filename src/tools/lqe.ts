import { Matrix, matrix, cross } from 'mathjs';

export function lqe({
  A,
  C,
  Vd,
  Vn,
}: {
  A: Matrix;
  C: Matrix;
  Vd: Matrix;
  Vn: Matrix;
}): Matrix {
  // TODO: real implementation
  return matrix(cross(A, cross(C, cross(Vd, Vn))));
}
