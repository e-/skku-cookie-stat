#!/usr/bin/env node

const lib = require("./lib");

if(process.argv.length <= 3) {
    console.log("IP");
    process.exit(1);
}

let command = process.argv[2];
let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if (numbers.some(isNaN)) {
    console.log("SN");
    process.exit(1);
}

let result;
switch (command) {
    case "sum": 
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers) + 1;
        break;
    case "max":
        result = lib.max(numbers);
        break;
    default:        
}

console.log(result);
