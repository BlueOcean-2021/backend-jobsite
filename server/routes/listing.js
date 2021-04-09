const router = require('express').Router();
const listing = require('../../database/controller/listing.js');

// router -> /api/listing ->

// TESTED & USED
// get all listings
router.get('/all', (req, res, next) => {
  if (!req.body.filters) {
    listing.getAll()
      .then(result => res.json(result))
      .catch(err => res.status(500).send(err));
  } else {
    listing.findAllByFilter(req.body)
      .then(result => res.json(result))
      .catch(err => res.status(500).send(err));
  };
});

// TESTED & USED
// get searched listings
router.get('/search', (req, res, next) => {
  listing.searchListings(req.query.search)
    .then(response => res.json(response))
    .catch(err => res.sendStatus(404))
});

//Untested
router.post('/savedlistings', (req, res, next) => {
  listing.searchListingsPerCandidate(req.body.data)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
});

// NOT SURE IF USED
router.get('/', (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    listing.findOne(req.query.id)
      .then(result => res.json(result))
      .catch(err => res.sendStatus(404));
  }
});

// TESTED & USED
// get employer listings
router.get('/employer', (req, res, next) => {
  const { employerId } = req.query;
  if (!employerId) {
   res.sendStatus(404);
  } else {
   listing.findAllByEmployer(employerId)
     .then(result => res.json(result))
     .catch(err => res.status(500).send(err))
  };
});

// UNTESTED
// post listing
router.post('/', (req, res, next) => {
  if (!req.body.employerId) {
    res.sendStatus(422);
  } else {
    listing.createOne(req.body)
      .then(response => {
        res.status(204).send({
          status: 'OK'
        });
      })
      .catch(err => res.status(404).send(err))
  };
});

// UNTESTED
// update a job listing
router.put('/', (req, res, next) => {
  if (!req.body.id) {
    res.sendStatus(422);
  } else {
    listing.updateOne(req.body)
      .then(result => res.json(result))
      .catch(err => res.sendStatus(404));
  };
});

// UNTESTED
// app.delete('/api/listing', deleteListing);
router.delete('/', (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    listing.deleteOne(req.query.id)
      .then(result => res.status(204).send({ status: 'OK' }))
      .catch(err => res.status(404).send(err));
  };
});

// UNTESTED
// // app.patch('/api/listing/apply', applyToListing);
router.patch('/apply', (req, res, next) => {
  if (!req.query.seekerId || !req.query.listingId) {
    res.sendStatus(422);
  } else {
    listing.addApplicant(req.query.listingId, req.query.seekerId)
      .then(result => res.json(result))
      .catch(err => res.sendStatus(404))
  };
});

module.exports = router;
