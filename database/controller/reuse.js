
const addSubdocumentToModel = (mainModel, mainId, addChildModel, childAttributeKey, childObj, resolve, reject) => {
  mainModel.findOne({ _id: mainId }, (err, result) => {
    let currentMain = result;
    let newChild = new addChildModel(childObj);
    currentMain[childAttributeKey].push(newChild);
    currentMain.save((err, writtenChild) => {
      if (err) {
        reject(err);
      } else {
        resolve(writtenChild);
      }
    });
  });
};

const deleteSubdocument = (mainModel, mainId, childAttributeKey, childId, resolve, reject) => {
  mainModel.findOne({ _id: mainId }, (err, result) => {
    let currentMain = result;
    currentMain[childAttributeKey].pull({ _id: childId });
    currentMain.save((err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
};




module.exports = { addSubdocumentToModel, deleteSubdocument };