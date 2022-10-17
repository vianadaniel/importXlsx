var XLSX = require('xlsx');

const workbook = XLSX.readFile('./excel.xls')

const worksheet = workbook.Sheets

Object.values(worksheet.Report).map(function (key, value) {
    if (key.v === 'IRPJ-1') console.log(value)

})

Object.keys(worksheet.Report).map(function (key, value) {
    console.log(value, key)

})

