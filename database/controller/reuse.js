
const addSubdocumentToModel = (mainModel, mainId, addChildModel, childAttribute, childObj, resolve, reject) => {
  mainModel.findOne({ _id: mainId }, (err, result) => {
    let currentMain = result;
    let newChild = new addChildModel(childObj);
    currentMain[childAttribute].push(newChild);
    currentMain.save((err, writtenChild) => {
      if (err) {
        reject(err);
      } else {
        resolve(writtenChild);
      }
    });
  });
};



module.exports = { addSubdocumentToModel };