export type GoalStatus = 'empty' | 'active' | 'done';

export function goalProgress(
  _saved: number,
  _target: number,
): { pct: number; remaining: number; status: GoalStatus } {
  throw new Error('Not implemented — Lab 06');
}
