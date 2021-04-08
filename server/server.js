const express = require('express');
const { application } = require('../config');
const cors = require('cors');

// router
const listingRoutes = require('./routes/listing.js');
const resumeRoutes = require('./routes/resume.js');
const seekerDataRoutes = require('./routes/seekerData.js');
const employerRoutes = require('./routes/employerData.js');
const app = express();
app.use(cors());

app.use(express.static('client/dist'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if using router
// router.use('/api/resume', resumeRoutes);

app.get('/test', (req, res) => res.send('sent test'));

const {
  getListing,
  postListing,
  updateListing,
  getAllListings,
  deleteListing,
  applyToListing,
  searchListings,
  getEmployerListings
} = listingRoutes;

const {
  getResume,
  postResume,
  getAllResumes,
  updateResume,
  deleteResume,
  searchResumes
} = resumeRoutes;

// api/seekerData
app.use('/api/seekerdata', seekerDataRoutes);
// app.use('/api/joblisting', XXX)
// app.use('/api/resume', XXXX)
app.use('/api/employerdata', employerRoutes);





app.get('/api/listing', getListing);
app.get('/api/listing/all', getAllListings);
app.get('/api/listing/employer', getEmployerListings);
app.post('/api/listing', postListing);
app.put('/api/listing', updateListing);
app.patch('/api/listing/apply', applyToListing);
app.get('/api/listing/search', searchListings);
app.delete('/api/listing', deleteListing);

app.get('/api/resume/', getResume);
// post resume tested
app.post('/api/resume', postResume);
app.put('/api/resume', updateResume);
app.delete('/api/resume', deleteResume);
app.get('/api/resume/all', getAllResumes);
app.get('/api/resume/search', searchListings);

app.listen(application.port, () => {
  console.log('Client server listening on ' + application.port)
});

