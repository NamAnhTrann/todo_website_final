const mongoose = require("mongoose");

let reminderSchema = new mongoose.Schema({
  reminderTitle: {
    type: String,
    default: "None",
    required: true,
  },
  reminderCreatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },

  reminderDescription: {
    type: String,
    default: "None",
    required: true,
  },
});

module.exports = mongoose.model("Reminder", reminderSchema);
