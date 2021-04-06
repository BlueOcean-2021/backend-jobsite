const mongoose = require('mongoose');
const employerUserSchema = require('../../../database/model/employerNotes.js');
const employer = require('../../../database/controller/employerNotes.js');


var params = { email: 'rdominguez0@admin.ch' };

let createTest = (params) => employer.createEmployerNoteModel(params);

// createTest(params);

var note1 = {
  category: 'interview',
  title: 'Interview Notes with Mike',
  body: 'Solid, but bad eye contact',
}

let addNoteTest1 = () => employer.addNote('606bd52e26602229ba007f72', note1);
// test1();

let deleteNoteTest1 = () => employer.deleteNote('606bd52e26602229ba007f72', '606bd63dca9d8229f6e079e7');
deleteNoteTest1();