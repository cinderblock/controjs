import * as math from 'mathjs';
import { Matrix, matrix } from 'mathjs';

// Type information for eigs function is completely missing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const eigs = ((math as unknown) as any).eigs as (
  mat: Matrix,
) => { values: Matrix; vectors: Matrix };

/**
 * Compute eigenvalues for a square matrix.
 *
 * @param {Matrix} mat - Matrix to compute eigenvalues for
 * @returns {Matrix} Eigenvalues as vector
 */
export function eig(mat: Matrix): Matrix {
  return matrix(eigs(mat).values);
}
