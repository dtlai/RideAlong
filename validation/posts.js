const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.description = validText(data.description) ? data.description : "";
  data.carMake = validText(data.carMake) ? data.carMake : "";
  data.startLocation = validText(data.startLocation) ? data.startLocation : "";
  data.endLocation = validText(data.endLocation) ? data.endLocation : "";

  if (!Validator.isLength(data.title, { min: 5, max: 30 })) {
    errors.title = "Title must be between 5 and 30 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (!Validator.isLength(data.description, { min: 5, max: 75 })) {
    errors.description = "Description must be between 5 and 75 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  if (Validator.isEmpty(data.carMake)) {
    errors.carMake = "Car Make field is required";
  }

  if (Validator.isEmpty(data.startLocation)) {
    errors.startLocation = "Start location field is required";
  }

  if (Validator.isEmpty(data.endLocation)) {
    errors.endLocation = "End location field is required";
  }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
