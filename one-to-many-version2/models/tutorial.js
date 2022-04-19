// define Tutorial with 3 fields: title, author, images.

const mongoose = require("mongoose");

const Tutorial = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    title: String,
    author: String,
    images: []
  })
);

module.exports = Tutorial;