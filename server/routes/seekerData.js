const router = require('express').Router();
const { seeker } = require('../../database/controller');

//       /api/seekerdata
// __Unspecified user________________________________
//_____________________New User
router.post('/newseeker', (req, res, next) => {
  let { email } = req.body;
  seeker.createSeekerModel({ email })
    .then(result => {
      res.status(201).send({
        seekerId: result._id,
        status: 'OK'
      })
    })
    .catch(err => res.send(403));
})


router.get('/note')

// ____Notes________________________________
// ______________add new note
router.post('/note', (req, res, next) => {
  let { seekerId, noteObj } = req.body;
  seeker.addNote(seekerId, noteObj)
    .then((result) => {
      res.status(201).send({
        status: 'OK',
        notes: result.notes
      })
    })
    .catch(err => res.send(403));
});

// router.get('/note', (req, res, next) => {
//   let { seekerId, noteId } = req.body;
//   seeker.addNote(seekerId, noteObj)
//     .then(() => res.send(201))
//     .catch(err => res.send(403));
// })
router.patch('/note')
router.delete('/note')

// __Appointments____________________________________
// ________________add new appointment


//
// dateCreated: { type: Date, default: Date.now },
// startTime: { type: Date, required: true },
// endTime: { type: Date, required: true },
// category: {
//   type: String,
//   enum: ['interview', 'phoneScreen', 'personal'],
//   required: true
// },
// title: {
//   type: String,
//   required: true,
//   maxLength: 50
// },
// appointmentNote: {
//   type: String,
//   required: false,
//   maxLength: 1000
// }

router.post('/appointment', (req, res, next) => {
  let {seekerId, appointmentObj} = req.body;
  seeker.addAppointment(seekerId, appointmentObj)
    .then(result => {
      res.status(200).send({
        status: 'OK',
        appointments: result.appointments
      })
    })
    .catch(err => {
      res.status(403).send(err)
    })
})
router.patch('/appointment')
router.delete('/appointment')

// __ Applications____________________________________
// ________________add new application
router.post('/application', (req, res, next) => {
  let { seekerId, applicationObj } = req.body;
  seeker.addApplication(seekerId, applicationObj)
    .then((result) => {
      res
        .status(201)
        .send({ applicationId: result.id })
    })
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