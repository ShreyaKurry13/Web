const FS = require('fs');

console.log('Start');

var result = FS.readFileSync('./home.html','utf-8')
console.log(result);

console.log('end');
