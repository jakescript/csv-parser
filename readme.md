# CsvParser

Very simple utility to turn a CSV into a JSON object.

By default deliminator is set to a comma
csvparser.csvToJson(string, deliminator)
returns {length: X, data: [ { ... }, { ... }, ... ]}

csvparser.writeCsvToJson(object, path_string)
writes JSON file to path

## Installation

```bash
npm install foobar
```

## Usage

```javascript
const fs = require('fs');
const csvparser = require('csvparser');

const csv = fs.readFileSync('./filepath').toString();
// convert csv string to json. Params (OBJ, DELIMINATOR)
const parsedCsv = csvparser.csvToJson(csv);

console.log(parsedCsv);
// optionally write json file. Params (OBJ, EXPORT_PATH)
csvparser.writeCsvToJson(parsedCsv, './test.json');
```
