var fs = require('fs');
var bf = fs.readFileSync(process.argv[2])
console.log(bf.toString().split("\n").length - 1);

