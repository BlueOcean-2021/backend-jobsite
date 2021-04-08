const listing = require('../../database/controller/listing.js');

const getListing =  (req, res, next) => {
  //provide an employeeId
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    listing.findOne(req.query.id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
};

const postListing = (req, res, next) => {
  //needs employerId
  if (!req.body.employerId) {
    res.sendStatus(422);
  } else {
    listing.createOne(req.body)
      .then(response => {
        res.status(204).json(response);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}


const updateListing = (req, res, next) => {
  if (!req.body.id) {
    res.sendStatus(422);
  } else {
    listing.updateOne(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
};

const getAllListings = (req, res, next) => {
  if (!req.body.filters) {
    listing.getAll()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(500).send(err)
    })
  } else {
    listing.findAllByFilter(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
};

const getEmployerListings = (req, res, next) => {
  const {employerId} = req.query;
  if (!employerId) {
    res.sendStatus(404);
  } else {
    listing.findAllByEmployer(employerId)
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
    listing.deleteOne(req.query.id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
};

const applyToListing = (req, res, next) => {
  if (!req.query.seekerId || !req.query.listingId) {
    res.sendStatus(422);
  } else {
    listing.addApplicant(req.query.listingId, req.query.seekerId)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
};

module.exports = {
  getListing,
  postListing,
  updateListing,
  getAllListings,
  deleteListing,
  applyToListing,
  getEmployerListings
}