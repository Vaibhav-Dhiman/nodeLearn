const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs verion(this can be anything)
yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('List all notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function() {
        console.log('Reading a note!')
    }
})

console.log(yargs.argv)


//const msg = 'this is my msg from notes file'
//const getmsg = getNotes(msg)
//console.log(chalk.blue(getmsg));
//console.log(chalk.redBright('Hello world!'));
//const successMsg = chalk.blue.inverse.bold('Success');
//.log(successMsg);
// console.log(validator.isEmail('vagmail.com'))
//console.log(validator.isURL('vagmail.'))


// get command line arguments below as = node app.js hello
//console.log(process.argv[2]);

