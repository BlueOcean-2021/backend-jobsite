const mongoose = require('mongoose');
const {
  createModel,
  addSubdocumentToModel,
  deleteSubdocument,
  updateSubdocument
} = require('./reuse.js');
const { EmployerNotesModel, Note } = require('../model/employerNotes.js');

const employerNote = {
  // instatiate new employer note document
  createEmployerNoteModel: ({ email }) => {
    return new Promise((resolve, reject) => {
      createModel(EmployerNotesModel, { email }, resolve, reject);
    });
  },
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