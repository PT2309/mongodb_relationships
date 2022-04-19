const mongoose = require("mongoose");

const Child = mongoose.model(
  "Child",
  new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
  })
);

module.exports = Child;