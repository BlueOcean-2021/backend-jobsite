

const addSubdocumentToModel = (mainModel, mainId, addChildModel, childAttribute, childObj, callback) => {
  mainModel.findOne({ _id: mainId }, (err, result) => {
    let currentMain = result;
    let newChild = new addChildModel(childObj);
    currentMain[childAttribute].push(newChild);
    currentMain.save((err, writtenChild) => {
      if (err) {
        callback(err);
      } else {
        callback(null, writtenChild);
      }
    });
  });
}

module.exports = { addSubdocumentToModel };