const mongoose = require('mongoose');
const db = require('../database.js');

const seekerUserSchema = new mongoose.Schema({
  email: {
    type: String,
    minLength: 5,
    maxLength: 255,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 40
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 40
  },
  zipcode: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 10
  },
  city: {
    type: String,
    required: false,
    trim: true,
    minLength: 2,
    maxLength: 100
  },
  ifResumePublic: { type: Boolean, default: false },
  appointments: {
    required: false,
    type: [{
      dateCreated: { type: Date, default: Date.now },
      startTime: { type: Date, required: true },
      endTime: { type: Date, required: true },
      category: {
        type: String,
        enum: ['interview', 'phoneScreen', 'personal'],
        required: true
      },
      title: {
        type: String,
        required: true,
        maxLength: 50
      },
      appointmentNote: {
        type: String,
        required: false,
        maxLength: 1000
      }
    }]
  },
  notes: {
    required: false,
    type: [{
      dateCreated: {
        type: Date,
        default: Date.now
      },
      category: {
        type: String,
        enum: ['listing', 'interview', 'application', 'personal', 'company'],
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
  applications: {
    required: false,
    type: [{
      dateCreated: {type: Date, default: Date.now},
      status: {
        required: true,
        type: String,
        enum: ['started', 'submited', 'rejected', 'interview', 'pending']},
      jobListingId: {required: true, type: String }
    }]
  },
  savedJobs: {
    required: false,
    type: [{
      jobListingId: { required: true, type: String },
      interestLevel: {
        type: String,
        enum: ['1', '2', '3'] ,
        required: true
      }
    }]
  }
});

module.exports = seekerUserSchema;
