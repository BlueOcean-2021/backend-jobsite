const mongoose = require('mongoose');
const JobListingModel = require('../model/jobListingModel.js');
const { createModel } = require('./reuse.js');


const listing = {
  // create new listing
  createOne:(params) => {
    return new Promise((resolve, reject) => {
      createModel(JobListingModel, params, resolve, reject);
    });
  },
    // update one by listing _id
  updateOne: (jobListingId, update) => {
    return new Promise((resolve, reject) => {
      JobListingModel.updateOne({_id: jobListingId}, update)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // find one by listing _id'.
  findOne: (jobListingId) => {
    return new Promise((resolve, reject) => {
      JobListingModel.findOne({_id: jobListingId})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // delete one by listing _id
  deleteOne: (jobListingId) => {
    return new Promise((resolve, reject) => {
      JobListingModel.deleteOne({_id: jobListingId})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getAll: () => {
    return new Promise((resolve, reject) => {
      JobListingModel.find({})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // find all
  // if employ _id passed -> find all listings by specific employer
  findAllByEmployer: (employerId) => {
    let options = employerId ? {employerId: employerId} : {};
    return new Promise((resolve, reject) => {
      JobListingModel.find(options)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  //find all by filter option(s)
  findAllByFilter: (params) => {
    return new Promise ((resolve, reject) => {
      JobListingModel.find(params)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  addApplicant: (jobListingId, applicantId) => {
    return new Promise ((resolve, reject) => {
      JobListingModel.findOneAndUpdate({_id: jobListingId}, {$addToSet: {seekerIds: [applicantId]}})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

module.exports = listing;