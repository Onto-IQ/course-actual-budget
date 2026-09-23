export type SummaryRow = { category: string; total: number };

export function topCategories(
  _rows: { category: string; amount: number }[],
  _limit = 5,
): SummaryRow[] {
  throw new Error('Not implemented — Lab 05');
}

export function renderSummaryHtml(_rows: SummaryRow[]): string {
  throw new Error('Not implemented — Lab 05');
}
