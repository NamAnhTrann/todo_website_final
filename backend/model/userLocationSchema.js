const mongoose = require("mongoose");

let userLocation = new mongoose.Schema({
  userLocationState: {
    type: String,
  },
  userLocationCity: {
    type: String,
  },
  userLocationPostcode: {
    type: Number,
  },
});

module.exports = mongoose.model("userLocation", userLocation);
