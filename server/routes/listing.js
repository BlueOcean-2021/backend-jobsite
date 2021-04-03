const db = require('../../database/controller/listing.js');

const getListing =  (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    db.findOne(req.query.id)
      .then(res => {
        res.json(res.data.rows[0]);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
}

const postResume = (req, res, next) => {
  // const {
  //   firstName, lastName, email, phone, zipcode, city, links, workExperience, certificates, education, other
  // }
  if (!req.body.id) {
    res.sendStatus(422);
  } else {
    db.createOne(req.body)
      .then(res => {
        res.json(res.data.rows[0]);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
}


const updateResume = (req, res, next) => {
  if (!req.body.id) {
    res.sendStatus(422);
  } else {
    db.updateOne(req.body)
      .then(res => {
        res.json(res.data.rows[0]);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
}

const getAllResumes = (req, res, next) => {
  if (!req.body.filters) {
    db.findAll()
    .then(result => {
      res.json(res.data.rows);
    })
    .catch(err => {
      res.status(500).send(err)
    })
  } else {
    db.findAllByFilter(req.body)
    .then(result => {
      res.json(res.data.rows);
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
}

const deleteResume = (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    db.deleteOne(req.query.id)
      .then(res => {
        res.json(res);
      })
      .catch(err => {
        res.sendStatus(404);
      })
  }
}

