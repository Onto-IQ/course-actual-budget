import test from 'node:test';
import assert from 'node:assert/strict';
import { formatTHB, parseLooseAmount } from '../src/moneyFormat.ts';

test('formatTHB formats major units with baht sign', () => {
  assert.equal(formatTHB(1234.5), '฿1,234.50');
  assert.equal(formatTHB(0), '฿0.00');
});

test('parseLooseAmount accepts common inputs', () => {
  assert.equal(parseLooseAmount('1,234.50'), 1234.5);
  assert.equal(parseLooseAmount('1234'), 1234);
  assert.equal(parseLooseAmount(''), null);
  assert.equal(parseLooseAmount('abc'), null);
});
