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
  updateOne: (id, update) => {
    return new Promise((resolve, reject) => {
      jobListingModel.updateOne({_id: id}, update)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // find one by listing _id
  findOne: (id) => {
    return new Promise((resolve, reject) => {
      jobListingModel.findOne({_id: id})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // delete one by listing _id
  deleteOne: (id) => {
    return new Promise((resolve, reject) => {
      jobListingMode.deleteOne({_id: id})
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
  findAllByEmployer: (id) => {
    let options = id ? {employerId: id} : {};
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
  }
}

module.exports = listing;