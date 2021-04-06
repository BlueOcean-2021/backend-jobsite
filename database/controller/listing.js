const mongoose = require('mongoose');
const jobListingModel = require('../model/jobListingModel.js');


const listing = {
  // create new listing
  createOne:(params) => {
    return new Promise((resolve, reject) => {
      jobListingModel.create(params)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
    // update one by listing _id
  updateOne: (jobListingId, update) => {
    return new Promise((resolve, reject) => {
      jobListingModel.updateOne({_id: jobListingId}, update)
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
      jobListingModel.findOne({_id: jobListingId})
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
      jobListingMode.deleteOne({_id: jobListingId})
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
      jobListingModel.find({})
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
    let options = employerId ? {_id: employerId} : {};
    return new Promise((resolve, reject) => {
      jobListingModel.find(options)
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
      jobListingModel.find(params)
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
      jobListingModel.findOneAndUpdate({_id: jobListingId}, {$addToSet: {seekerIds: [applicantId]}})
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