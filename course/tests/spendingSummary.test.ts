import test from 'node:test';
import assert from 'node:assert/strict';
import { topCategories, renderSummaryHtml } from '../src/spendingSummary.ts';

test('topCategories sorts descending and respects limit', () => {
  const rows = topCategories(
    [
      { category: 'Food', amount: 10 },
      { category: 'Rent', amount: 100 },
      { category: 'Food', amount: 5 },
      { category: 'Fun', amount: 20 },
    ],
    2,
  );
  assert.deepEqual(rows, [
    { category: 'Rent', total: 100 },
    { category: 'Fun', total: 20 },
  ]);
});

test('renderSummaryHtml includes category labels', () => {
  const html = renderSummaryHtml([{ category: 'Rent', total: 100 }]);
  assert.match(html, /Rent/);
  assert.match(html, /100/);
});
