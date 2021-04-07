const mongoose = require('mongoose');
const {
  createModel,
  addSubdocumentToModel,
  deleteSubdocument,
<<<<<<< HEAD
  updateSubdocument
=======
  updateSubdocument,
  findAllInSubdocument
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601
} = require('./reuse.js');
const { EmployerNotesModel, Note } = require('../model/employerNotes.js');

const employerNote = {
  // instatiate new employer note document
  createEmployerNoteModel: ({ email }) => {
    return new Promise((resolve, reject) => {
      createModel(EmployerNotesModel, { email }, resolve, reject);
    });
  },
<<<<<<< HEAD
=======
  // list all employer notes
  findAllNotes: ({ employerNoteId }) => {
    return new Promise((resolve, reject) => {
      findAllInSubdocument(EmployerNotesModel, employerNoteId, 'notes', resolve, reject);
    });
  },
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601
  // add to specifc employer note document
  addNote: (employerNoteId, noteObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(EmployerNotesModel, employerNoteId, Note, 'notes', noteObj, resolve, reject);
    });
  },
  // delete a specifc employer note document
  deleteNote: (employerNoteId, noteId) => {
    return new Promise((resolve, reject) => {
      deleteSubdocument(EmployerNotesModel, employerNoteId, 'notes', noteId, resolve, reject);
    });
  },
  // update a specifc employer note document
  updateNote: (employerNoteId, noteId, updatedFields) => {
    return new Promise((resolve, reject) => {
      updateSubdocument(EmployerNotesModel, employerNoteId, 'notes', noteId, updatedFields, resolve, reject);
    });
  }
}

module.exports = employerNote;