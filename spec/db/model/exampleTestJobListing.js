const mongoose = require('mongoose');
const jobListingSchema = require('../../../database/model/jobListingModel.js')
const jobListingModel = mongoose.model('jobListing', jobListingSchema);

var test = {
  company: 'Jbl',
  industry: 'Sound',
  datePosted: '2021-03-4',
  title: 'QA Engineer',
  employmentType: 'contract',
  workLocationType: 'onsite',
  zipcode: '91403',
  city: 'SF',
  experienceLevel: 'mid',
  requirements: ['2-4 years of qa training', 'navigating reddit'],
  benefits: ['401k', 'coffee'],
  salary: '50000',
  jobDescription: 'Switch to a specified branch. The working tree and the index are updated to match the branch. All new commits will be added to the tip of this branch',
  companyDescription: 'If you have local modifications to one or more files that are different between the current branch and the branch to which you are switching, the command refuses to switch branches in order to preserve your modifications in context. However, with this option, a three-way merge between the current branch, your working tree contents, and the new branch is done, and you will be on the new branch.'
}

// jobListingModel.create(test)
//   .then(() => console.log('test resume insert complete'))
//   .catch((err) => console.log(err));

jobListingModel.find({})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
