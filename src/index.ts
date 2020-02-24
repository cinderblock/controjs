/* eslint-disable @typescript-eslint/no-unused-vars */

import { Matrix, matrix } from 'mathjs';
import { lqr } from './tools/lqr';
import { place } from './tools/place';
import { rank } from './tools/rank';
import { controllability } from './tools/controllability';
import { eig } from './tools/eig';
import { makeCart } from './systems/makeCartSystem';

const initialState: Matrix = matrix([0, -0.5, Math.PI, 0]);

const targetState: Matrix = matrix([1, 0, Math.PI, 0]);

const cart = makeCart({ s: 'up' });

console.log('Cart:', cart);

console.log('Stability eigenvalues:', eig(cart.A));

// cSpell:ignore ctrb eigs
const ctrb = controllability(cart);

console.log('CTRB:', ctrb);

console.log('Rank:', rank(ctrb)); // 4;

const eigs: Matrix = matrix([-1.1, -1.2, -1.3, -1.4]);

const placed = place({ ...cart, eigs });

console.log('Placed:', placed);

// Quality
const Q = matrix(
  // prettier-ignore
  [
    [1, 0,  0,   0], // x
    [0, 1,  0,   0], // ẋ
    [0, 0, 10,   0], // θ
    [0, 0,  0, 100], // ω
  ],
);

// Input Cost
const R = matrix([0.001]);

const optimalControl = lqr({ ...cart, Q, R });
