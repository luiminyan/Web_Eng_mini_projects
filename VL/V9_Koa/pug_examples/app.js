const Pug = require('pug');
const compFunc = Pug.compileFile('template.pug');

console.log(compFunc({name: 'Timothy'}));
console.log(compFunc({name: 'Forbes'}));