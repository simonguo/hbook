#! /usr/bin/env node

var color = require('bash-color');

console.log(color.red('You need to install "hbook-cli" to have access to the hbook command anywhere on your system.'));
console.log(color.red('If you\'ve installed this package globally, you need to uninstall it.'));
console.log(color.red('>> Run "npm uninstall -g hbook" then "npm install -g hbook-cli"'));
