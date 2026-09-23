export type TxRow = { category: string; amount: number };

export function rollupByCategory(_rows: TxRow[]): Record<string, number> {
  throw new Error('Not implemented — Lab 03');
}
