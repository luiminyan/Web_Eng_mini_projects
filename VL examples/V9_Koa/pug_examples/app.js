// install pug module
const Pug = require('pug');
// connect with the pug template file
const compFunc = Pug.compileFile('template.pug');

console.log(compFunc({name: 'Timothy'}));
console.log(compFunc({name: 'Forbes'}));