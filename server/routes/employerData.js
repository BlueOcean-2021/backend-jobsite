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
        employerId: result._id,
        status: 'OK'
      });
    })
    .catch(err => res.send(403));
  }
});

// UNTESTED
// ________________find all notes
router.get('/note/all', (req, res, next) => {
  let { employerId } = req.body;
  seeker.findAllNotes({ seekerId })
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
  let { seekerId, noteId, updatedFields } = req.body;
  seeker.updateNote(seekerId, noteId, updatedFields)
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
  let {seekerId, noteId} = req.body;
  seeker.deleteNote(seekerId, noteId)
    .then(result => {
      res.sendStatus(204)
    })
    .catch(err => res.sendStatus(403));
});



module.exports = router;