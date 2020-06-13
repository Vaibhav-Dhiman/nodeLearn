const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    // array filter exmple below
     const dupicateNote = notes.find((note) => note.Title === title) // find will stop when see the first duplicate in array object
    // const dupicateNotes = notes.filter((note) => note.Title === title) // filter will see others duplicate till last even after finding duplicate

    //debugger
    // run below command to start debug code and use above debugger to entry start debug
    //node --inspect-brk app.js  add --title="Book Reading" --body="Need To Read More Books"
    
    // console.log(dupicateNotes)

    if (!dupicateNote) {
        notes.push({
            Title: title,
            Body: body
        })
        //console.log(notes)
        saveNotes(notes)
        // console.log('New Note Added')
        console.log(chalk.green.inverse('New Note Added'))
    }
    else {
        console.log(chalk.red.inverse('Note Failed To Add As Already Found'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.Title !== title)
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse(title + ' Removed From Notes'))
        saveNotes(notesToKeep)
    }

    else {
        console.log(chalk.red.inverse('No Note Found'))
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const findNotes = notes.find((note)=> note.Title == title)
    if (findNotes) console.log(findNotes.Title, findNotes.Body)
    else console.log(chalk.redBright.inverse('not found'))
}


const listNotes = () => {
    const notes = loadNotes()
   notes.forEach(note => {
       console.log(note.Title)
   });
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        
        const dataBuffer =  fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)

    } catch (e) {
        return []
    }

}

// can't we export multiple functions here as below?
// use below

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}