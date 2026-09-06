#!/usr/bin/env node
'use strict';

/** Builds the four starter templates through the HTML-first pipeline. */

const { spawnSync } = require('child_process');
const path = require('path');

const res = spawnSync(
  process.execPath,
  [path.join(__dirname, 'build_examples.js'), '--templates', ...process.argv.slice(2)],
  { stdio: 'inherit' }
);
process.exit(res.status === null ? 1 : res.status);
