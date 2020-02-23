import { Matrix, det } from 'mathjs';

export function rank(mat: Matrix): number {
  // TODO: compute
  return det(mat);
}
