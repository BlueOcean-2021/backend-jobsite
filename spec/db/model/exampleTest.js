const resumeModel = mongoose.model('resume', resumeSchema);

var test = {
  firstName: "Bob",
  lastName: "Hurley",
  email: "hhm@lol.com",
  phone: "143-241-9863",
  links: {
    linkedIn: "linkedin.com/bob"
  },
  zipcode: "14592",
  education: {
    institution: "UC Davis",
    yearGraduated: "2016",
    degree: "agricultural studies",
  },
  workExperience: {
    employer: 'Pizza hut',
      title: 'big mac engineer',
      startDate: '2000-04',
      endDate: '2021-03',
      description: 'workd at micky ds'
  },
  certificates: { name: 'Solidworks', licenseNum: 234523453 },
  other: 'Other otherthertherthertherther  therther therther'
}
resumeModel.create(test)
  .then(() => console.log('test resume insert complete'))
  .catch((err) => console.log(err));

resumeModel.find({})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
