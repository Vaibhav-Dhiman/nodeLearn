const fs = require('fs')

// const book = {
//     Title: 'Ego is the Enemy',
//     Author: 'Ryan Holiday'
// }

// // use below to convert array or string into the json

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJson)

// // use below to convert json to array or string

// const bookData = JSON.parse(bookJson);


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.Title)


// update json file data

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
data.Title = 'Sublet art of not giving fuck'
data.Author = 'Dine morgaon'

const bookData = JSON.stringify(data)
fs.writeFileSync('1-json.json', bookData)

//console.log(data.Title)
