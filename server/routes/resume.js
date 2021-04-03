const Router = require('express').Router;
const db = require('../../database/controller/resume.js');

const getResume =  (req, res, next) => {
  if (!req.query.seekerId) {
    res.sendStatus(422);
  } else {
    db.findOne(req.query.seekerId)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}

const postResume = (req, res, next) => {
  // const {
  //   firstName, lastName, email, phone, zipcode, city, links, workExperience, certificates, education, other
  // }
  if (!req.body.seekerId) {
    res.sendStatus(422);
  } else {
    db.createOne(req.body)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(404).send(err);
      })
  }
}


const updateResume = (req, res, next) => {
  if (!req.body.seekId) {
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







// module.exports = resumeRoutes;
module.exports = {
  getResume,
  postResume,
  getAllResumes,
  updateResume,
  deleteResume
};