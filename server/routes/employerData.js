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

module.exports = router;