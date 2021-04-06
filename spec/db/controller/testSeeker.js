const mongoose = require('mongoose');
const seeker = require('../../../database/controller/seeker.js');


var params = { email: 'rdominguez0@admin.ch' };

let createTest = (params) => seeker.createSeekerModel(params);
// createTest(params);

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
addNoteTest1();

let updateNoteTest1 = () => seeker.updateNote('606be424876aa60a47957ecc', '606be46035afd70c7888897d', note2)
// updateNoteTest1();


let deleteNoteTest1 = () => seeker.deleteNote('606be424876aa60a47957ecc', '606be46035afd70c7888897d');
// deleteNoteTest1();
