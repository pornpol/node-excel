const xlsx = require('node-xlsx').default;

const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`);

console.table(workSheetsFromFile[0].data.map((row) => ({ ...row })));
