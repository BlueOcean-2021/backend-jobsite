const mongoose = require('mongoose');
const jobListingModel = require('../../../database/model/jobListingModel.js');


var test = {
  employerId: '6068b58447618a5d91817d24',
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

test2 = {
  employerId: '6068b58447618a5d91817d24',
  company: 'HigherEd.com',
  industry: 'Online Education',
  datePosted: '2021-02-28',
  title: 'Frontend Engineer',
  employmentType: 'fulltime',
  workLocationType: 'onsite',
  zipcode: '91403',
  city: 'SF',
  experienceLevel: 'mid',
  requirements: ['2-4 years of qa training', 'navigating reddit'],
  benefits: ['401k'],
  salary: '100000',
  jobDescription: 'Porta non pulvinar neque laoreet suspendisse. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Enim eu turpis egestas pretium aenean. Massa eget egestas purus viverra accumsan. Elit duis tristique sollicitudin nibh sit amet commodo. Sit amet mattis vulputate enim nulla aliquet porttitor. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Enim neque volutpat ac tincidunt vitae.',
  companyDescription: 'Bibendum est ultricies integer quis auctor elit sed vulputate. Blandit cursus risus at ultrices mi.'
}

//jobListingModel.create(test2)
//.then(res => console.log(`job lised in db:  ${res}`))
//.catch((err) => console.log(err));

jobListingModel.find({})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
