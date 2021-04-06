const mongoose = require('mongoose');
const seeker = require('../../../database/controller/seeker.js');


var params = { email: 'danko0@admin.ch' };

let createTest = (params) => {
  seeker.createSeekerModel(params)
    .then(res => console.log(res._id))
    .catch(res => console.log(res))
};
// createTest(params);

var note1 = {
  category: 'interview',
  title: 'Last',
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

let addNoteTest1 = () => seeker.addNote('606ce570ce0bef34e9f831bb', note1).then(res=>console.log(res));
// addNoteTest1();

let updateNoteTest1 = () => seeker.updateNote('606bea306feca44119bfbac8', '606bea99482eac4509f1d03d', noteUpdate1)
// updateNoteTest1();


let deleteNoteTest1 = () => seeker.deleteNote('606bea306feca44119bfbac8', '606beb2d47a97d4ac1806824');
// deleteNoteTest1();

let findAll = () => seeker.findAllNotes({seekerId: '606ce570ce0bef34e9f831bb'}).then(res => console.log(res))

findAll();