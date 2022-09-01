#!/usr/bin/env node

const minimist = require('minimist');
const { parse, parseToJSON } = require('./converter');

const args = minimist(process.argv.slice(2));
const html = args._[0];

if (!html) {
  console.error('No HTML provided.');
  process.exit(1);
}

if (args.json) {
  process.stdout.write(parseToJSON(html));
} else {
  process.stdout.write(parse(html));
}
