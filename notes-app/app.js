const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs verion(this can be anything)
yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
        // console.log('Title: ' + argv.title)
        // console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
        // console.log('Removing a note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        console.log(chalk.blueBright.inverse('List of all notes'))
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'ReadNotes',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(chalk.yellowBright.inverse('Reading All Notes'))
        notes.readNotes(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()


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

