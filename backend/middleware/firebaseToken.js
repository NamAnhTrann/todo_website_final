const admin = require("firebase-admin");
const User = require("../model/userSchema");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert({
    firebaesProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseEmail: process.env.FIREBASE_CLIENT_EMAIL,
    firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});

async function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization?.split("Bearer")[1];
    if (!token) {
      console.log("token does not exist or not been sent", token);
      return res.status(404).json({ message: "No token", err });
    }
    const decodedToken = await admin.auth().verifyToken(token);
    const firebaseUid = decodedToken.uid;
    console.log(firebaseUid);

    let user = await User.findOne({
      userFirebaseId: firebaseUid,
    });
    if (!user) {
      user = new User({
        userFirebaseId: firebaseUid,
        userEmail: decodedToken.email,
      });
      await user.save();
      req.user = user;
      next();
    }
  } catch (err) {
    return res.status(500).json({ message: "Error occured", err });
  }
}
module.exports = verifyToken;
