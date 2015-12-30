var numArray = process.argv.slice(2);

var sum = 0;
for (var i = 0; i < numArray.length; i++){
    sum += +numArray[i];
}
console.log(sum);
