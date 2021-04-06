const mongoose = require('mongoose');
const db = require('../database.js');

// Depricated, using employerNotes.js instead


const employerUserSchema = new mongoose.Schema({
  email: {
    type: String,
    minLength: 5,
    maxLength: 255,
    required: true
  },
  // firstName: {
  //   type: String,
  //   required: true,
  //   trim: true,
  //   minLength: 1,
  //   maxLength: 40
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  //   trim: true,
  //   minLength: 2,
  //   maxLength: 40
  // },
  // company: {
  //   type: String,
  //   required: false,
  //   minLength: 2,
  //   maxLength: 40
  // },
  notes: {
    required: false,
    type: [{
      dateCreated: { type: Date, default: Date.now },
      category: {
        type: String,
        enum: ['candidate', 'interview', 'listing', 'personal'],
        required: true
      },
      title: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
      },
      body: {
        type: String,
        required: false,
        maxLength: 500
      },
    }]
  },
});

module.exports = employerUserSchema;



// listings: {
//   required: false,
//   type: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'jobListingModel'
//   }]
// },


// appointments: {
//   required: false,
//   type: [{
//     dateCreated: { type: Date, default: Date.now },
//     startTime: { type: Date, required: true },
//     endTime: { type: Date, required: true },
//     category: { type: String, enum: ['interview', 'phoneScreen', 'personal'], required: true },
//     title: { type: String, required: true, maxLength: 50 },
//     appointmentNote: { type: String, required: false, maxLength: 1000 }
//   }]
// },