const fs = require("fs");

const csv = fs.readFileSync("test.csv").toString();


function csvToJson(csv, delimiter){
  const csvArr = csv.split("\n");
  const data = csvArr.map(row => {
    return row.toLowerCase().split(delimiter);
  });

  const cols = data[0];
  const rows = data.splice(1);

  const results = {length: 0, data: []};
  for(let i = 0; i < rows.length; i++){
    const record = {}
    for(let j = 0; j < rows[i].length; j++){
      const currentVal = rows[i][j];
      record[cols[j]] = currentVal;
    };

    results.data.push(record)
  };

  results.length = results.data.length;

  return results;
};

console.log(csvToJson(csv, ","));
