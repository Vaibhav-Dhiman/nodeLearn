const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    // console.log('entered in notes function')
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // array filter exmple below
    const dupicateNotes = notes.filter((note) => note.Title === title)
    // console.log(dupicateNotes)

    if (dupicateNotes.length === 0) {
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
    if(notes.length > notesToKeep) {
        console.log(chalk.green.inverse(title + ' Removed From Notes'))
        saveNotes(notesToKeep)
    }

    else {
        console.log(chalk.red.inverse('No Note Found'))
    }
    

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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}