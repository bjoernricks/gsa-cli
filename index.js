#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const fetch = require('node-fetch');
const FormData = require('form-data');

program
  .version('1.0.0')
  .option('-u, --username <username>', 'Login username')
  .option('-p, --password <password>', 'Login password')
  .parse(process.argv);

if (program === undefined || program.password === undefined) {
  program.help();
  process.exit(1);
}

console.log(chalk.blue('Username'), program.username);
console.log(chalk.blue('Password'), program.password);

const form = new FormData();
form.append('login', program.username);
form.append('password', program.password);
form.append('cmd', 'login');
form.append('no_redirect', '1');
form.append('text', '/omp?xml=1');

fetch('http://127.0.0.1:9392/omp', {
  method: 'POST',
  body: form,
})
  .then(res => res.text())
  .then(text => console.log(chalk.green('Response'), text))
  .catch(error => console.error(chalk.red('Error'), error));