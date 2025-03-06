const express = require("express");
const router = express.Router();
const reminderController = require("../controller/reminderController");

router.post("/add/reminder/api/", reminderController.addReminder);
router.get("/list/reminder/api/", reminderController.listReminder);

module.exports = router;
