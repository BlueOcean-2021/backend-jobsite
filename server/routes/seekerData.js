const router = require('express').Router();
const { seeker } = require('../../database/controller');

// __Unspecified user________________________________
//_____________________New User
router.post('/newseeker', (req, res, next) => {
  let { email } = req.body;
  seeker.createSeekerModel({ email })
    .then((result) =>{
      console.log(result._id)
      res.send(result._id)
    })
    .catch(err => res.send(403));
});

router.get('/note')

// ____Notes________________________________
// ______________add new note
router.post('/note', (req, res, next) => {
  let { seekerId, noteObj } = req.body;
  seeker.addNote(seekerId, noteObj)
    .then(() => res.send(201))
    .catch(err => res.send(403));
});

router.get('/note', (req, res, next) => {
  let { seekerId, noteObj } = req.body;
  seeker.addNote(seekerId, noteObj)
    .then(() => res.send(201))
    .catch(err => res.send(403));
})
router.patch('/note')
router.delete('/note')

// __Appointments____________________________________
// ________________add new appointment
router.post('/appointment', (req, res, next) => {
  let { seekerId, appointmentObj } = req.body;
  seeker.addAppointment(seekerId, appointmentObj)
    .then(() => res.send(201))
    .catch(err => res.send(403));
});

router.get('/appointment')
router.patch('/appointment')
router.delete('/appointment')

// __ Applications____________________________________
// ________________add new application
router.post('/application', (req, res, next) => {
  let { seekerId, applicationObj } = req.body;
  seeker.addApplication(seekerId, applicationObj)
    .then(() => res.send(201))
    .catch(err => res.send(403));
});

router.get('/application')
router.patch('/application')
router.delete('/application')

// __Saved jobs____________________________________
// _____________add new saved job
router.post('/savedjob', (req, res, next) => {
  let { seekerId, savedJobsObj } = req.body;
  seeker.addSavedJob(seekerId, savedJobsObj)
    .then(() => res.send(201))
    .catch(err => res.send(403));
});

router.get('/savedjob')
router.patch('/savedjob')
router.delete('/savedjob')

module.exports= router;