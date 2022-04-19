const mongoose = require("mongoose");
const ChildSchema = require("./child").ChildSchema;

const Enrollment = mongoose.model(
  "Enrollment",
  new mongoose.Schema({
    enrollmentCode: String,
    child: ChildSchema
  })
);

module.exports = Enrollment;