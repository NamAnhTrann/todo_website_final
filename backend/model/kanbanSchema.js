const mongoose = require("mongoose");

let kanbanBoardSchema = new mongoose.Schema({
  kanbanTitle: {
    type: String,
    required: true,
  },
  kanbanDescription: {
    type: String,
    required: true,
  },
  kanbanEnum: {
    type: String,
    enum: ["COMPLETED", "PENDING", "TO_DO"],
  },
  kanbanCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Kanban", kanbanBoardSchema);
