const mongoose = require('mongoose');
const { createModel, regexCreate } = require('./reuse.js');
const { ResumeModel } = require('../model/resumeModel.js');

const resume = {

  createOne: (params) => {
    return new Promise ((resolve, reject) => {
      createModel(ResumeModel, params, resolve, reject);
    });
  },

  searchResumes: (criteria) => {
    return new Promise ((resolve, reject) => {
      let search = regexCreate(criteria);
      ResumeModel.find({
        $or: [
          {'workExperience.title': {$regex: search, $options: 'i'}},
          {'workExperience.description': {$regex: search, $options: 'i'}},
          {'workExperience.summary': {$regex: search, $options: 'i'}}
        ]
      })
        .exec(function(err, results) {
          if (err) { reject(err) };
          resolve(results);
        });
    });
  },

  searchResumesPerListing: (criteriaArray) => {
    return new Promise ((resolve, reject) => {
      ResumeModel.find({ '_id': { $in: criteriaArray} })
        .exec(function(err, results) {
          if (err) { reject(err) };
          resolve(results);
        });
    });
  },

  findOne: (seekerId) => {
    return new Promise((resolve, reject) => {
      ResumeModel.find({seekerId: seekerId})
        .then(result => resolve(result))
        .catch(err => reject(err));
      });
  },

  deleteOne: (id) => {
    return new Promise((resolve, reject) => {
      ResumeModel.deleteOne({_id: id})
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  },

  updateOne: (resumeUpdates) => {
    return new Promise((resolve, reject) => {
      ResumeModel.updateOne(resumeUpdates)
        .then(result => resolve(result))
        .catch(err => reject(err));
      });
  },

  findAll: () => {
    return new Promise((resolve, reject) => {
      ResumeModel.find({})
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  },

  findAllByFilter: (params) => {
    return new Promise((resolve, reject) => {
      ResumeModel.find(params)
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  }
}

module.exports = resume;