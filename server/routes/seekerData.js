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
<<<<<<< HEAD
      })
    })
    .catch(err => res.send(403));
})


router.get('/note')
=======
      });
    })
    .catch(err => res.send(403));
});
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601

// ____Notes________________________________
// ______________add new note
router.post('/note', (req, res, next) => {
  let { seekerId, noteObj } = req.body;
  seeker.addNote(seekerId, noteObj)
    .then((result) => {
      res.status(201).send({
        status: 'OK',
        notes: result.notes
<<<<<<< HEAD
      })
=======
      });
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601
    })
    .catch(err => res.send(403));
});

<<<<<<< HEAD
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

=======
// UNTESTED
// ________________find all notes
router.get('/note/all', (req, res, next) => {
  let {seekerId} = req.body;
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

// __ Appointments____________________________________

// ________________find all appointments
router.get('/appointment/all', (req, res, next) => {
  let { seekerId } = req.body;
  seeker.findAllAppointments({ seekerId })
    .then(result => {
      res.status(200).send({
        status: 'OK',
        appointments: result
      });
    })
    .catch(err => res.status(404).send(err));
});

// ________________add new appointment
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601
router.post('/appointment', (req, res, next) => {
  let {seekerId, appointmentObj} = req.body;
  seeker.addAppointment(seekerId, appointmentObj)
    .then(result => {
      res.status(200).send({
        status: 'OK',
        appointments: result.appointments
<<<<<<< HEAD
      })
    })
    .catch(err => {
      res.status(403).send(err)
    })
})
router.patch('/appointment')
router.delete('/appointment')
=======
      });
    })
    .catch(err => res.status(403).send(err));
});

// UNTESTED
// ________________edit an appointment
router.patch('/appointment', (req, res, next) => {
  let { seekerId, appointmentId, updatedFields } = req.body;
  seeker.updateAppointment(seekerId, appointmentId, updatedFields)
    .then(result => {
      res.status(202).send({
        status: 'OK',
        appointments: result.appointments
      });
    })
  .catch(err => res.status(400).send(err));
});

// ________________delete an appointment
router.delete('/appointment', (req, res, next) => {
  let {seekerId, appointmentId} = req.body;
  seeker.deleteAppointment(seekerId, appointmentId)
    .then(result => {
      res.sendStatus(204)
    })
    .catch(err => res.sendStatus(403));
});
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601

// __ Applications____________________________________
// ________________add new application
router.post('/application', (req, res, next) => {
  let { seekerId, applicationObj } = req.body;
  seeker.addApplication(seekerId, applicationObj)
    .then((result) => {
<<<<<<< HEAD
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
=======
      res.status(201).send({
          applicationId: result.id,
          status: 'OK'
        });
    })
    .catch(err => res.status(403).send(err));
});

// ________________get all applications
router.get('/application/all', (req, res, next) => {
  let {seekerId} = req.body;
  seeker.findAllApplications(seekerId)
    .then(result => {
      res.status(200).send({
        status: 'OK',
        appointments: result.appointments
      });
    })
    .catch(err => res.status(404).send(err));
});

// UNTESTED
// ________________update application
router.patch('/application', (req, res, next) => {
  let { seekerId, applicationId, updatedFields } = req.body;
  seeker.updateApplication(seekerId, applicationId, updatedFields)
    .then(result => {
      res.status(202).send({
        status: 'OK',
        applications: result.applications
      });
    })
  .catch(err => res.status(400).send(err));
});

// ________________delete application
router.delete('/application', (req, res, next) => {
  let {seekerId, applicationId} = req.body;
  seeker.deleteApplication(seekerId, applicationId)
    .then(result => res.sendStatus(204))
    .catch(err => res.sendStatus(403));
});

// __Saved jobs____________________________________

//______________save a job
router.post('/savedjob', (req, res, next) => {
  let { seekerId, savedJobsObj } = req.body;
  seeker.addSavedJob(seekerId, savedJobsObj)
    .then(result => {
      res.status(201).send({
          savedJobId: result._id,
          status: 'OK'
        });
    })
    .catch(err => res.status(403).send(err));
});

// _____________get all saved jobs
router.get('/savedjob/all', (req, res, next) => {
  let { seekerId } = req.body;
  seeker.findAllSavedJobs({ seekerId })
    .then(result => {
      res.status(200).send({
        status: 'OK',
        savedJobs: result
      });
    })
    .catch(err => res.status(404).send(err));
});

// UNTESTED
// _____________update saved job
router.patch('/savedjob', (req, res, next) => {
  let { seekerId, savedJobId, updatedFields } = req.body;
  seeker.updateSavedJob(seekerId, savedJobId, updatedFields)
    .then(result => {
      res.status(202).send({
        status: 'OK',
        savedJobs: result.savedJobs
      });
    })
  .catch(err => res.status(400).send(err));
});

// UNTESTED
// _____________delete saved job
router.delete('/savedjob', (req, res, next) => {
  let { seekerId, savedJobId } = req.body;
  seeker.deleteSavedJob(seekerId, savedJobId)
    .then(result => res.sendStatus(204))
    .catch(err => res.sendStatus(403));
});
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601

module.exports= router;