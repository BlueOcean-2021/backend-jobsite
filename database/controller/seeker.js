const mongoose = require('mongoose');
const { addSubdocumentToModel } = require('./reuse.js');
const {
  AppointmentsModel,
  SeekerNoteModel,
  ApplicationsModel,
  SavedJobsModel,
  SeekerModel
} = require('../model/seekerDataModel.js');

const seeker = {
  // instatiate new seeker note document
  createSeekerModel: ({ email }) => {
    return new Promise((resolve, reject) => {
      var newSeeker = new SeekerModel({ email })
      newSeeker.save((err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    })
  },

  // add subdocument params: (mainModel, mainId, addChildModel, childAttributeKey, childObj, resolve, reject)
  addNote: (seekerId, noteObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(SeekerModel, seekerId, SeekerNoteModel, 'notes', noteObj, resolve, reject)
    });
  },

  addAppointment: (seekerId, appointmentObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(SeekerModel, seekerId, AppointmentsModel, 'appointments', appointmentObj, resolve, reject);
    });
  },

  addApplication: (seekerId, applicationObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(SeekerModel, seekerId, ApplicationsModel, 'applications', applicationObj, resolve, reject);
    });
  },

  addSavedJob: (seekerId, savedJobsObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(SeekerModel, seekerId, SavedJobsModel, 'savedJobs', savedJobsObj, resolve, reject);
    });
  },

  deleteNote: (seekerId, noteId) => {
    return new Promise((resolve, reject) => {
      SeekerModel.findOne({ _id: seekerId }, (err, result) => {
        let currentSeeker = result;
        currentSeeker.notes.findOneAndRemove({ _id: noteId }, (err, removedItem) => {
          if (err) {
            reject(err);
          } else {
            resolve(removedItem);
          }
        });
      });
    });
  },
  updateNote: (seekerId, noteId, updatedFields) => {
    return new Promise((resolve, reject) => {
      SeekerModel.findOne({ _id: seekerId}, (err, result) => {
        let currentSeeker = result;
        currentSeeker.notes.findOneAndUpdate({ _id: noteId }, updatedFields, (err, preupdatedQuery) => {
          if (err) {
            reject(err);
          } else {
            resolve(preupdatedQuery);
          }
        });
      });
    });
  },
  // generic add subdocument
  // addSubdocumentToModel: (mainModel, mainId, addChildModel, childAttribute, childObj) => {
  //     return new Promise((resolve, reject) => {
  //       mainModel.findOne({ _id: mainId }, (err, result) => {
  //         let currentMain = result;
  //         let newChild = new addChildModel(childObj);
  //         currentMain[childAttribute].push(newChild);
  //         currentMain.save((err, writtenChild) => {
  //           if (err) {
  //             reject(err);
  //           } else {
  //             resolve(writtenNote);
  //           }
  //         });
  //       });
  //     });

  // }
}

module.exports = seeker;