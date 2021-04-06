const Router = require('express').Router;
const {  employerNote, resume, seeker, listing } = require('../../database/controller/index.js');

// const  -> api/userdata

// '/'

// get
app.get('/notes', (req, res) => {
  // store path
  let currentParams = req.params;

  // check if params
    // if params, get one
  // else get all

  // check path
});

const getData = (req, res, next) => {

  //check route through switch

  //check for filter

  //send to appropriate conroller via switch
};

// patch
const updateData = (req, res, next) => {

};

// delete
const deleteData = (req, res, next) => {

};


//post
const postData = (req, res, next) => {

};

app.get('/productid', (req,res) => {
  pgQuery.getProductInfo(req.query[0], (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});



const seeker = {
  // instatiate new seeker note document
  createSeekerModel: ({ email })
  },
  // add subdocument params: (mainModel, mainId, addChildModel, childAttributeKey, childObj, resolve, reject)
  addNote: (seekerId, noteObj) => {

  },

  addAppointment: (seekerId, appointmentObj) => {

  },

  addApplication: (seekerId, applicationObj) => {

  },

  addSavedJob: (seekerId, savedJobsObj) => {

  },
  // delete subdocument params: (mainModel, mainId, childAttributeKey, childId, resolve, reject)
  deleteNote: (seekerId, noteId) => {

  },

  deleteAppointment: (seekerId, appointmentId) => {

  },

  deleteApplication: (seekerId, applicationId) => {

  },

  deleteSavedJob: (seekerId, savedJobId) => {

  },
  // update subdocument params: (mainModel, mainId, childAttributeKey, childId, updatedFields, resolve, reject)
  updateNote: (seekerId, noteId, updatedFields) => {

  },

  updateAppointment: (seekerId, appointmentId, updatedFields) => {

  },

  updateApplication: (seekerId, applicationId, updatedFields) => {

  },

  updateSavedJob: (seekerId, savedJobId, updatedFields) => {
  },
}



























