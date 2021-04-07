const mongoose = require('mongoose');
const seeker = require('../../../database/controller/seeker.js');


<<<<<<< HEAD
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
=======
var params = { email: 'rdominguez0@admin.ch' };

let createTest = (params) => {
  seeker.createSeekerModel(params)
    .then(res => console.log(res))
    .catch(res => console.log(res))
};

var note1 = {
  category: 'interview',
  title: 'Interview Notes with Mike',
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601
  body: 'Solid, but bad eye contact',
}

var note2 = {
  category: 'interview',
  title: 'OMG OMG OMG',
  body: 'OMG OMG OMG',
}

<<<<<<< HEAD
var note3 = {
  category: 'application',
  title: 'OMG OMG OMG',
  body: 'OMG OMG OMG',
}

var noteUpdate1 = {
  title: 'YYOOOOOOOOOOOOOO',
  body: 'IT UPDATED IT UPDATED'
}

let addNoteTest1 = () => seeker.addNote('606ce570ce0bef34e9f831bb', note3).then(res=>console.log(res));
// addNoteTest1();

let updateNoteTest1 = () => seeker.updateNote('606ce570ce0bef34e9f831bb', '606ce5a5e22ec2370fa1ed8a', noteUpdate1).then(res=>console.log(res));
=======
var noteUpdate1 = {
  title: 'YYOOOOOOOOOOOOOO',
}

let addNoteTest1 = () => seeker.addNote('606b5823b011d60c47d17adb', note2);
//addNoteTest1();

let updateNoteTest1 = () => seeker.updateNote('606bea306feca44119bfbac8', '606bea99482eac4509f1d03d', noteUpdate1)
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601
// updateNoteTest1();


let deleteNoteTest1 = () => seeker.deleteNote('606bea306feca44119bfbac8', '606beb2d47a97d4ac1806824');
// deleteNoteTest1();
<<<<<<< HEAD

let findAll = () => seeker.findAllNotes({seekerId: '606ce570ce0bef34e9f831bb'}).then(res => console.log(res))

let filterParams = { category: 'application' };
let filter = () => seeker.filterNotes('606ce570ce0bef34e9f831bb', filterParams).then(res => console.log(res))
filter();
=======
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601
