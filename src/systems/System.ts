import { Matrix } from 'mathjs';

export type System = {
  A: Matrix;
  B: Matrix;
  C?: Matrix;
  D?: Matrix;

  /**
   * The number of system states that we're tracking
   */
  states: number;

  /**
   * The number of control inputs to the system
   */
  inputs: number;

  /**
   * The number of observable values on our system
   */
  observables?: number;
};
