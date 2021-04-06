const mongoose = require('mongoose');
const ResumeModel = require('../model/resumeModel.js');

const resume = {
  createOne: (params) => {
    return new Promise ((resolve, reject) => {
      ResumeModel.create(params)
        .then(result => {
          resolve(result)
        })
        .catch(err => {
          reject(err);
        })
    })
  },
  findOne: (seekerId) => {
    return new Promise((resolve, reject) => {
      ResumeModel.find({seekerId: seekerId})
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
      ResumeModel.deleteOne({_id: id})
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
      });
  },
  updateOne: (resumeId) => {
    return new Promise((resolve, reject) => {
      ResumeModel.updateOne({_id: resumeId})
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
      ResumeModel.find({})
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
      ResumeModel.find(params)
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