const mongoose = require('mongoose');
// const employerUserSchema = require('../../../database/model/employerNotes.js');
const employer = require('../../../database/controller/employerNotes.js');


var params = { email: 'rdominguez0@admin.ch' };

let createTest = (params) => employer.createEmployerNoteModel(params);
// createTest(params);

var note1 = {
  category: 'interview',
  title: 'This is new',
  body: 'Solid, but bad eye contact',
}

var note2 = {
  title: 'YYOOOOOOOOOOOOOO',
}

let addNoteTest1 = () => employer.addNote('606be424876aa60a47957ecc', note1);
// addNoteTest1();

let updateNoteTest1 = () => employer.updateNote('606be424876aa60a47957ecc', '606be46035afd70c7888897d', note2)
// updateNoteTest1();


let deleteNoteTest1 = () => employer.deleteNote('606be424876aa60a47957ecc', '606be46035afd70c7888897d');
// deleteNoteTest1();
