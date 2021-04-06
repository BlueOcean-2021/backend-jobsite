
const createModel = (model, params, resolve, reject) => {
  var newModel = new model(params);
  newModel.save((err, response) => {
    if (err) {
      reject(err);
    } else {
      resolve(response);
    }
  });
};

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

const updateSubdocument = (mainModel, mainId, childAttributeKey, childId, updatedFields, resolve, reject) => {
  mainModel.findOne({ _id: mainId}, (err, result) => {
    let currentMain = result;
    for (let field in updatedFields) {
      currentMain[childAttributeKey].id(childId)[field] = updatedFields[field];
    }
    currentMain.save((err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
};



module.exports = {
  createModel,
  addSubdocumentToModel,
  deleteSubdocument,
  updateSubdocument
};