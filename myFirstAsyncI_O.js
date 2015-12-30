/****Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
    (stdout), similar to running cat file | wc -l.  ***/

var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, bf){
	if (err) throw err;
	 console.log(bf.split("\n").length - 1);
}); 

//console.log(bf.split("\n").length - 1);