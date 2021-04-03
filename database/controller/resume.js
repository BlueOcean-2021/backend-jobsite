const mongoose = require('mongoose');
const resumeModel = require('../model/resumeModel.js');

const resume = {
  createOne: (params) => {
    return new Promise ((resolve, reject) => {
      resumeModel.create(params)
        .then(result => {
          resolve(result)
        })
        .catch(err => {
          reject(err);
        })
    })
  },
  findOne: (id) => {
    return new Promise((resolve, reject) => {
      resumeModel.find({_id: id})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
      });
  },
  deleteOne: (id) => {
    return new Promise((resolve, reject) => {
      resumeModel.deleteOne({_id: id})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
      });
  },
  updateOne: (id) => {
    return new Promise((resolve, reject) => {
      resumeModel.updateOne({_id: id})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
      });
  },
  findAll: () => {
    return new Promise((resolve, reject) => {
      resumeModel.find({})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
      });
  },
  findAllByFilter: (params) => {
    return new Promise((resolve, reject) => {
      resumeModel.find(params)
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
      });
  }
}

module.exports = resume;