import test from 'node:test';
import assert from 'node:assert/strict';
import { convertTHB } from '../src/fxRate.ts';

test('convertTHB multiplies injected rate', () => {
  assert.equal(convertTHB(100, 0.03), 3);
});
