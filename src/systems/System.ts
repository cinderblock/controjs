import { Matrix } from 'mathjs';

export type System = {
  A: Matrix;
  B: Matrix;
  C?: Matrix;
  D?: Matrix;
  states: number;
  inputs: number;
  observables?: number;
};
