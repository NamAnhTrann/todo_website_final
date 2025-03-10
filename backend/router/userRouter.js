const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const verifyFirebaseToken = require("../middleware/firebaseToken");

router.post("/add/user/api/", userController.addUser);
router.post("/verify/token/", verifyFirebaseToken);
module.exports = router;
