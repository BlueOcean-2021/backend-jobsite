const router = require('express').Router();
const { employerNote } = require('../../database/controller');

//       /api/employerdata
// __Unspecified user________________________________
//_____________________New User
router.post('/newemployer', (req, res, next) => {
  if (!req.body.email) {
    res.sendStatus(400);
  } else {
    let { email } = req.body;
  employerNote.createEmployerNoteModel({ email })
    .then(result => {
      res.status(201).send({
        employerNoteId: result._id,
        status: 'OK'
      });
    })
    .catch(err => res.send(403));
  }
});

router.get('/id', (req, res, next) => {
  let {email} = req.body;
  employerNote.getId(email)
    .then(result => {
      res.status(200).send({
        status: 'OK',
        employerNoteId: result._id
      });
    })
    .catch(err => res.status(404).send(err));
});

// UNTESTED
// ________________find all notes
router.get('/note/all', (req, res, next) => {
  let { employerNoteId } = req.body;
  employerNote.findAllNotes({ employerNoteId })
    .then(result => {
      res.status(200).send({
        status: 'OK',
        notes: result
      });
    })
    .catch(err => res.status(404).send(err));
});


// ________________update a note
router.patch('/note', (req, res, next) => {
  let { employerNoteId, noteId, updatedFields } = req.body;
  employerNote.updateNote(employerNoteId, noteId, updatedFields)
    .then(result => {
      res.status(202).send({
        status: 'OK',
        notes: result.notes
      });
    })
    .catch(err => res.status(400).send(err));
});

// ________________delete a note
router.delete('/note', (req, res, next) => {
  let {employerNoteId, noteId} = req.body;
  employerNote.deleteNote(employerNoteId, noteId)
    .then(result => {
      res.sendStatus(204)
    })
    .catch(err => res.sendStatus(403));
});



module.exports = router;