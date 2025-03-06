const Reminder = require("../model/reminderSchema");

module.exports = {
  //TODO
  addReminder: async function (req, res) {
    try {
      const newReminder = new Reminder({
        ...req.body,
      });
      newReminder.save();
      return res.status(201).json(newReminder);
    } catch (err) {
      return res.status(500).json({ message: "error occucred" });
    }
  },

  listReminder: async function (req, res) {
    try {
      const reminders = await Reminder.find({});
      if (!reminders) {
        console.log("error, no reminders found");
        return res
          .status(400)
          .json({ message: "No reminders found to list all" });
      }
      return res.status(201).json(reminders);
    } catch (err) {
      return res.status(500).json({ err });
    }
  },
};
