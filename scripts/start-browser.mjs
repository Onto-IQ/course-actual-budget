#!/usr/bin/env node
/**
 * Cross-platform replacement for `yarn start` (which runs a POSIX sh script).
 * Starts the plugins service watcher and the browser build of Actual on :3001.
 * Usage: yarn start:course
 */
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const yarnrc = readFileSync(join(root, '.yarnrc.yml'), 'utf8');
const yarnPath = yarnrc.match(/^yarnPath:\s*(.+)$/m)?.[1]?.trim();
if (!yarnPath) {
  console.error('yarnPath not found in .yarnrc.yml');
  process.exit(1);
}
const yarnBin = join(root, yarnPath);

const env = {
  ...process.env,
  PORT: '3001',
  REACT_APP_BACKEND_WORKER_HASH: 'dev',
};

const jobs = [
  ['plugins-service', ['workspace', 'plugins-service', 'watch']],
  ['web', ['workspace', '@actual-app/web', 'vite', '--mode=browser']],
];

const children = jobs.map(([name, args]) => {
  const child = spawn(process.execPath, [yarnBin, ...args], {
    cwd: root,
    env,
    stdio: 'inherit',
  });
  child.on('exit', code => {
    if (code && code !== 0) {
      console.error(`[${name}] exited with code ${code}`);
      shutdown(code);
    }
  });
  return child;
});

function shutdown(code = 0) {
  for (const child of children) {
    if (!child.killed) child.kill();
  }
  process.exit(code);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));
