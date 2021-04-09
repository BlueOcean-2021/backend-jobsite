const Router = require('express').Router;
const resume = require('../../database/controller/resume.js');

const getResume =  (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    resume.findOne(req.query.id)
      .then(response => res.json(response))
      .catch(err => res.status(404).send(err));
  }
}

const postResume = (req, res, next) => {
  if (!req.body.seekerId) {
    res.sendStatus(422);
  } else {
    resume.createOne(req.body)
      .then(response => res.json(response))
      .catch(err => res.status(404).send(err))
  }
}

const updateResume = (req, res, next) => {
  if (!req.body.seekerId) {
    res.sendStatus(422);
  } else {
    //if
    resume.updateOne(req.body)
      .then(result => res.json(result))
      .catch(err => res.sendStatus(404))
  }
}

const getAllResumes = (req, res, next) => {
  if (!req.body.filters) {
    resume.findAll()
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
  } else {
    resume.findAllByFilter(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
  }
}

const deleteResume = (req, res, next) => {
  if (!req.query.id) {
    res.sendStatus(422);
  } else {
    resume.deleteOne(req.query.id)
      .then(response => res.json(response))
      .catch(err => res.sendStatus(404))
  }
}

const searchResumes = (req, res, next) => {
  if (req.query.search === '') {
    return
  }
  resume.searchResumes(req.query.search)
    .then(response => res.json(response))
    .catch(err => res.sendStatus(404))
}

// module.exports = resumeRoutes;
module.exports = {
  getResume,
  postResume,
  getAllResumes,
  updateResume,
  deleteResume,
  searchResumes
};