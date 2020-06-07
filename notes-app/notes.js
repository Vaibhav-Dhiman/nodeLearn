const fs = require('fs')

const getNotes = function(txt) {
    // console.log('entered in notes function')
    return 'Your notes...'
}

const addNote = function(title, body) {
    const notes = loadNotes()

    // array filter exmple below
    const dupicateNotes = notes.filter(function (note){
      //  console.log(note.Title)
        return note.Title == title
    })
    // console.log(dupicateNotes)

    if (dupicateNotes.length === 0) {
        notes.push({
            Title: title,
            Body: body
        })
        //console.log(notes)
        saveNotes(notes)
        console.log('New Note Added')
    }
    else {
        console.log('Note Failed To Add As Already Found')
    }
}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        //console.log(note.Title)
        return note.Title !== title
    })
    
    console.log(title + ' Removed From List')
    saveNotes(notesToKeep)

}

const saveNotes = function(notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function() {
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