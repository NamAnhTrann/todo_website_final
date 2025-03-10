const User = require("../model/userSchema");

module.exports = {
  addUser: async function (req, res) {
    // const userId = req.user._id;
    try {
      const newUser = new User({
        ...req.body,
      });
      await newUser.save();
      return res.status(201).json(newUser);
    } catch (err) {
      return res.status(500).json({ message: "error", err });
    }
  },
};
