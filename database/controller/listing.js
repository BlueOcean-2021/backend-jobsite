const mongoose = require('mongoose');
const JobListingModel = require('../model/jobListingModel.js');
const { createModel, regexCreate } = require('./reuse.js');


const listing = {
  // create new listing
  createOne:(params) => {
    return new Promise((resolve, reject) => {
      createModel(JobListingModel, params, resolve, reject);
    });
  },

  searchListings: (criteria) => {
    return new Promise ((resolve, reject) => {
      let search = regexCreate(criteria);
      JobListingModel.find({
        $or: [
          {'jobDescription': {$regex: search, $options: 'i'}},
          {'requirements': {$regex: search, $options: 'i'}},
          {'experienceLevel': {$regex: search, $options: 'i'}},
          {'industry': {$regex: search, $options: 'i'}},
          {'company': {$regex: search, $options: 'i'}},
          {'title': {$regex: search, $options: 'i'}}
        ]
      })
        .exec(function(err, results) {
          if (err) { reject(err) };
          resolve(results);
        });
    });
  },
    // update one by listing _id
  updateOne: (jobListingId, update) => {
    return new Promise((resolve, reject) => {
      JobListingModel.updateOne({_id: jobListingId}, update)
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  },
  // find one by listing _id'.
  findOne: (jobListingId) => {
    return new Promise((resolve, reject) => {
      JobListingModel.findOne({_id: jobListingId})
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  },
  // delete one by listing _id
  deleteOne: (jobListingId) => {
    return new Promise((resolve, reject) => {
      jobListingMode.deleteOne({_id: jobListingId})
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  },

  getAll: () => {
    return new Promise((resolve, reject) => {
      JobListingModel.find({})
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  },
  // find all
  // if employ _id passed -> find all listings by specific employer
  findAllByEmployer: (employerId) => {
    let options = employerId ? {_id: employerId} : {};
    return new Promise((resolve, reject) => {
      JobListingModel.find(options)
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  },
  //find all by filter option(s)
  findAllByFilter: (params) => {
    return new Promise ((resolve, reject) => {
      JobListingModel.find(params)
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  },

  addApplicant: (jobListingId, applicantId) => {
    return new Promise ((resolve, reject) => {
      JobListingModel.findOneAndUpdate({_id: jobListingId}, {$addToSet: {seekerIds: [applicantId]}})
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  }
}

module.exports = listing;