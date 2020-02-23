/* eslint-disable @typescript-eslint/no-unused-vars */
import { Matrix, matrix } from 'mathjs';

type System = {
  A: Matrix;
  B: Matrix;
  C?: Matrix;
  D?: Matrix;
};

function makeCart({
  d = 1,
  m = 1,
  M = 5,
  L = 2,
  s = 1,
  g = -9.8,
}: {
  /**
   * Damping on ẋ
   */
  d?: number;

  /**
   * Mass of pendulum
   */
  m?: number;

  /**
   * Mass of cart
   */
  M?: number;

  /**
   * Length of pendulum
   */
  L?: number;

  /**
   * Starting point.
   * 1 = up
   * -1 = down
   */
  s?: 1 | -1;

  /**
   * Gravity
   *
   * @default 9.8
   * @units m/s²
   */
  g?: number;
} = {}): System {
  return {
    A: matrix(
      // prettier-ignore
      [
      [0,                1,                          0, 0], // x
      [0, -    d /  M     , -     m      * g /  M     , 0], // ẋ
      [0,                0,                          0, 1], // θ
      [0, -s * d / (M * L), -s * (m + M) * g / (M * L), 0], // ω
    ],
    ),
    B: matrix(
      // prettier-ignore
      [
      [          0], // x
      [      1 / M], // ẋ
      [          0], // θ
      [s / (M * L)], // ω
    ],
    ),
  };
}

const cartUp = makeCart({ s: 1 });
const cartDown = makeCart({ s: -1 });

const cart = cartUp;

/**
 * Compute eigenvalues of a matrix.
 *
 * @param {Matrix} mat - Matrix to compute eigenvalues of
 * @returns {Matrix} The eigenvalues
 */
function eig(mat: Matrix): Matrix {
  // TODO: implement
  return matrix();
}

function controllability({ A, B }: { A: Matrix; B: Matrix }): Matrix {
  // TODO: implement
  return matrix();
}

function rank(mat: Matrix): number {
  // TODO: compute
  return 0;
}

function place({ A, B, eigs }: { A: Matrix; B: Matrix; eigs: Matrix }): Matrix {
  // TODO: implement
  return matrix();
}

console.log('Stability eigenvalues:', eig(cart.A));

// cSpell:ignore ctrb eigs
const ctrb = controllability(cart);

console.log('CTRB:', ctrb);

console.log('Rank:', rank(ctrb)); // 4;

const eigs: Matrix = matrix([-1.1, -1.2, -1.3, -1.4]);

const placed = place({ ...cart, eigs });

console.log('Placed:', placed);
