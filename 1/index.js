let fs = require('fs')

// PART 1
const text = fs.readFileSync('input.txt', { encoding: 'utf-8'})
const getTextByLine = text.split('\n')
const fuel = getTextByLine.map(mass => Math.floor(parseInt(mass)/3)-2)
const sum = fuel.reduce((a,b) => a + b, 0)


// PART 2