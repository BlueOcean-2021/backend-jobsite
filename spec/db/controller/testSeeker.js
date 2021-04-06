const mongoose = require('mongoose');
const seeker = require('../../../database/controller/seeker.js');


var params = { email: 'test20@admin.ch' };

let createTest = (params) => seeker.createSeekerModel(params);
createTest(params);

var note1 = {
  category: 'interview',
  title: 'Interview Notes with Mike',
  body: 'Solid, but bad eye contact',
}

var note2 = {
  category: 'interview',
  title: 'OMG OMG OMG',
  body: 'OMG OMG OMG',
}

var noteUpdate1 = {
  title: 'YYOOOOOOOOOOOOOO',
}

let addNoteTest1 = () => seeker.addNote('606bea306feca44119bfbac8', note2);
// addNoteTest1();

let updateNoteTest1 = () => seeker.updateNote('606bea306feca44119bfbac8', '606bea99482eac4509f1d03d', noteUpdate1)
// updateNoteTest1();


let deleteNoteTest1 = () => seeker.deleteNote('606bea306feca44119bfbac8', '606beb2d47a97d4ac1806824');
// deleteNoteTest1();
