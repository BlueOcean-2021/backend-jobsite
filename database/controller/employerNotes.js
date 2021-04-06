const mongoose = require('mongoose');
const { addSubdocumentToModel } = require('./reuse.js');
const { EmployerNotesModel, Note } = require('../model/employerNotes.js');

const employer = {
  // instatiate new employer note document
  createEmployerNoteModel: ({ email }) => {
    return new Promise((resolve, reject) => {
      var newEmployerNote = new EmployerNotesModel({ email })
      newEmployerNote.save((err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },
  // add to specifc employer note document
  addNote: (employerNoteId, noteObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(EmployerNotesModel, employerNoteId, Note, 'notes', noteObj, resolve, reject);
    });
  },
  // addNote: (employerNoteId, noteObj) => {
  //   return new Promise((resolve, reject) => {
  //     EmployerNotesModel.findOne({ _id: employerNoteId}, (err, result) => {
  //       let currentEmployer = result;
  //       let newNote = new Note(noteObj);
  //       currentEmployer.notes.push(newNote);
  //       currentEmployer.save((err, writtenNote) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(writtenNote)
  //         }
  //       });
  //     });
  //   });
  // },
  deleteNote: (employerNoteId, noteId) => {
    return new Promise((resolve, reject) => {
      EmployerNotesModel.findOne({ _id: employerNoteId}, (err, result) => {
        let currentEmployer = result;
        currentEmployer.notes.pull({ _id: noteId });
        currentEmployer.save((err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        })
      });
    });
  },
  updateNote: (employerNoteId, noteId, updatedFields) => {
    return new Promise((resolve, reject) => {
      EmployerNotesModel.findOne({ _id: employerNoteId}, (err, result) => {
        let currentEmployer = result;
        for (let field in updatedFields) {
          currentEmployer.notes.id(noteId)[field] = updatedFields[field];
        }
        currentEmployer.save((err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        });
      });
    });
  }
}

module.exports = employer;