const express = require('express');
const dotenv = require('dotenv').config();
const db = require('../database/database.js');
// potentially convert to router later
// const resumeRoutes = require('./routes/resume.js');
const resumeRoutes = require('./routes/resume.js');
const listingRoutes = require('./routes/listing.js');
const app = express();

app.use(express.static('client/dist'));
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
  applyToListing
} = listingRoutes;

const {
  getResume,
  postResume,
  getAllResumes,
  updateResume,
  deleteResume
} = resumeRoutes;

app.get('/api/listing', getListing);
app.get('/api/listing/all', getAllListings);
app.post('/api/listing', postListing);
app.put('/api/listing', updateListing);
app.patch('/api/listing/apply', applyToListing);
app.delete('/api/listing', deleteListing);

app.get('/api/resume/', getResume);
// post resume tested
app.post('/api/resume', postResume);
app.put('/api/resume', updateResume);
app.delete('/api/resume', deleteResume);
app.get('/api/resume/all', getAllResumes);


app.listen(process.env.PORT, () => {
  console.log('Client server listening on 3001')
});