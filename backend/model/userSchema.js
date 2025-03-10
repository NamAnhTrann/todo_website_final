const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  userFirstName: {
    required: false,
    type: String,
    default: "John",
  },
  userLastName: {
    required: false,
    type: String,
    default: "Doe",
  },
  userFirebaseId: {
    //firebase generate
    type: String,
  },
  userPhoneNumber: {
    type: Number,
  },
  userEmail: {
    //firebase generate
    type: String,
  },
  userLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userLocation",
  },
});

module.exports = mongoose.model("User", userSchema);
