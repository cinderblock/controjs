import { Matrix, matrix, cross } from 'mathjs';

export function observability({ A, C }: { A: Matrix; C: Matrix }): Matrix {
  // TODO: implement
  return matrix(cross(A, C));
}
