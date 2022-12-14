var XLSX = require('xlsx');

const workbook = XLSX.readFile('./agglutination.xlsx')

const worksheet = workbook.Sheets[workbook.SheetNames[0]]

const ar = []
let agglutination = {}

for (let cell in worksheet) {
    const cellAsString = cell.toString()
    if (cellAsString[1] !== 'r' && cellAsString !== 'm') {

        if (cellAsString[0] === 'A') {
            agglutination.code = worksheet[cell].v
        }
        if (cellAsString[0] === 'B') {
            agglutination.description = worksheet[cell].v
            ar.push(agglutination)
            agglutination = {}
        }

    }

    console.log(ar)
}

