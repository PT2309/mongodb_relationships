const mongoose = require("mongoose");

const Enrollment = mongoose.model(
  "Enrollment",
  new mongoose.Schema({
    enrollmentCode: String,
    child: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Child"
    }
  })
);

module.exports = Enrollment;