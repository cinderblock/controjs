import { matrix } from 'mathjs';
import { System } from './System';

type Options = {
  /**
   * Damping on ẋ
   */
  d: number;

  /**
   * Mass of pendulum
   */
  m: number;

  /**
   * Mass of cart
   */
  M: number;

  /**
   * Length of pendulum
   *
   * @units m
   * @default
   */
  L: number;

  /**
   * Gravity
   *
   * @default 9.8
   * @units m/s²
   */
  g: number;

  /**
   * Starting condition
   *
   * @default up
   */
  s: 'up' | 'down';
};

export function makeCart({
  d = 1,
  m = 1,
  M = 5,
  L = 2,
  s = 'up',
  g = -9.8,
}: Partial<Options> = {}): System {
  if (s !== 'up') L = -L;
  const ML = M * L;

  const a = -d / M;
  const b = (-m * g) / M;
  const c = -d / ML;
  const e = (-(m + M) * g) / ML;

  const n = 1 / M;
  const o = 1 / ML;

  return {
    A: matrix([
      [0, 1, 0, 0], // x
      [0, a, b, 0], // ẋ
      [0, 0, 0, 1], // θ
      [0, c, e, 0], // ω
    ]),
    states: 4,
    B: matrix([
      [0], // x
      [n], // ẋ
      [0], // θ
      [o], // ω
    ]),
    inputs: 1,
  };
}
