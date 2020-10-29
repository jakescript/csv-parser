const fs = require("fs");
const csvparser = require("./parser.js");

const csv = fs.readFileSync("./test.csv").toString();
const parsedCsv = csvparser.csvToJson(csv)

console.log(parsedCsv)
csvparser.writeCsvToJson(parsedCsv, "./test.json");
