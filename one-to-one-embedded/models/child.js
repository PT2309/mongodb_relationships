const mongoose = require("mongoose");

const ChildSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String
});

const Child = mongoose.model("Child", ChildSchema);

module.exports = { Child, ChildSchema };