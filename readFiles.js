const fs = require('fs');

const data = fs.readFileSync('./filesToReadFrom/text.txt', 'utf8');

console.log(data);
