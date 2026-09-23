/**
 * Optional stretch — Lab 08 / issue 10.
 * Prefer injected rates in tests; live HTTP must use env for secrets.
 */
export function convertTHB(amountThb: number, rate: number): number {
  if (!Number.isFinite(amountThb) || !Number.isFinite(rate)) {
    throw new Error('Invalid amount or rate');
  }
  return amountThb * rate;
}
