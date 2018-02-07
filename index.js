#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

program
  .version('1.0.0')
  .option('-u, --username <username>', 'Login username')
  .option('-p, --password <password>', 'Login password')
  .parse(process.argv);

  console.log(chalk.blue('Username'), program.username);