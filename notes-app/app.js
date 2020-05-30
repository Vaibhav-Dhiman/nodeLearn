// const fs = require('fs')

// //fs.writeFileSync('notes.txt', 'This is the new created file by Node,Js \t')
// fs.appendFileSync('notes.txt', ' \t This is the new created file by Node,Js')

// importing files from onr file to another

// const add = require('./utils.js')
// const sum = add(3,4)
// console.log(sum)
const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')
const msg = 'this is my msg from notes file'
const getmsg = getNotes(msg)
console.log(chalk.blue(getmsg));
console.log(chalk.redBright('Hello world!'));
// console.log(validator.isEmail('vagmail.com'))
//console.log(validator.isURL('vagmail.'))

