const db = require('../../database/controller/listing.js');

const getListing =  (req, res, next) => {
  //provide an employeeId
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    db.findOne(req.query.id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
}

const postListing = (req, res, next) => {
  //needs employerId
  if (!req.body.id) {
    res.sendStatus(422);
  } else {
    db.createOne(req.body)
      .then(res => {
        res.json(res);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
}


const updateListing = (req, res, next) => {
  if (!req.body.id) {
    res.sendStatus(422);
  } else {
    db.updateOne(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
}

const getAllListings = (req, res, next) => {
  if (!req.body.filters) {
    db.getAll()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(500).send(err)
    })
  } else {
    db.findAllByFilter(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
}

const deleteListing = (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    db.deleteOne(req.query.id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
}

const applyToListing = (req, res, next) => {
  if (!req.query.seekerId || !req.query.listingId) {
    res.sendStatus(422);
  } else {
    db.addApplicant(req.query.listingId, req.query.seekerId)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
}

module.exports = {
  getListing,
  postListing,
  updateListing,
  getAllListings,
  deleteListing,
  applyToListing
}