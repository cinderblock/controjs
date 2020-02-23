import { Matrix, cross, matrix } from 'mathjs';

export function controllability({ A, B }: { A: Matrix; B: Matrix }): Matrix {
  // TODO: implement
  return matrix(cross(A, B));
}
