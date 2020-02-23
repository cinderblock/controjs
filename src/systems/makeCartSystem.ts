import { matrix } from 'mathjs';
import { System } from './System';

export function makeCart({
  d = 1,
  m = 1,
  M = 5,
  L = 2,
  s = 'up',
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
   *
   * @units m
   * @default
   */
  L?: number;

  /**
   * Starting condition
   *
   * @default up
   */
  s?: 'up' | 'down';

  /**
   * Gravity
   *
   * @default 9.8
   * @units m/s²
   */
  g?: number;
} = {}): System {
  if (s !== 'up') L = -L;
  const ML = M * L;

  return {
    A: matrix(
      // prettier-ignore
      [
        [0, 1      ,                 0, 0],
        [0, -d / M , - m      * g / M , 0],
        [0,       0,                 0, 1],
        [0, -d / ML, -(m + M) * g / ML, 0],
      ],
    ),
    states: 4,
    B: matrix(
      // prettier-ignore
      [
        [0     ],
        [1 / M ],
        [0     ],
        [1 / ML],
      ],
    ),
    inputs: 1,
  };
}
