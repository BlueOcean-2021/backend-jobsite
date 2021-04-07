const mongoose = require('mongoose');
const {
  createModel,
  addSubdocumentToModel,
  deleteSubdocument,
  updateSubdocument,
<<<<<<< HEAD
  findAllInSubdocument,
  filterSubdocument
=======
  findAllInSubdocument
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601
} = require('./reuse.js');
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
      createModel(SeekerModel, { email }, resolve, reject);
    });
  },

<<<<<<< HEAD
  filterNotes: (seekerId, params) => {
    return new Promise((resolve, reject) => {
      filterSubdocument(SeekerModel, seekerId, 'notes', params, resolve, reject)
    });
  },
  // filterNotes: (seekerId, params) => {
  //   return new Promise((resolve, reject) => {
  //     SeekerModel.aggregate([
  //       { $match: { _id: new mongoose.Types.ObjectId(seekerId) }},
  //       { $unwind: '$notes' },
  //       { $match: {'notes.category': params.category} }
  //     ])
  //       .exec((err, result) => {
  //         if (err) { reject(err) };
  //         resolve(result);
  //     });
  //   });
  // },

  findAllNotes: ({seekerId}) => {
=======
  findAllNotes: ({ seekerId }) => {
>>>>>>> 8c5240bf790cabc69eb9c417676faabd519fd601
    return new Promise((resolve, reject) => {
      findAllInSubdocument(SeekerModel, seekerId, 'notes', resolve, reject);
    });
  },

  findAllAppointments: ({ seekerId }) => {
    return new Promise((resolve, reject) => {
      findAllInSubdocument(SeekerModel, seekerId, 'appointments', resolve, reject);
    });
  },

  findAllApplications: ({ seekerId }) => {
    return new Promise((resolve, reject) => {
      findAllInSubdocument(SeekerModel, seekerId, 'applications', resolve, reject);
    });
  },

  findAllSavedJobs: ({ seekerId }) => {
    return new Promise((resolve, reject) => {
      findAllInSubdocument(SeekerModel, seekerId, 'savedJobs', resolve, reject);
    });
  },

  // add subdocument params: (mainModel, mainId, addChildModel, childAttributeKey, childObj, resolve, reject)
  addNote: (seekerId, noteObj) => {
    return new Promise((resolve, reject) => {
      addSubdocumentToModel(SeekerModel, seekerId, SeekerNoteModel, 'notes', noteObj, resolve, reject);
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
  // delete subdocument params: (mainModel, mainId, childAttributeKey, childId, resolve, reject)
  deleteNote: (seekerId, noteId) => {
    return new Promise((resolve, reject) => {
      deleteSubdocument(SeekerModel, seekerId, 'notes', noteId, resolve, reject);
    });
  },

  deleteAppointment: (seekerId, appointmentId) => {
    return new Promise((resolve, reject) => {
      deleteSubdocument(SeekerModel, seekerId, 'appointments', appointmentId, resolve, reject);
    });
  },

  deleteApplication: (seekerId, applicationId) => {
    return new Promise((resolve, reject) => {
      deleteSubdocument(SeekerModel, seekerId, 'applications', applicationId, resolve, reject);
    });
  },

  deleteSavedJob: (seekerId, savedJobId) => {
    return new Promise((resolve, reject) => {
      deleteSubdocument(SeekerModel, seekerId, 'savedJobs', savedJobId, resolve, reject);
    });
  },
  // update subdocument params: (mainModel, mainId, childAttributeKey, childId, updatedFields, resolve, reject)
  updateNote: (seekerId, noteId, updatedFields) => {
    return new Promise((resolve, reject) => {
      updateSubdocument(SeekerModel, seekerId, 'notes', noteId, updatedFields, resolve, reject);
    });
  },

  updateAppointment: (seekerId, appointmentId, updatedFields) => {
    return new Promise((resolve, reject) => {
      updateSubdocument(SeekerModel, seekerId, 'appointments', appointmentId, updatedFields, resolve, reject);
    });
  },

  updateApplication: (seekerId, applicationId, updatedFields) => {
    return new Promise((resolve, reject) => {
      updateSubdocument(SeekerModel, seekerId, 'applications', applicationId, updatedFields, resolve, reject);
    });
  },

  updateSavedJob: (seekerId, savedJobId, updatedFields) => {
    return new Promise((resolve, reject) => {
      updateSubdocument(SeekerModel, seekerId, 'savedJobs', savedJobId, updatedFields, resolve, reject);
    });
  },
}

module.exports = seeker;
