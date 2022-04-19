// in server.js, 
// we import mongoose to our app 
// and connect to MongoDB database.

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/relationshipModels_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));

// load the models
  const Child = require("./models/child");
  const Enrollment = require("./models/schoolAdmission");
  

  // create and save child object 
  const createChild = function(name, age, gender) {
    const child = new Child({
      name,
      age,
      gender
    });
  
    return child.save();
  };
  

  // create and save enrollment object 
  const createEnrollment = function(enrollmentCode, child) {
    const enrollment = new Enrollment({
      enrollmentCode,
      child
    });
  
    return enrollment.save();
  };
  

  // adding a new child object 
  createChild("Srishti", 4, "female")
    .then(child => {
      console.log("> Created new Student Child Object\n", child);
      
      const childId = child._id.toString();
      return createEnrollment(childId.substring(0, 10).toUpperCase(), childId);
    })
    .then(enrollment  => {
      console.log("> Created new Enrollment\n", enrollment);
    })
    .catch(err => console.log(err));
