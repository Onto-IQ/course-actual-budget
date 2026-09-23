import test from 'node:test';
import assert from 'node:assert/strict';
import { goalProgress } from '../src/savingsGoal.ts';

test('goalProgress computes pct and status', () => {
  assert.deepEqual(goalProgress(0, 100), {
    pct: 0,
    remaining: 100,
    status: 'empty',
  });
  assert.deepEqual(goalProgress(40, 100), {
    pct: 40,
    remaining: 60,
    status: 'active',
  });
  assert.deepEqual(goalProgress(100, 100), {
    pct: 100,
    remaining: 0,
    status: 'done',
  });
});

test('goalProgress clamps over-target to 100 and done', () => {
  const out = goalProgress(150, 100);
  assert.equal(out.pct, 100);
  assert.equal(out.status, 'done');
  assert.equal(out.remaining, 0);
});
