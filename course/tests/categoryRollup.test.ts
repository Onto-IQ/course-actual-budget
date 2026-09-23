import test from 'node:test';
import assert from 'node:assert/strict';
import { rollupByCategory } from '../src/categoryRollup.ts';

test('rollupByCategory sums amounts and buckets blank category', () => {
  const out = rollupByCategory([
    { category: 'Food', amount: 40 },
    { category: 'Food', amount: 10 },
    { category: '', amount: 5 },
  ]);
  assert.equal(out.Food, 50);
  assert.equal(out.uncategorized, 5);
});
